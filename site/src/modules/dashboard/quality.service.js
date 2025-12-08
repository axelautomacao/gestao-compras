/**
 * ServiÃ§o de MÃ©tricas de Qualidade
 * Sprint 5 - Indicadores EstratÃ©gicos
 */
export const QualityService = {
    /**
     * Calcula Taxa de Retrabalho
     * % de compras canceladas ou devolvidas
     */
    calculateReworkRate: (compras = []) => {
        const total = compras.length || 1;
        const canceladas = compras.filter(c =>
            c.status_compra === 'Cancelado' ||
            c.status_compra === 'Devolvido'
        ).length;

        const rate = (canceladas / total) * 100;

        return {
            rate,
            canceladas,
            total,
            status: rate < 5 ? 'good' : rate < 10 ? 'warning' : 'bad'
        };
    },

    /**
     * Calcula Ãndice de Conformidade
     * % de compras com documentaÃ§Ã£o completa
     */
    calculateComplianceIndex: (compras = []) => {
        const total = compras.length || 1;

        const compliant = compras.filter(c => {
            const hasNFe = c.pdf_nfe && c.pdf_nfe.length > 0;
            return hasNFe;
        }).length;

        const index = (compliant / total) * 100;

        return {
            index,
            compliant,
            total,
            missing: total - compliant,
            status: index >= 90 ? 'good' : index >= 70 ? 'warning' : 'bad'
        };
    },

    /**
     * Calcula Custo MÃ©dio por Compra
     */
    calculateAverageCost: (compras = []) => {
        if (compras.length === 0) return { average: 0, total: 0, count: 0, outliers: 0, median: 0 };

        const total = compras.reduce((sum, c) => sum + (Number(c.valor_total || c.valor_estimado) || 0), 0);
        const average = total / compras.length;

        const values = compras.map(c => Number(c.valor_total || c.valor_estimado) || 0);
        const outliers = values.filter(v => v > average * 2);

        return {
            average,
            total,
            count: compras.length,
            outliers: outliers.length,
            median: QualityService._calculateMedian(values)
        };
    },

    /**
     * Calcula DiversificaÃ§Ã£o de Fornecedores
     */
    calculateSupplierDiversity: (compras = []) => {
        const fornecedoresMap = new Map();

        compras.forEach(c => {
            const fornecedor = c.fornecedorNome || c.fornecedor || c.fornecedorId || 'Não informado';
            const valor = Number(c.valor_total || c.valor_estimado) || 0;
            fornecedoresMap.set(fornecedor, (fornecedoresMap.get(fornecedor) || 0) + valor);
        });

        const totalFornecedores = fornecedoresMap.size;
        const totalValor = Array.from(fornecedoresMap.values()).reduce((sum, v) => sum + v, 0);

        const sorted = Array.from(fornecedoresMap.entries()).sort((a, b) => b[1] - a[1]);
        const topFornecedorValor = sorted[0]?.[1] || 0;
        const concentracao = totalValor > 0 ? (topFornecedorValor / totalValor) * 100 : 0;

        return {
            totalFornecedores,
            fornecedoresAtivos: totalFornecedores,
            concentracao,
            topFornecedor: sorted[0]?.[0] || 'N/A',
            topFornecedorValor,
            status: concentracao < 30 ? 'good' : concentracao < 50 ? 'warning' : 'bad'
        };
    },

    /**
     * AnÃ¡lise de Pareto de Fornecedores
     * Identifica os 20% que representam 80% do valor
     */
    calculateParetoAnalysis: (compras = []) => {
        const fornecedoresMap = new Map();

        compras.forEach(c => {
            const fornecedor = c.fornecedorNome || c.fornecedor || c.fornecedorId || 'Não informado';
            const valor = Number(c.valor_total || c.valor_estimado) || 0;
            fornecedoresMap.set(fornecedor, (fornecedoresMap.get(fornecedor) || 0) + valor);
        });

        const sorted = Array.from(fornecedoresMap.entries()).sort((a, b) => b[1] - a[1]);
        const totalValor = sorted.reduce((sum, [, v]) => sum + v, 0);

        let acumulado = 0;
        const paretoData = sorted.map(([fornecedor, valor]) => {
            acumulado += valor;
            const percentAcumulado = totalValor > 0 ? (acumulado / totalValor) * 100 : 0;
            const percentValor = totalValor > 0 ? (valor / totalValor) * 100 : 0;
            return {
                fornecedor,
                valor,
                percentValor,
                percentAcumulado,
                isTop20: percentAcumulado <= 80
            };
        });

        const top20Count = paretoData.filter(d => d.isTop20).length;
        const top20Percent = paretoData.length ? (top20Count / paretoData.length) * 100 : 0;

        return {
            paretoData,
            top20Count,
            top20Percent,
            totalFornecedores: paretoData.length,
            totalValor
        };
    },

    _calculateMedian: (values) => {
        if (!values.length) return 0;
        const sorted = values.slice().sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    }
};
