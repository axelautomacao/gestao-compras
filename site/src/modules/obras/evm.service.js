import { COST_PER_HOUR, COST_PER_OVERTIME_HOUR } from '../../constants/costs.js';

export const EVMService = {
    calculateEVM: (obra, compras = [], rdoData = null) => {
        const materialsBAC = Number(obra?.valor_orcado) || 0;
        const horasNormais = Number(obra?.horas_previstas) || 0;
        const horasExtras = Number(obra?.horas_extras_previstas) || 0;
        const laborBAC = (horasNormais * COST_PER_HOUR) + (horasExtras * COST_PER_OVERTIME_HOUR);
        const BAC = materialsBAC + laborBAC;

        const startDate = new Date(obra?.data_prevista_inicio || obra?.data_inicio || Date.now());
        const endDate = new Date(obra?.data_prevista_fim || obra?.data_fim || Date.now());
        const today = new Date();
        const totalDuration = endDate - startDate;
        const elapsedDuration = today - startDate;
        const percentTimeElapsed = totalDuration > 0 ? Math.min(100, Math.max(0, (elapsedDuration / totalDuration) * 100)) : 0;

        const PV = (BAC * percentTimeElapsed) / 100;

        const materialsAC = compras.reduce((sum, c) => sum + (Number(c.valor_total) || 0), 0);
        let laborAC = 0;
        if (rdoData && rdoData.reports) {
            const PADRAO_DIA = 9;
            let horasNormaisExec = 0;
            let horasExtrasExec = 0;
            rdoData.reports.forEach(rep => {
                (rep?.maoDeObra?.padrao || []).forEach(p => {
                    const horas = Number(p.quantidade) || 0;
                    const extra = Math.max(0, horas - PADRAO_DIA);
                    horasNormaisExec += (horas - extra);
                    horasExtrasExec += extra;
                });
                (rep?.maoDeObra?.personalizada || []).forEach(mo => {
                    const horasStr = mo.horasTrabalhadas || '0';
                    const horas = parseFloat(horasStr.toString().replace(',', '.')) || 0;
                    const extra = Math.max(0, horas - PADRAO_DIA);
                    horasNormaisExec += (horas - extra);
                    horasExtrasExec += extra;
                });
            });
            laborAC = (horasNormaisExec * COST_PER_HOUR) + (horasExtrasExec * COST_PER_OVERTIME_HOUR);
        } else if (rdoData) {
            const horasNormaisExec = Object.values(rdoData.horasNormaisPorDia || {}).reduce((a, b) => a + b, 0);
            const horasExtrasExec = Object.values(rdoData.horasExtrasPorDia || {}).reduce((a, b) => a + b, 0);
            laborAC = (horasNormaisExec * COST_PER_HOUR) + (horasExtrasExec * COST_PER_OVERTIME_HOUR);
        }
        const AC = materialsAC + laborAC;

        const totalComprasPlanned = compras.length || 1;
        const comprasRecebidas = compras.filter(c => c.status_compra === 'Recebido').length;
        const percentPhysicalProgress = (comprasRecebidas / totalComprasPlanned) * 100;
        const EV = (BAC * percentPhysicalProgress) / 100;

        const CPI = AC > 0 ? EV / AC : 1;
        const SPI = PV > 0 ? EV / PV : 1;

        const EAC = CPI > 0 ? BAC / CPI : BAC;
        const ETC = EAC - AC;
        const VAC = BAC - EAC;
        const CV = EV - AC;
        const SV = EV - PV;

        const costStatus = CPI >= 1 ? 'on-budget' : CPI >= 0.9 ? 'warning' : 'over-budget';
        const scheduleStatus = SPI >= 1 ? 'on-schedule' : SPI >= 0.9 ? 'warning' : 'delayed';

        const estimatedCompletionDate = SPI > 0
            ? new Date(startDate.getTime() + (totalDuration / SPI))
            : endDate;

        return {
            BAC, PV, EV, AC,
            CPI, SPI,
            EAC, ETC, VAC,
            CV, SV,
            percentTimeElapsed,
            percentPhysicalProgress,
            costStatus,
            scheduleStatus,
            estimatedCompletionDate,
            plannedCompletionDate: endDate,
            materialsBAC,
            laborBAC,
            materialsAC,
            laborAC
        };
    },

    generateEVMCurve: (obra, compras = [], rdoData = null) => {
        const startDate = new Date(obra?.data_prevista_inicio || obra?.data_inicio || Date.now());
        const endDate = new Date(obra?.data_prevista_fim || obra?.data_fim || Date.now());

        const days = [];
        const cur = new Date(startDate);
        while (cur <= endDate) {
            days.push(new Date(cur));
            cur.setDate(cur.getDate() + 1);
        }

        const evm = EVMService.calculateEVM(obra, compras, rdoData);
        const totalDuration = endDate - startDate;

        const pvPoints = days.map(day => {
            const elapsed = day - startDate;
            const percentElapsed = totalDuration > 0 ? (elapsed / totalDuration) * 100 : 0;
            return { x: day.toISOString().split('T')[0], y: (evm.BAC * percentElapsed) / 100 };
        });

        const acPoints = days.map(day => {
            const dateStr = day.toISOString().split('T')[0];
            const cumul = compras.reduce((sum, c) => {
                const compraDate = c.data_recebimento || c.data_emissao;
                return (compraDate && new Date(compraDate) <= day) ? sum + (Number(c.valor_total) || 0) : sum;
            }, 0);
            return { x: dateStr, y: cumul };
        });

        const evPoints = days.map(day => {
            const comprasAtData = compras.filter(c => {
                const recDate = c.data_recebimento;
                return recDate && new Date(recDate) <= day;
            }).length;
            const totalCompras = compras.length || 1;
            const percentProgress = (comprasAtData / totalCompras) * 100;
            return { x: day.toISOString().split('T')[0], y: (evm.BAC * percentProgress) / 100 };
        });

        return { pvPoints, evPoints, acPoints, evm };
    }
};
