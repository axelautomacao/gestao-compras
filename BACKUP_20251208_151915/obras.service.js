import { db } from '../../config/firebase.js';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc, query, where } from "firebase/firestore";
import { COST_PER_HOUR, COST_PER_OVERTIME_HOUR, EXTRA_FACTOR } from '../../constants/costs.js';
import { EVMService } from './evm.service.js';

export const ObrasService = {
    getObras: async () => {
        const snapshot = await getDocs(collection(db, 'obras'));
        return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
    },

    getObraById: async (id) => {
        const snapshot = await getDocs(collection(db, 'obras'));
        const obra = snapshot.docs.find(d => d.id === id);
        return obra ? { id: obra.id, ...obra.data() } : null;
    },

    createObra: async (data) => {
        const docRef = await addDoc(collection(db, 'obras'), {
            ...data,
            created_at: new Date().toISOString()
        });
        return docRef.id;
    },

    updateObra: async (id, data) => {
        await updateDoc(doc(db, 'obras', id), {
            ...data,
            updated_at: new Date().toISOString()
        });
    },

    deleteObra: async (id) => {
        await deleteDoc(doc(db, 'obras', id));
    },

    getObraStats: async (obraId, includeRDO = false) => {
        // Buscar obra e compras relacionadas
        const obra = await ObrasService.getObraById(obraId);
        const comprasRef = collection(db, 'compras');
        const q = query(comprasRef, where('obraId', '==', obraId));
        const comprasSnap = await getDocs(q);

        const compras = comprasSnap.docs.map(d => ({ id: d.id, ...d.data() }));

        // Calcular estatísticas
        let totalGasto = 0;
        let orcadoTotal = Number(obra?.valor_orcado || 0);
        const porStatus = {};
        const gastosPorCategoria = {};
        const gastosMensais = {};
        const gastosDiarios = {};
        const gastosSemanais = {};
        let minMovDate = null;
        let maxMovDate = null;
        let atrasos = 0;
        let deliveries = 0;
        let onTime = 0;
        let leadSum = 0;
        let leadCount = 0;
        const naturezaTotais = {};
        const ccTotais = {};
        let aguardandoEntrega = 0;

        const mapNatureza = (natRaw = '') => {
            const nat = (natRaw || '').toLowerCase();
            if (nat.includes('desperd')) return 'Desperdício';
            if (nat.includes('lista') || nat.includes('inicial')) return 'Lista inicial';
            return 'Material adicional';
        };

        const getWeekKey = (d) => {
            const date = new Date(d.getTime());
            const dayNum = (date.getDay() + 6) % 7;
            date.setDate(date.getDate() - dayNum + 3);
            const firstThursday = date.getTime();
            date.setMonth(0, 1);
            if (date.getDay() !== 4) {
                date.setMonth(0, 1 + ((4 - date.getDay()) + 7) % 7);
            }
            const week = 1 + Math.ceil((firstThursday - date) / 604800000);
            return `${date.getFullYear()}-W${String(week).padStart(2, '0')}`;
        };

        compras.forEach(c => {
            const valor = Number(c.valor_total ?? c.valor_estimado ?? 0);
            totalGasto += valor;

            porStatus[c.status_compra] = (porStatus[c.status_compra] || 0) + 1;

            const prev = c.previsao_entrega ? new Date(c.previsao_entrega) : null;
            const recv = c.data_recebimento ? new Date(c.data_recebimento) : null;
            if (c.status_compra !== 'Entregue' && prev && prev < new Date()) atrasos++;
            if (!recv) {
                aguardandoEntrega++;
            }
            if (recv && prev) {
                deliveries++;
                if (recv <= prev) onTime++;
            }
            if (c.data_emissao && (recv || prev)) {
                const endDate = recv || prev;
                const diff = Math.max(0, (new Date(endDate) - new Date(c.data_emissao)) / (1000 * 60 * 60 * 24));
                leadSum += diff;
                leadCount++;
            }

            const cat = mapNatureza(c.natureza_compra || c.categoria || 'Outros');
            gastosPorCategoria[cat] = (gastosPorCategoria[cat] || 0) + valor;

            const nat = (c.natureza_compra || 'Outros').trim();
            naturezaTotais[nat] = (naturezaTotais[nat] || 0) + valor;

            const cc = c.centroCustoNome || c.centro_custo || c.centroCustoId || 'N/D';
            ccTotais[cc] = (ccTotais[cc] || 0) + valor;

            // Data de movimento para gráficos (preferência: recebimento > emissão > previsão > solicitação)
            const dataMov = c.data_recebimento || c.data_emissao || c.previsao_entrega || c.data_solicitacao;
            if (dataMov) {
                const date = new Date(dataMov);
                if (!Number.isNaN(date.getTime())) {
                    if (!minMovDate || date < minMovDate) minMovDate = date;
                    if (!maxMovDate || date > maxMovDate) maxMovDate = date;
                    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
                    gastosMensais[key] = (gastosMensais[key] || 0) + valor;

                    const diaKey = date.toISOString().split('T')[0];
                    gastosDiarios[diaKey] = (gastosDiarios[diaKey] || 0) + valor;

                    const weekKey = getWeekKey(date);
                    gastosSemanais[weekKey] = (gastosSemanais[weekKey] || 0) + valor;
                }
            }
        });

        // Curva S semanal (planejado baseado no orçamento da obra)
        const basePlanejado = Number(orcadoTotal || 0) || totalGasto;
        const curvaS = ObrasService.calculateCurvaS(basePlanejado, gastosSemanais, {
            start: obra?.data_prevista_inicio || obra?.data_inicio || minMovDate,
            end: obra?.data_prevista_fim || obra?.data_fim || maxMovDate
        });
        const sla = deliveries ? (onTime / deliveries) * 100 : 0;
        const lead = leadCount ? leadSum / leadCount : 0;

        const comprasOrdenadas = [...compras].sort((a, b) => {
            const da = a.data_solicitacao || a.data_emissao || '';
            const dbVal = b.data_solicitacao || b.data_emissao || '';
            return dbVal.localeCompare(da);
        });

        const stats = {
            totalCompras: compras.length,
            totalGasto,
            porStatus,
            gastosPorCategoria,
            gastosMensais,
            gastosDiarios,
            curvaS,
            comprasRecentes: comprasOrdenadas.slice(0, 10),
            comprasCalendar: comprasOrdenadas,
            atrasos,
            aguardandoEntrega,
            sla,
            lead,
            naturezaTotais,
            ccTotais,
        };

        // Incluir dados RDO se solicitado
        if (includeRDO) {
            try {
                const { RDOService } = await import('./rdo.service.js');

                if (obra?.numero_os) {
                    // Buscar RDOs dos últimos 30 dias
                    const endDate = new Date().toISOString().split('T')[0];
                    const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

                    const rdos = await RDOService.getByObra(obra.numero_os, startDate, endDate);

                    if (rdos && rdos.length > 0) {
                        stats.rdoData = RDOService.processRDOData(rdos);
                    }
                }
            } catch (error) {
                console.warn('Erro ao buscar dados RDO:', error);
            }
        }

        // Resumo financeiro completo (Sprint 1)
        const financialSummary = await ObrasService.calculateFinancialSummary(
            obraId,
            compras,
            stats.rdoData || null
        );
        if (financialSummary) {
            Object.assign(stats, {
                financialSummary,
                totalPlanned: financialSummary.totalPlanned,
                totalSpent: financialSummary.totalSpent,
                totalBalance: financialSummary.totalBalance,
                totalPercent: financialSummary.totalPercent,
                materialsPlanned: financialSummary.materialsPlanned,
                materialsSpent: financialSummary.materialsSpent,
                materialsBalance: financialSummary.materialsBalance,
                materialsPercent: financialSummary.materialsPercent,
                laborPlanned: financialSummary.laborPlanned,
                laborSpent: financialSummary.laborSpent,
                laborBalance: financialSummary.laborBalance,
                laborPercent: financialSummary.laborPercent,
                horasNormaisPrevistas: financialSummary.horasNormaisPrevistas,
                horasExtrasPrevistas: financialSummary.horasExtrasPrevistas,
                horasNormaisExecutadas: financialSummary.horasNormaisExecutadas,
                horasExtrasExecutadas: financialSummary.horasExtrasExecutadas,
                horasPrevistasEq: financialSummary.horasPrevistasEq,
                horasExecutadasEq: financialSummary.horasExecutadasEq,
                saldoHorasEq: financialSummary.saldoHorasEq,
                percentExtrasNormais: financialSummary.percentExtrasNormais,
                economia: financialSummary.totalBalance,
                curvaPercent: financialSummary.totalPercent
            });
        }

        // EVM inicial (pode ser refinado no controller com RDO atualizado)
        try {
            stats.evmData = EVMService.calculateEVM(obra, compras, stats.rdoData || null);
        } catch (err) {
            console.warn('Erro ao calcular EVM em getObraStats:', err);
        }

        return stats;
    },    calculateCurvaS: (totalPlanejado, gastosSemanais, { start, end } = {}) => {
        const planejado = [];
        const realizado = [];
        const labels = [];
        let acumRealizado = 0;

        const dayMs = 24 * 60 * 60 * 1000;
        const weekKeys = [];
        const startDate = start ? new Date(start) : null;
        const endDate = end ? new Date(end) : null;

        if (startDate && !Number.isNaN(startDate) && endDate && !Number.isNaN(endDate) && startDate <= endDate) {
            const cursor = new Date(startDate);
            cursor.setHours(12, 0, 0, 0);
            const day = cursor.getDay();
            const diffToMonday = (day === 0 ? -6 : 1 - day);
            cursor.setDate(cursor.getDate() + diffToMonday);
            while (cursor <= endDate) {
                const year = cursor.getFullYear();
                const oneJan = new Date(year, 0, 1);
                const numberOfDays = Math.floor((cursor - oneJan) / dayMs);
                const week = Math.ceil((numberOfDays + oneJan.getDay() + 1) / 7);
                weekKeys.push(`${year}-W${String(week).padStart(2, '0')}`);
                cursor.setDate(cursor.getDate() + 7);
            }
        } else {
            weekKeys.push(...Object.keys(gastosSemanais).sort());
        }

        const weeksCount = weekKeys.length || 1;
        weekKeys.forEach((wk, idx) => {
            const progress = (idx + 1) / weeksCount;
            const sCurve = 1 / (1 + Math.exp(-10 * (progress - 0.5)));
            planejado.push(totalPlanejado * sCurve);

            if (gastosSemanais[wk]) {
                acumRealizado += gastosSemanais[wk];
            }
            realizado.push(acumRealizado);
            labels.push(wk);
        });

        return { planejado, realizado, labels };
    },

    /**
     * Resumo financeiro (Sprint 1) combinando materiais e mão de obra.
     */
    calculateFinancialSummary: async (obraId, compras = [], rdoData = null, opts = {}) => {
        const obra = await ObrasService.getObraById(obraId);
        if (!obra) return null;

        const costHour = Number(opts.costHour || COST_PER_HOUR || 0);
        const costOver = Number(opts.costOvertime || COST_PER_OVERTIME_HOUR || costHour);
        const extraFactor = Number(opts.extraFactor || EXTRA_FACTOR || 1.5);

        // Materiais
        const materialsPlanned = Number(obra.valor_orcado) || 0;
        const materialsSpent = compras.reduce((sum, c) => sum + (Number(c.valor_total || c.valor_estimado || 0) || 0), 0);
        const materialsBalance = materialsPlanned - materialsSpent;
        const materialsPercent = materialsPlanned > 0 ? (materialsSpent / materialsPlanned) * 100 : 0;

        // Mão de obra planejada
        const horasNormaisPrev = Number(obra.horas_previstas) || 0;
        const horasExtrasPrev = Number(obra.horas_extras_previstas) || 0;
        // Horas extras já remuneradas com custo extra (105) – não multiplicar 2x
        const laborPlanned = (horasNormaisPrev * costHour) + (horasExtrasPrev * costOver);

        // Mão de obra executada (via RDO)
        let horasExtrasExec = 0;
        let horasNormaisExec = 0;
        if (rdoData) {
            const totalExtras = Number(rdoData.totalExtras) || 0;
            const totalHoras = Number(rdoData.totalHoras) || 0;
            horasExtrasExec = totalExtras;
            horasNormaisExec = Math.max(0, totalHoras - totalExtras);
        }
        // Custo de horas extras já embute 1.5x (costOver)
        const laborSpent = (horasNormaisExec * costHour) + (horasExtrasExec * costOver);
        const laborBalance = laborPlanned - laborSpent;
        const laborPercent = laborPlanned > 0 ? (laborSpent / laborPlanned) * 100 : 0;

        // Totais combinados
        const totalPlanned = materialsPlanned + laborPlanned;
        const totalSpent = materialsSpent + laborSpent;
        const totalBalance = totalPlanned - totalSpent;
        const totalPercent = totalPlanned > 0 ? (totalSpent / totalPlanned) * 100 : 0;

        // Horas equivalentes e indicadores adicionais
        const horasPrevistasEq = horasNormaisPrev + (horasExtrasPrev * extraFactor);
        const horasExecutadasEq = horasNormaisExec + (horasExtrasExec * extraFactor);
        const saldoHorasEq = horasPrevistasEq - horasExecutadasEq;
        const percentExtrasNormais = horasNormaisExec > 0 ? (horasExtrasExec / horasNormaisExec) * 100 : 0;

        return {
            // Flatten (para uso direto em views/kpis)
            materialsPlanned,
            materialsSpent,
            materialsBalance,
            materialsPercent,
            laborPlanned,
            laborSpent,
            laborBalance,
            laborPercent,
            horasNormaisPrevistas: horasNormaisPrev,
            horasExtrasPrevistas: horasExtrasPrev,
            horasNormaisExecutadas: horasNormaisExec,
            horasExtrasExecutadas: horasExtrasExec,
            totalPlanned,
            totalSpent,
            totalBalance,
            totalPercent,
            economia: totalBalance,
            horasPrevistasEq,
            horasExecutadasEq,
            saldoHorasEq,
            percentExtrasNormais,
            // Estrutura original para compatibilidade
            materials: { planned: materialsPlanned, spent: materialsSpent, balance: materialsBalance, percent: materialsPercent },
            labor: { planned: laborPlanned, spent: laborSpent, balance: laborBalance, percent: laborPercent, horasNormaisExec, horasExtrasExec },
            total: { planned: totalPlanned, spent: totalSpent, balance: totalBalance, percent: totalPercent }
        };
    }
};



