# Guia de Implementação - Sprint 5: Novos Indicadores Estratégicos

## 🎯 Objetivo
Adicionar métricas avançadas de qualidade e gestão estratégica.

---

## 📁 Arquivo 1: `site/src/modules/dashboard/quality.service.js` (NOVO)

Criar novo arquivo para métricas de qualidade:

```javascript
/**
 * Serviço de Métricas de Qualidade
 * Sprint 5 - Indicadores Estratégicos
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
     * Calcula Índice de Conformidade
     * % de compras com documentação completa
     */
    calculateComplianceIndex: (compras = []) => {
        const total = compras.length || 1;
        
        const compliant = compras.filter(c => {
            // Verificar se tem todos os PDFs necessários
            const hasNFe = c.pdf_nfe && c.pdf_nfe.length > 0;
            const hasCotacao = c.pdf_cotacao && c.pdf_cotacao.length > 0;
            
            // Compra está conforme se tem pelo menos NFe
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
     * Calcula Custo Médio por Compra
     */
    calculateAverageCost: (compras = []) => {
        if (compras.length === 0) return { average: 0, total: 0, count: 0 };

        const total = compras.reduce((sum, c) => sum + (Number(c.valor_total) || 0), 0);
        const average = total / compras.length;

        // Identificar outliers (> 2x média)
        const outliers = compras.filter(c => (Number(c.valor_total) || 0) > average * 2);

        return {
            average,
            total,
            count: compras.length,
            outliers: outliers.length,
            median: QualityService._calculateMedian(compras.map(c => Number(c.valor_total) || 0))
        };
    },

    /**
     * Calcula Diversificação de Fornecedores
     */
    calculateSupplierDiversity: (compras = []) => {
        const fornecedoresMap = new Map();
        
        compras.forEach(c => {
            const fornecedor = c.fornecedorId || 'Não informado';
            const valor = Number(c.valor_total) || 0;
            fornecedoresMap.set(fornecedor, (fornecedoresMap.get(fornecedor) || 0) + valor);
        });

        const totalFornecedores = fornecedoresMap.size;
        const totalValor = Array.from(fornecedoresMap.values()).reduce((sum, v) => sum + v, 0);

        // Calcular concentração (top fornecedor)
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
     * Análise de Pareto de Fornecedores
     * Identifica os 20% que representam 80% do valor
     */
    calculateParetoAnalysis: (compras = []) => {
        const fornecedoresMap = new Map();
        
        compras.forEach(c => {
            const fornecedor = c.fornecedorId || c.fornecedor || 'Não informado';
            const valor = Number(c.valor_total) || 0;
            fornecedoresMap.set(fornecedor, (fornecedoresMap.get(fornecedor) || 0) + valor);
        });

        // Ordenar por valor (maior para menor)
        const sorted = Array.from(fornecedoresMap.entries())
            .sort((a, b) => b[1] - a[1]);

        const totalValor = sorted.reduce((sum, [_, v]) => sum + v, 0);
        
        // Calcular acumulado
        let acumulado = 0;
        const paretoData = sorted.map(([fornecedor, valor]) => {
            acumulado += valor;
            const percentAcumulado = (acumulado / totalValor) * 100;
            const percentValor = (valor / totalValor) * 100;
            
            return {
                fornecedor,
                valor,
                percentValor,
                percentAcumulado,
                isTop20: percentAcumulado <= 80
            };
        });

        const top20Count = paretoData.filter(d => d.isTop20).length;
        const top20Percent = (top20Count / paretoData.length) * 100;

        return {
            paretoData,
            top20Count,
            top20Percent,
            totalFornecedores: paretoData.length,
            totalValor
        };
    },

    // Helper: Calcular mediana
    _calculateMedian: (values) => {
        if (values.length === 0) return 0;
        const sorted = values.slice().sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    }
};
```

---

## 📁 Arquivo 2: `site/src/modules/dashboard/dashboard.service.js`

### Adicionar ao service existente:

```javascript
import { QualityService } from './quality.service.js';

// Dentro da função que calcula stats do dashboard geral:
getGeneralStats: async () => {
    const compras = await getAllCompras(); // Função existente
    
    // Métricas de qualidade
    const reworkRate = QualityService.calculateReworkRate(compras);
    const complianceIndex = QualityService.calculateComplianceIndex(compras);
    const avgCost = QualityService.calculateAverageCost(compras);
    const supplierDiversity = QualityService.calculateSupplierDiversity(compras);

    return {
        // ... stats existentes
        reworkRate,
        complianceIndex,
        avgCost,
        supplierDiversity
    };
},
```

---

## 📁 Arquivo 3: `site/src/modules/dashboard/dashboard.view.js`

### Adicionar KPIs de Qualidade (Visão Diretor):

