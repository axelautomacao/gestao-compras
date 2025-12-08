import { db } from '../../config/firebase.js';
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { QualityService } from './quality.service.js';

const getResumoOrcamento = async (obraId) => {
    if (!obraId) return null;
    const obrasSnap = await getDocs(query(collection(db, 'obras'), where('__name__', '==', obraId)));
    if (obrasSnap.empty) return null;
    const obra = obrasSnap.docs[0].data();
    const orcado = Number(obra.orcamento || obra.valor_orcado || 0);
    const tolerancia = Number(obra.tolerancia_percentual || 0);
    const limite_real = orcado + (orcado * tolerancia);

    const comprasSnap = await getDocs(query(collection(db, 'compras'), where('obraId', '==', obraId)));
    const compras = comprasSnap.docs.map(d => d.data());
    let comprometido = 0;
    compras.forEach(c => {
        const status = (c.status_compra || '').toLowerCase();
        const aprovado = !c.estouro_orcamento || c.status_aprovacao === 'Aprovado';
        if ((status === 'comprado' || status === 'recebido' || status === 'entregue') && aprovado) {
            comprometido += Number(c.valor_total || c.valor_estimado || 0);
        }
    });

    return { limite_real, comprometido, orcado };
};

const fetchRdoData = async (obraId) => {
    try {
        const { ObrasService } = await import('../obras/obras.service.js');
        const obra = await ObrasService.getObraById?.(obraId);
        const osNumber = obra?.numero_os || obra?.numeroOS || obraId;
        if (!osNumber) return null;

        const { RDOService } = await import('../obras/rdo.service.js');
        const rdo = await RDOService.getIntegratedDataForObra(osNumber);
        if (rdo?.reports?.length) {
            const processed = RDOService.processRDOData(rdo.reports);
            return { ...processed, quantidadeRelatorios: rdo.quantidadeRelatorios || processed.reports?.length || 0 };
        }
        return rdo ? { quantidadeRelatorios: rdo.quantidadeRelatorios || 0, totalHoras: Number(rdo.totalHoras || 0) } : null;
    } catch (err) {
        console.warn('[Dashboard] RDO fetch fail', err?.message || err);
        return null;
    }
};

/**
 * Calcula atividade do comprador (última semana e mês)
 */
const calcularAtividade = (compras) => {
    const hoje = new Date();
    const umaSemanaAtras = new Date(hoje.getTime() - 7 * 24 * 60 * 60 * 1000);
    const inicioMes = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
    const duasSemanasAtras = new Date(hoje.getTime() - 14 * 24 * 60 * 60 * 1000);

    // Última semana
    const comprasSemana = compras.filter(c => {
        const data = new Date(c.data_emissao || c.data_solicitacao);
        return data >= umaSemanaAtras && data <= hoje;
    });

    // Este mês
    const comprasMes = compras.filter(c => {
        const data = new Date(c.data_emissao || c.data_solicitacao);
        return data >= inicioMes && data <= hoje;
    });

    // Semana anterior (para comparação)
    const comprasSemanaAnterior = compras.filter(c => {
        const data = new Date(c.data_emissao || c.data_solicitacao);
        return data >= duasSemanasAtras && data < umaSemanaAtras;
    });

    const valorSemana = comprasSemana.reduce((sum, c) => sum + Number(c.valor_total || c.valor_estimado || 0), 0);
    const valorMes = comprasMes.reduce((sum, c) => sum + Number(c.valor_total || c.valor_estimado || 0), 0);
    const valorSemanaAnterior = comprasSemanaAnterior.reduce((sum, c) => sum + Number(c.valor_total || c.valor_estimado || 0), 0);

    const variacaoSemanal = valorSemanaAnterior > 0
        ? ((valorSemana - valorSemanaAnterior) / valorSemanaAnterior) * 100
        : 0;

    const ticketMedio = comprasMes.length > 0 ? valorMes / comprasMes.length : 0;

    return {
        semana: {
            quantidade: comprasSemana.length,
            valor: valorSemana
        },
        mes: {
            quantidade: comprasMes.length,
            valor: valorMes
        },
        variacaoSemanal,
        ticketMedio
    };
};

/**
 * Calcula criticidade de uma compra
 */