```javascript
// Após os KPIs existentes, adicionar seção de Qualidade:

// ===== SEÇÃO: INDICADORES DE QUALIDADE =====
<div class="space-y-2 mt-6">
    <h3 class="text-lg font-display text-text uppercase tracking-wide border-b border-border pb-2">
        ⭐ Indicadores de Qualidade
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        ${Components.createCard({
            title: 'Taxa de Retrabalho',
            content: `<p class="text-4xl font-display text-${stats.reworkRate?.status === 'good' ? 'primary' : 'alert'} uppercase">
                        ${(stats.reworkRate?.rate || 0).toFixed(1)}%
                     </p>
                     <p class="text-sm heading-muted mt-1">
                        ${stats.reworkRate?.canceladas || 0} canceladas/devolvidas
                     </p>
                     <p class="text-xs heading-muted mt-1">Meta: < 5%</p>`,
            className: 'accent-left'
        })}
        ${Components.createCard({
            title: 'Índice de Conformidade',
            content: `<p class="text-4xl font-display text-${stats.complianceIndex?.status === 'good' ? 'primary' : 'alert'} uppercase">
                        ${(stats.complianceIndex?.index || 0).toFixed(1)}%
                     </p>
                     <p class="text-sm heading-muted mt-1">
                        ${stats.complianceIndex?.compliant || 0} com docs completos
                     </p>
                     <p class="text-xs heading-muted mt-1">Meta: > 90%</p>`
        })}
        ${Components.createCard({
            title: 'Custo Médio por Compra',
            content: `<p class="text-3xl font-display text-text uppercase">
                        ${Utils.formatCurrency(stats.avgCost?.average || 0)}
                     </p>
                     <p class="text-sm heading-muted mt-1">
                        Mediana: ${Utils.formatCurrency(stats.avgCost?.median || 0)}
                     </p>
                     <p class="text-xs heading-muted mt-1">Outliers: ${stats.avgCost?.outliers || 0}</p>`
        })}
        ${Components.createCard({
            title: 'Fornecedores Ativos',
            content: `<p class="text-4xl font-display text-${stats.supplierDiversity?.status === 'good' ? 'primary' : 'alert'} uppercase">
                        ${stats.supplierDiversity?.totalFornecedores || 0}
                     </p>
                     <p class="text-sm heading-muted mt-1">
                        Concentração: ${(stats.supplierDiversity?.concentracao || 0).toFixed(1)}%
                     </p>
                     <p class="text-xs heading-muted mt-1">Top: ${stats.supplierDiversity?.topFornecedor || 'N/A'}</p>`
        })}
    </div>
</div>
```

---

## 📁 Arquivo 4: `site/src/modules/reports/pareto.charts.js` (NOVO)

Criar gráfico de Pareto:

```javascript
import Chart from 'chart.js/auto';

/**
 * Gráfico de Pareto de Fornecedores
 * Sprint 5 - Indicadores Estratégicos
 */
export const ParetoCharts = {
    renderParetoChart: (canvasId, paretoData) => {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return null;

        const ctx = canvas.getContext('2d');

        const labels = paretoData.paretoData.slice(0, 10).map(d => d.fornecedor);
        const valores = paretoData.paretoData.slice(0, 10).map(d => d.valor);
        const percentAcumulado = paretoData.paretoData.slice(0, 10).map(d => d.percentAcumulado);

        return new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Valor (R$)',
                        data: valores,
                        backgroundColor: '#3b82f6',
                        yAxisID: 'y',
                        order: 2
                    },
                    {
                        label: '% Acumulado',
                        data: percentAcumulado,
                        type: 'line',
                        borderColor: '#ef4444',
                        backgroundColor: 'transparent',
                        yAxisID: 'y1',
                        order: 1,
                        borderWidth: 2,
                        tension: 0.3
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    },
                    title: {
                        display: true,
                        text: 'Análise de Pareto - Top Fornecedores (20/80)'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                if (context.datasetIndex === 0) {
                                    return `Valor: ${new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(context.parsed.y)}`;
                                } else {
                                    return `Acumulado: ${context.parsed.y.toFixed(1)}%`;
                                }
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                    minimumFractionDigits: 0
                                }).format(value);
                            }
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        min: 0,
                        max: 100,
                        grid: {
                            drawOnChartArea: false
                        },
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }
};
```

---

## 📁 Arquivo 5: `site/src/modules/dashboard/dashboard.view.js`

### Adicionar gráfico de Pareto:

```javascript
// Após os gráficos existentes:

<div class="card h-96 mt-6">
    <h3 class="text-lg font-display text-text mb-4">Análise de Pareto - Fornecedores</h3>
    <div class="h-80 relative">
        <canvas id="chart-pareto"></canvas>
    </div>
    <p class="text-xs text-text-muted mt-2 text-center">
        ${stats.paretoAnalysis?.top20Count || 0} fornecedores (${(stats.paretoAnalysis?.top20Percent || 0).toFixed(1)}%) 
        representam 80% do valor total
    </p>
</div>
```

---

## 📁 Arquivo 6: `site/src/modules/dashboard/dashboard.controller.js`

### Integrar métricas de qualidade:

```javascript
import { QualityService } from './quality.service.js';
import { ParetoCharts } from '../reports/pareto.charts.js';

// Dentro de init() ou função equivalente:
const stats = await DashboardService.getGeneralStats();

// Calcular Pareto
const paretoAnalysis = QualityService.calculateParetoAnalysis(stats.compras || []);
stats.paretoAnalysis = paretoAnalysis;

// Renderizar gráfico
setTimeout(() => {
    ParetoCharts.renderParetoChart('chart-pareto', paretoAnalysis);
}, 250);
```

---

## 📁 OPCIONAL: Heatmap de Entregas

### Arquivo: `site/src/modules/obras/heatmap.view.js` (NOVO)

```javascript
/**
 * Heatmap de Entregas (Calendário Colorido)
 * Sprint 5 - Indicadores Estratégicos
 */
export const HeatmapView = {
    render: (compras = []) => {
        // Agrupar compras por data de previsão
        const dateMap = new Map();
        
        compras.forEach(c => {
            const prevDate = c.previsao_entrega;
            if (!prevDate) return;

            const dateKey = new Date(prevDate).toISOString().split('T')[0];
            if (!dateMap.has(dateKey)) {
                dateMap.set(dateKey, []);
            }
            dateMap.get(dateKey).push(c);
        });

        // Gerar calendário dos próximos 30 dias
        const today = new Date();
        const days = [];
        for (let i = 0; i < 30; i++) {
            const day = new Date(today);
            day.setDate(today.getDate() + i);
            days.push(day);
        }

        const calendarHTML = days.map(day => {
            const dateKey = day.toISOString().split('T')[0];
            const comprasNoDia = dateMap.get(dateKey) || [];
            
            // Determinar cor baseado em status
            let color = 'bg-gray-100'; // Sem entregas
            if (comprasNoDia.length > 0) {
                const atrasadas = comprasNoDia.filter(c => c.status_compra !== 'Recebido' && new Date(c.previsao_entrega) < today).length;
                const proximas = comprasNoDia.filter(c => c.status_compra !== 'Recebido').length;
                const recebidas = comprasNoDia.filter(c => c.status_compra === 'Recebido').length;

                if (atrasadas > 0) color = 'bg-red-500';
                else if (proximas > 0) color = 'bg-yellow-500';
                else if (recebidas > 0) color = 'bg-green-500';
            }

            return `
                <div class="flex flex-col items-center p-2 border border-border rounded hover:shadow-md transition-shadow cursor-pointer ${color}"
                     title="${comprasNoDia.length} entrega(s) em ${day.toLocaleDateString('pt-BR')}">
                    <span class="text-xs font-display text-text">${day.getDate()}</span>
                    <span class="text-xs text-text-muted">${day.toLocaleDateString('pt-BR', { weekday: 'short' })}</span>
                    ${comprasNoDia.length > 0 ? `<span class="text-xs font-bold mt-1">${comprasNoDia.length}</span>` : ''}
                </div>
            `;
        }).join('');

        return `
            <div class="card">
                <h3 class="text-lg font-display text-text mb-4">Heatmap de Entregas (Próximos 30 dias)</h3>
                <div class="grid grid-cols-7 gap-2">
                    ${calendarHTML}
                </div>
                <div class="flex items-center gap-4 mt-4 text-xs">
                    <div class="flex items-center gap-2">
                        <div class="w-4 h-4 bg-green-500 rounded"></div>
                        <span>Recebido</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="w-4 h-4 bg-yellow-500 rounded"></div>
                        <span>Próximo</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="w-4 h-4 bg-red-500 rounded"></div>
                        <span>Atrasado</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="w-4 h-4 bg-gray-100 border border-border rounded"></div>
                        <span>Sem entregas</span>
                    </div>
                </div>
            </div>
        `;
    }
};
```

---

## ✅ Checklist Sprint 5

- [ ] Criar `quality.service.js` com métricas de qualidade
- [ ] Implementar 4 KPIs de qualidade no dashboard geral
- [ ] Criar `pareto.charts.js` com gráfico de Pareto
- [ ] Integrar Pareto no dashboard
- [ ] (Opcional) Implementar Heatmap de entregas
- [ ] Testar cálculos de qualidade
- [ ] Validar análise de Pareto (20/80)

---

## 🧪 Como Testar

1. **Taxa de Retrabalho:**
   - Deve ser < 5% (bom)
   - Contar compras canceladas/devolvidas

2. **Índice de Conformidade:**
   - Deve ser > 90% (bom)
   - Verificar se compras têm PDFs

3. **Custo Médio:**
   - Comparar média vs mediana
   - Identificar outliers (> 2x média)

4. **Fornecedores:**
   - Concentração < 30% é bom (diversificado)
   - Pareto deve mostrar 20% que são 80% do valor

---

**Próximo:** Sprint 6 - Polimento e Validação