const calcularCriticidade = (compra) => {
    const hoje = new Date();
    const previsao = compra.previsao_entrega ? new Date(compra.previsao_entrega) : null;
    const ultimaAtualizacao = compra.ultima_atualizacao ? new Date(compra.ultima_atualizacao) :
        compra.data_emissao ? new Date(compra.data_emissao) : null;

    let score = 0;
    let criticidade = 'baixa';
    let motivo = '';
    const status = (compra.status_compra || '').toLowerCase();

    // Ignorar entregues/recebidos/cancelados
    if (['entregue', 'recebido', 'cancelado'].includes(status)) {
        return { score: 0, criticidade: 'baixa', motivo: '' };
    }

    // Atrasado = CRÍTICO
    if (previsao && previsao < hoje) {
        const diasAtraso = Math.floor((hoje - previsao) / (1000 * 60 * 60 * 24));
        score = 100 + diasAtraso;
        criticidade = 'alta';
        motivo = `Atrasado há ${diasAtraso} dias`;
    }
    // Vence em 3 dias = URGENTE
    else if (previsao) {
        const diasParaVencer = Math.floor((previsao - hoje) / (1000 * 60 * 60 * 24));
        if (diasParaVencer <= 3 && diasParaVencer >= 0) {
            score = 80 + (3 - diasParaVencer) * 5;
            criticidade = 'media';
            motivo = `Vence em ${diasParaVencer} dias`;
        }
    }
    // Sem atualização há 5+ dias
    else if (ultimaAtualizacao && status === 'comprado') {
        const diasSemUpdate = Math.floor((hoje - ultimaAtualizacao) / (1000 * 60 * 60 * 24));
        if (diasSemUpdate >= 5) {
            score = 60 + diasSemUpdate;
            criticidade = 'media';
            motivo = `Sem atualização há ${diasSemUpdate} dias`;
        }
    }
    // Pendente há muito tempo (7+ dias)
    else if (status === 'pendente' && compra.data_solicitacao) {
        const diasPendente = Math.floor((hoje - new Date(compra.data_solicitacao)) / (1000 * 60 * 60 * 24));
        if (diasPendente >= 7) {
            score = 50 + diasPendente;
            criticidade = 'media';
            motivo = `Pendente há ${diasPendente} dias`;
        }
    }
    // Sem previsão de entrega
    else if (!previsao && status === 'comprado') {
        score = 40;
        criticidade = 'baixa';
        motivo = 'Sem previsão de entrega';
    }

    return { score, criticidade, motivo };
};

export const DashboardService = {
    getCompradorStats: async (filters = {}) => {
        const comprasRef = collection(db, 'compras');
        let q = query(comprasRef);

        // Se houver filtro de obra, aplica na query principal se possível, ou filtra depois
        if (filters.obraId) {
            q = query(comprasRef, where('obraId', '==', filters.obraId));
        }

        const snapAllCompras = await getDocs(q);
        let allCompras = snapAllCompras.docs.map(d => ({ id: d.id, ...d.data() }));

        // Filtro de Data (Período)
        if (filters.periodo) {
            const { start, end } = filters.periodo;
            const startDate = start ? new Date(start) : null;
            const endDate = end ? new Date(end) : null;

            if (startDate || endDate) {
                allCompras = allCompras.filter(c => {
                    const dataRef = c.data_emissao || c.data_solicitacao;
                    if (!dataRef) return false;
                    const d = new Date(dataRef);
                    if (startDate && d < startDate) return false;
                    if (endDate && d > endDate) return false;
                    return true;
                });
            }
        }

        // Recalcular stats com base nas compras filtradas
        const pendentes = allCompras.filter(c => c.status_compra === 'Pendente');
        const emCotacao = allCompras.filter(c => c.status_compra === 'Em Cotação');
        const recentes = allCompras.sort((a, b) => new Date(b.data_solicitacao || 0) - new Date(a.data_solicitacao || 0)).slice(0, 5);

        let atrasos = 0;
        let deliveries = 0;
        let onTime = 0;
        let leadSum = 0;
        let leadCount = 0;
        let totalValor = 0;
        const naturezaTotais = {};
        const ccTotais = {};
        const alerts = {
            atrasados: 0,
            sem_previsao: 0,
            pendente_aprovacao: 0,
            cotacao: 0
        };

        // Carregar centros de custo para mapear nomes
        const centrosSnap = await getDocs(collection(db, 'centrosCusto'));
        const ccMap = new Map(centrosSnap.docs.map(doc => [doc.id, doc.data().nome || doc.data().codigo || doc.id]));
        // Carregar obras para mapear nomes
        const obrasSnap = await getDocs(collection(db, 'obras'));
        const obraMap = new Map(obrasSnap.docs.map(doc => [doc.id, doc.data().nome_obra || doc.data().apelido_obra || doc.id]));

        // Processar compras para criticidade
        const comprasProcessadas = allCompras.map(data => {
            const { score, criticidade, motivo } = calcularCriticidade(data);
            return {
                ...data,
                obraNome: obraMap.get(data.obraId) || data.obra || data.obraId || 'N/D',
                score,
                criticidade,
                motivo
            };
        });

        // Filtrar e ordenar compras críticas
        const comprasCriticas = comprasProcessadas
            .filter(c => c.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 10);

        allCompras.forEach(c => {
            const valor = Number(c.valor_estimado || c.valor_total || 0);
            totalValor += valor;

            const prev = c.previsao_entrega ? new Date(c.previsao_entrega) : null;
            const recv = c.data_recebimento ? new Date(c.data_recebimento) : null;
            if (prev && c.status_compra !== 'Entregue' && c.status_compra !== 'Recebido' && prev < new Date()) atrasos++;
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
            const statusNorm = (c.status_compra || '').toLowerCase();
            if (statusNorm.includes('cot')) alerts.cotacao++;
            if (!prev && statusNorm !== 'recebido' && statusNorm !== 'entregue') alerts.sem_previsao++;
            const prevExpired = prev && prev < new Date() && statusNorm !== 'recebido' && statusNorm !== 'entregue';
            if (prevExpired) alerts.atrasados++;
            const apro = (c.status_aprovacao || '').toLowerCase();
            if (c.estouro_orcamento || apro === 'pendente') alerts.pendente_aprovacao++;

            const nat = (c.natureza_compra || 'Outros').trim();
            naturezaTotais[nat] = (naturezaTotais[nat] || 0) + valor;

            const ccNome = ccMap.get(c.centroCustoId) || c.centroCustoNome || c.centro_custo || c.centroCustoId || 'N/D';
            ccTotais[ccNome] = (ccTotais[ccNome] || 0) + valor;
        });

        const sla = deliveries ? (onTime / deliveries) * 100 : 0;
        const lead = leadCount ? leadSum / leadCount : 0;

        // Calcular atividade (última semana e mês)
        const atividade = calcularAtividade(allCompras);

        // Calcular urgentes (atrasos + vence em 3 dias)
        const hoje = new Date();
        const tresDias = new Date(hoje.getTime() + 3 * 24 * 60 * 60 * 1000);
        let urgentes = atrasos; // Já conta os atrasados

        allCompras.forEach(c => {
            const prev = c.previsao_entrega ? new Date(c.previsao_entrega) : null;
            const statusNorm = (c.status_compra || '').toLowerCase();

            // Adicionar compras que vencem em 3 dias (mas não estão atrasadas)
            if (prev && prev >= hoje && prev <= tresDias &&
                statusNorm !== 'recebido' && statusNorm !== 'entregue') {
                urgentes++;
            }
        });

        // Calcular aguardando ação (Pendente + Em Cotação)
        const aguardandoAcao = pendentes.length + emCotacao.length;

        // Calcular precisam atualização (Comprados sem update há 3+ dias)
        const DIAS_SEM_UPDATE = 3;
        let precisamAtualizacao = 0;

        allCompras.forEach(c => {
            const statusNorm = (c.status_compra || '').toLowerCase();

            if (statusNorm === 'comprado' || statusNorm === 'aprovado') {
                const dataRef = c.ultima_atualizacao || c.data_emissao || c.data_solicitacao;
                if (dataRef) {
                    const diasSemUpdate = Math.floor(
                        (hoje - new Date(dataRef)) / (1000 * 60 * 60 * 24)
                    );
                    if (diasSemUpdate >= DIAS_SEM_UPDATE) {
                        precisamAtualizacao++;
                    }
                }
            }
        });

        // Calcular sem previsão
        const semPrevisao = alerts.sem_previsao;

        return {
            pendentes: pendentes.length,
            emCotacao: emCotacao.length,
            recentes,
            atrasos,
            sla,
            lead,
            totalValor,
            naturezaTotais,
            ccTotais,
            alerts,
            // Novos KPIs
            atividade,
            urgentes,
            aguardandoAcao,
            precisamAtualizacao,
            semPrevisao,
            comprasCriticas // Adicionado
        };
    },

    getTimelineData: async (obraId = null) => {
        const comprasRef = collection(db, 'compras');
        let q = query(comprasRef);
        if (obraId) {
            q = query(comprasRef, where('obraId', '==', obraId));
        }
        const snap = await getDocs(q);

        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);
        const nextWeek = new Date(hoje);
        nextWeek.setDate(hoje.getDate() + 7);

        const timeline = [];

        snap.docs.forEach(d => {
            const c = d.data();
            if (!c.previsao_entrega) return;
            const prev = new Date(c.previsao_entrega);
            prev.setHours(0, 0, 0, 0);

            if (prev >= hoje && prev <= nextWeek) {
                timeline.push({
                    id: d.id,
                    ...c,
                    date: prev
                });
            }
        });

        return timeline.sort((a, b) => a.date - b.date);
    },

    getObraStats: async (obraId) => {
        if (!obraId) return { pendentes: 0, transito: 0, entregues: 0, recentes: [] };

        const comprasRef = collection(db, 'compras');

        const qPendentes = query(comprasRef, where('obraId', '==', obraId), where('status_compra', 'in', ['Pendente', 'Em Cotação', 'Aprovado']));
        const snapPendentes = await getDocs(qPendentes);

        const qTransito = query(comprasRef, where('obraId', '==', obraId), where('status_compra', '==', 'Comprado'));
        const snapTransito = await getDocs(qTransito);

        const qEntregues = query(comprasRef, where('obraId', '==', obraId), where('status_compra', 'in', ['Entregue', 'Recebido']));
        const snapEntregues = await getDocs(qEntregues);

        const qRecentes = query(comprasRef, where('obraId', '==', obraId), orderBy('data_solicitacao', 'desc'), limit(5));
        const snapRecentes = await getDocs(qRecentes);

        // Busca completa para alertas
        const snapAll = await getDocs(query(comprasRef, where('obraId', '==', obraId)));

        let atrasos = 0;
        let deliveries = 0;
        let onTime = 0;
        let leadSum = 0;
        let leadCount = 0;
        const resumo = await getResumoOrcamento(obraId);
        const comprometido = resumo?.comprometido || 0;
        const limiteReal = resumo?.limite_real || resumo?.orcado || 0;
        const curvaPercent = limiteReal > 0 ? (comprometido / limiteReal) * 100 : 0;
        const economia = Math.max(0, limiteReal - comprometido);
        const alerts = {
            atrasados: 0,
            sem_previsao: 0,
            pendente_aprovacao: 0,
            cotacao: 0
        };

        snapAll.docs.forEach(d => {
            const c = d.data();
            const prev = c.previsao_entrega ? new Date(c.previsao_entrega) : null;
            const recv = c.data_recebimento ? new Date(c.data_recebimento) : null;
            const statusNorm = (c.status_compra || '').toLowerCase();
            if (prev && statusNorm !== 'entregue' && statusNorm !== 'recebido' && prev < new Date()) {
                atrasos++;
                alerts.atrasados++;
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
            if (!prev && statusNorm !== 'recebido' && statusNorm !== 'entregue') alerts.sem_previsao++;
            const apro = (c.status_aprovacao || '').toLowerCase();
            if (c.estouro_orcamento || apro === 'pendente') alerts.pendente_aprovacao++;
            if (statusNorm.includes('cot')) alerts.cotacao++;
        });

        const rdoData = await fetchRdoData(obraId);

        return {
            pendentes: snapPendentes.size,
            transito: snapTransito.size,
            entregues: snapEntregues.size,
            recentes: snapRecentes.docs.map(d => ({ id: d.id, ...d.data() })),
            atrasos,
            sla: deliveries ? (onTime / deliveries) * 100 : 0,
            lead: leadCount ? leadSum / leadCount : 0,
            economia,
            curvaPercent,
            comprometido,
            limiteReal,
            rdoData,
            alerts
        };
    },

    getObras: async () => {
        const snap = await getDocs(collection(db, 'obras'));
        return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    },

    getDiretorStats: async () => {
        const comprasRef = collection(db, 'compras');
        const q = query(comprasRef, limit(500));
        const snap = await getDocs(q);

        // Mapas de nomes para centros de custo e fornecedores (evitar exibir IDs)
        const centrosSnap = await getDocs(collection(db, 'centrosCusto'));
        const ccMap = new Map(centrosSnap.docs.map(doc => [doc.id, doc.data().nome || doc.data().codigo || doc.id]));
        const fornecedoresSnap = await getDocs(collection(db, 'fornecedores'));
        const fornecedorMap = new Map(
            fornecedoresSnap.docs.map(doc => [
                doc.id,
                doc.data().nome_fantasia || doc.data().razao_social || doc.data().nome || doc.id
            ])
        );

        let totalGasto = 0;
        let porStatus = {};
        let gastosPorMes = {};
        let limiteReal = 0;
        let comprometido = 0;
        let atrasos = 0;
        let deliveries = 0;
        let onTime = 0;
        let leadSum = 0;
        let leadCount = 0;
        const naturezaTotais = {};
        const ccTotais = {};
        const alerts = {
            atrasados: 0,
            sem_previsao: 0,
            pendente_aprovacao: 0,
            cotacao: 0
        };

        const allCompras = [];

        snap.forEach(doc => {
            const data = doc.data();
            const valor = Number(data.valor_estimado || data.valor_total || 0);
            allCompras.push({ id: doc.id, ...data });
            totalGasto += valor;
            porStatus[data.status_compra] = (porStatus[data.status_compra] || 0) + 1;

            if (data.status_compra !== 'Entregue' && data.status_compra !== 'Recebido' && data.previsao_entrega) {
                const prev = new Date(data.previsao_entrega);
                if (prev < new Date()) {
                    atrasos++;
                    alerts.atrasados++;
                }
            }

            const prev = data.previsao_entrega ? new Date(data.previsao_entrega) : null;
            const recv = data.data_recebimento ? new Date(data.data_recebimento) : null;
            if (recv && prev) {
                deliveries++;
                if (recv <= prev) onTime++;
            }
            if (data.data_emissao && (recv || prev)) {
                const endDate = recv || prev;
                const diff = Math.max(0, (new Date(endDate) - new Date(data.data_emissao)) / (1000 * 60 * 60 * 24));
                leadSum += diff;
                leadCount++;
            }

            if (data.limite_real) limiteReal += Number(data.limite_real);
            if (data.comprometido) comprometido += Number(data.comprometido);

            if (data.data_solicitacao) {
                const date = new Date(data.data_solicitacao);
                const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
                gastosPorMes[key] = (gastosPorMes[key] || 0) + valor;
            }

            const nat = (data.natureza_compra || 'Outros').trim();
            naturezaTotais[nat] = (naturezaTotais[nat] || 0) + valor;
            const ccNome = ccMap.get(data.centroCustoId) || data.centroCustoNome || data.centro_custo || data.centroCustoId || 'N/D';
            const cc = ccNome;
            ccTotais[cc] = (ccTotais[cc] || 0) + valor;

            if (!data.previsao_entrega && data.status_compra !== 'Recebido' && data.status_compra !== 'Entregue') {
                alerts.sem_previsao++;
            }
            const statusAprov = (data.status_aprovacao || '').toLowerCase();
            if (statusAprov === 'pendente') alerts.pendente_aprovacao++;
            const statusNorm = (data.status_compra || '').toLowerCase();
            if (statusNorm.includes('cot')) alerts.cotacao++;
        });

        const curvaPercent = limiteReal > 0 ? (comprometido / limiteReal) * 100 : 0;
        const sla = deliveries ? (onTime / deliveries) * 100 : 0;
        const lead = leadCount ? leadSum / leadCount : 0;
        const economia = Math.max(0, limiteReal - comprometido);
        const reworkRate = QualityService.calculateReworkRate(allCompras);
        const complianceIndex = QualityService.calculateComplianceIndex(allCompras);
        const avgCost = QualityService.calculateAverageCost(allCompras);
        const supplierDiversity = QualityService.calculateSupplierDiversity(allCompras);
        const paretoAnalysis = QualityService.calculateParetoAnalysis(allCompras);

        // Normalizar nomes de fornecedores para análises de qualidade/Pareto
        const comprasComNomeFornecedor = allCompras.map(c => {
            const nome = fornecedorMap.get(c.fornecedorId) || c.fornecedorNome || c.fornecedor || c.fornecedorId || 'Não informado';
            return { ...c, fornecedor: nome, fornecedorNome: nome };
        });

        return {
            totalGasto,
            porStatus,
            totalPedidos: snap.size,
            gastosPorMes,
            limiteReal,
            comprometido,
            curvaPercent,
            atrasos,
            sla,
            lead,
            economia,
            naturezaTotais,
            ccTotais,
            alerts,
            reworkRate: QualityService.calculateReworkRate(comprasComNomeFornecedor),
            complianceIndex: QualityService.calculateComplianceIndex(comprasComNomeFornecedor),
            avgCost: QualityService.calculateAverageCost(comprasComNomeFornecedor),
            supplierDiversity: QualityService.calculateSupplierDiversity(comprasComNomeFornecedor),
            paretoAnalysis: QualityService.calculateParetoAnalysis(comprasComNomeFornecedor),
            _allCompras: comprasComNomeFornecedor
        };
    },

    markAsDelivered: async (compraId) => {
        const { doc, updateDoc } = await import('firebase/firestore');
        const ref = doc(db, 'compras', compraId);
        await updateDoc(ref, {
            status_compra: 'Entregue',
            data_recebimento: new Date().toISOString(),
            ultima_atualizacao: new Date().toISOString()
        });
    }
};
