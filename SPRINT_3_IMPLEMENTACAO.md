# Guia de Implementação - Sprint 3: EVM (Earned Value Management)

## 🎯 Objetivo
Implementar análise profissional de EVM (Earned Value Management) seguindo padrões PMI/PMBoK.

---

## 📚 Conceitos EVM

### Métricas Básicas:
- **BAC** (Budget at Completion): Orçamento total do projeto
- **PV** (Planned Value): Valor planejado até a data
- **EV** (Earned Value): Valor ganho (trabalho realizado)
- **AC** (Actual Cost): Custo real incorrido

### Índices de Performance:
- **CPI** (Cost Performance Index) = EV / AC
  - CPI > 1: Abaixo do orçamento (bom)
  - CPI < 1: Acima do orçamento (ruim)
  
- **SPI** (Schedule Performance Index) = EV / PV
  - SPI > 1: Adiantado (bom)
  - SPI < 1: Atrasado (ruim)

### Projeções:
- **EAC** (Estimate at Completion) = BAC / CPI
- **ETC** (Estimate to Complete) = EAC - AC
- **VAC** (Variance at Completion) = BAC - EAC

### Variações:
- **CV** (Cost Variance) = EV - AC
- **SV** (Schedule Variance) = EV - PV

---

## 📁 Arquivo 1: `site/src/modules/obras/evm.service.js` (NOVO)

Criar novo arquivo:

```javascript
import { COST_PER_HOUR, COST_PER_OVERTIME_HOUR } from '../../constants/costs.js';

/**
 * Serviço de Earned Value Management (EVM)
 * Implementa métricas profissionais de gestão de projetos (PMI/PMBoK)
 */
export const EVMService = {
    /**
     * Calcula todas as métricas EVM para uma obra
     * @param {Object} obra - Dados da obra
     * @param {Array} compras - Compras da obra
     * @param {Object} rdoData - Dados RDO (opcional)
     * @returns {Object} Métricas EVM completas
     */
    calculateEVM: (obra, compras = [], rdoData = null) => {
        // ===== BAC (Budget at Completion) =====
        const materialsBAC = Number(obra.valor_orcado) || 0;
        const horasNormais = Number(obra.horas_previstas) || 0;
        const horasExtras = Number(obra.horas_extras_previstas) || 0;
        const laborBAC = (horasNormais * COST_PER_HOUR) + (horasExtras * COST_PER_OVERTIME_HOUR);
        const BAC = materialsBAC + laborBAC;

        // ===== Datas do Projeto =====
        const startDate = new Date(obra.data_prevista_inicio || obra.data_inicio || Date.now());
        const endDate = new Date(obra.data_prevista_fim || obra.data_fim || Date.now());
        const today = new Date();
        
        const totalDuration = endDate - startDate;
        const elapsedDuration = today - startDate;
        const percentTimeElapsed = totalDuration > 0 ? Math.min(100, Math.max(0, (elapsedDuration / totalDuration) * 100)) : 0;

        // ===== PV (Planned Value) =====
        // Distribuição linear do BAC ao longo do tempo
        const PV = (BAC * percentTimeElapsed) / 100;

        // ===== AC (Actual Cost) =====
        // Custo real = Compras + Horas RDO
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
        }

        const AC = materialsAC + laborAC;

        // ===== EV (Earned Value) =====
        // Baseado no progresso físico (% de compras recebidas)
        const totalComprasPlanned = compras.length || 1; // Evitar divisão por zero
        const comprasRecebidas = compras.filter(c => c.status_compra === 'Recebido').length;
        const percentPhysicalProgress = (comprasRecebidas / totalComprasPlanned) * 100;
        const EV = (BAC * percentPhysicalProgress) / 100;

        // ===== Índices de Performance =====
        const CPI = AC > 0 ? EV / AC : 1;
        const SPI = PV > 0 ? EV / PV : 1;

        // ===== Projeções =====
        const EAC = CPI > 0 ? BAC / CPI : BAC;
        const ETC = EAC - AC;
        const VAC = BAC - EAC;

        // ===== Variações =====
        const CV = EV - AC; // Cost Variance
        const SV = EV - PV; // Schedule Variance

        // ===== Status Interpretado =====
        const costStatus = CPI >= 1 ? 'on-budget' : CPI >= 0.9 ? 'warning' : 'over-budget';
        const scheduleStatus = SPI >= 1 ? 'on-schedule' : SPI >= 0.9 ? 'warning' : 'delayed';

        // ===== Prazo Estimado de Conclusão =====
        const estimatedCompletionDate = SPI > 0 ? 
            new Date(startDate.getTime() + (totalDuration / SPI)) : 
            endDate;

        return {
            // Valores base
            BAC,
            PV,
            EV,
            AC,

            // Índices
            CPI,
            SPI,

            // Projeções
            EAC,
            ETC,
            VAC,

            // Variações
            CV,
            SV,

            // Progresso
            percentTimeElapsed,
            percentPhysicalProgress,

            // Status
            costStatus,
            scheduleStatus,

            // Datas
            estimatedCompletionDate,
            plannedCompletionDate: endDate,

            // Breakdown
            materialsBAC,
            laborBAC,
            materialsAC,
            laborAC
        };
    },

    /**
     * Gera dados para Curva S de EVM (PV, EV, AC ao longo do tempo)
     */
    generateEVMCurve: (obra, compras = [], rdoData = null) => {
        const startDate = new Date(obra.data_prevista_inicio || obra.data_inicio || Date.now());
        const endDate = new Date(obra.data_prevista_fim || obra.data_fim || Date.now());
        
        // Gerar array de dias
        const days = [];
        const currentDate = new Date(startDate);
        while (currentDate <= endDate) {
            days.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }

        const evm = EVMService.calculateEVM(obra, compras, rdoData);
        const totalDuration = endDate - startDate;

        // PV: Distribuição linear
        const pvPoints = days.map(day => {
            const elapsed = day - startDate;
            const percentElapsed = (elapsed / totalDuration) * 100;
            return {
                x: day.toISOString().split('T')[0],
                y: (evm.BAC * percentElapsed) / 100
            };
        });

        // AC: Acumulado de custos reais por data
        let acCumulative = 0;
        const acPoints = days.map(day => {
            const dateStr = day.toISOString().split('T')[0];
            
            // Compras até esta data
            compras.forEach(c => {
                const compraDate = c.data_recebimento || c.data_emissao;
                if (compraDate && new Date(compraDate) <= day) {
                    // Evitar contar duas vezes
                    const alreadyCounted = acPoints.some(p => 
                        new Date(p.x) < day && compras.some(c2 => c2.id === c.id)
                    );
                    if (!alreadyCounted) {
                        acCumulative += Number(c.valor_total) || 0;
                    }
                }
            });

            return {
                x: dateStr,
                y: acCumulative
            };
        });

        // EV: Baseado em progresso físico
        const evPoints = days.map(day => {
            const comprasAtéData = compras.filter(c => {
                const recDate = c.data_recebimento;
                return recDate && new Date(recDate) <= day;
            }).length;
            
            const totalCompras = compras.length || 1;
            const percentProgress = (comprasAtéData / totalCompras) * 100;
            
            return {
                x: day.toISOString().split('T')[0],
                y: (evm.BAC * percentProgress) / 100
            };
        });

        return {
            pvPoints,
            evPoints,
            acPoints,
            evm
        };
    }
};
```

---

## 📁 Arquivo 2: `site/src/modules/obras/evm.charts.js` (NOVO)

Criar novo arquivo:

```javascript
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';

/**
 * Gráficos de EVM (Earned Value Management)
 */
export const EVMCharts = {
    /**
     * Dashboard EVM Completo (PV, EV, AC)
     */
    renderEVMDashboard: (canvasId, curveData) => {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return null;

        const ctx = canvas.getContext('2d');
        const { pvPoints, evPoints, acPoints, evm } = curveData;

        return new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [
                    {
                        label: 'PV (Planned Value)',
                        data: pvPoints,
                        borderColor: '#9ca3af',
                        backgroundColor: 'transparent',
                        borderWidth: 2,
                        tension: 0.3,
                        pointRadius: 0
                    },
                    {
                        label: 'EV (Earned Value)',
                        data: evPoints,
                        borderColor: '#3b82f6',
                        backgroundColor: 'rgba(59,130,246,0.1)',
                        borderWidth: 2,
                        tension: 0.3,
                        fill: true,
                        pointRadius: 0
                    },
                    {
                        label: 'AC (Actual Cost)',
                        data: acPoints,
                        borderColor: '#ef4444',
                        backgroundColor: 'transparent',
                        borderWidth: 2,
                        tension: 0.3,
                        pointRadius: 0,
                        borderDash: [5, 5]
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
                        text: `EVM Dashboard | CPI: ${evm.CPI.toFixed(2)} | SPI: ${evm.SPI.toFixed(2)}`
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const value = new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(context.parsed.y);
                                return `${context.dataset.label}: ${value}`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'day',
                            displayFormats: {
                                day: 'dd/MM'
                            }
                        }
                    },
                    y: {
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
                    }
                }
            }
        });
    }
};
```

---

## 📁 Arquivo 3: `site/src/modules/obras/obras.view.js`

### Adicionar seção EVM após Status & Métricas:

```javascript
// ===== SEÇÃO 5: EVM (EARNED VALUE MANAGEMENT) =====
<div class="space-y-2 mt-6">
    <h3 class="text-lg font-display text-text uppercase tracking-wide border-b border-border pb-2">
        📈 Earned Value Management (EVM)
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        ${Components.createCard({
            title: 'CPI (Cost Performance Index)',
            content: `<p class="text-4xl font-display text-${(stats.evmData?.CPI || 0) >= 1 ? 'primary' : 'alert'} uppercase">
                        ${(stats.evmData?.CPI || 0).toFixed(2)}
                     </p>
                     <p class="text-sm heading-muted mt-1">
                        ${(stats.evmData?.CPI || 0) >= 1 ? '✓ Dentro do orçamento' : '⚠ Acima do orçamento'}
                     </p>
                     <p class="text-xs heading-muted mt-1">EV / AC</p>`,
            className: 'accent-left'
        })}
        ${Components.createCard({
            title: 'SPI (Schedule Performance Index)',
            content: `<p class="text-4xl font-display text-${(stats.evmData?.SPI || 0) >= 1 ? 'primary' : 'alert'} uppercase">
                        ${(stats.evmData?.SPI || 0).toFixed(2)}
                     </p>
                     <p class="text-sm heading-muted mt-1">
                        ${(stats.evmData?.SPI || 0) >= 1 ? '✓ No prazo' : '⚠ Atrasado'}
                     </p>
                     <p class="text-xs heading-muted mt-1">EV / PV</p>`
        })}
        ${Components.createCard({
            title: 'EAC (Estimate at Completion)',
            content: `<p class="text-3xl font-display text-text uppercase">${Utils.formatCurrency(stats.evmData?.EAC || 0)}</p>
                     <p class="text-sm heading-muted mt-1">Projeção de custo final</p>
                     <p class="text-xs heading-muted mt-1">BAC / CPI</p>`
        })}
        ${Components.createCard({
            title: '% Progresso Físico',
            content: `<p class="text-4xl font-display text-primary uppercase">
                        ${(stats.evmData?.percentPhysicalProgress || 0).toFixed(1)}%
                     </p>
                     <p class="text-sm heading-muted mt-1">Compras recebidas</p>
                     <p class="text-xs heading-muted mt-1">Tempo: ${(stats.evmData?.percentTimeElapsed || 0).toFixed(1)}%</p>`
        })}
    </div>
</div>

// ===== GRÁFICO EVM =====
<div class="card h-96 mt-6">
    <h3 class="text-lg font-display text-text mb-4">Dashboard EVM (Planned Value, Earned Value, Actual Cost)</h3>
    <div class="h-80 relative">
        <canvas id="chart-evm-dashboard"></canvas>
    </div>
</div>
```

---

## 📁 Arquivo 4: `site/src/modules/obras/obras.controller.js`

### Modificar `initDashboard`:

```javascript
import { EVMService } from './evm.service.js';
import { EVMCharts } from './evm.charts.js';

// Dentro de initDashboard, após carregar stats:
if (stats) {
    // Calcular EVM
    const evmData = EVMService.calculateEVM(obra, stats.comprasRecentes || [], stats.rdoData);
    stats.evmData = evmData;

    // Gerar curva EVM
    const evmCurve = EVMService.generateEVMCurve(obra, stats.comprasRecentes || [], stats.rdoData);

    // Renderizar gráfico
    setTimeout(() => {
        EVMCharts.renderEVMDashboard('chart-evm-dashboard', evmCurve);
    }, 200);
}
```

---

## 📁 Arquivo 5: `site/src/modules/obras/obras.service.js`

### Modificar `getObraStats` para incluir EVM:

```javascript
import { EVMService } from './evm.service.js';

// No return de getObraStats, adicionar:
return {
    ...financialSummary,
    totalGasto: financialSummary.materialsSpent,
    atrasos,
    aguardandoEntrega,
    sla,
    lead,
    curvaPercent: financialSummary.totalPercent,
    porStatus,
    gastosPorCategoria,
    gastosMensais,
    comprasRecentes: compras,
    rdoData,
    evmData: EVMService.calculateEVM(obra, compras, rdoData)  // NOVO
};
```

---

## ✅ Checklist Sprint 3

- [ ] Criar `evm.service.js` com cálculos EVM
- [ ] Criar `evm.charts.js` com dashboard EVM
- [ ] Adicionar seção EVM na view (4 KPIs)
- [ ] Integrar EVM no controller
- [ ] Adicionar gráfico temporal PV/EV/AC
- [ ] Validar fórmulas com PMBoK
- [ ] Testar com dados reais

---

## 🧪 Como Testar

1. Abrir dashboard de obra
2. Verificar seção EVM com 4 KPIs:
   - **CPI**: Deve ser > 1 se dentro do orçamento
   - **SPI**: Deve ser > 1 se no prazo
   - **EAC**: Projeção de custo final
   - **% Progresso**: Baseado em compras recebidas
3. Verificar gráfico com 3 linhas:
   - PV (cinza) - planejado
   - EV (azul) - ganho
   - AC (vermelho tracejado) - real
4. Validar interpretação:
   - Se EV > PV: Adiantado
   - Se EV < AC: Acima do orçamento

---

## 📚 Referências

- PMI - Project Management Institute
- PMBoK Guide (Project Management Body of Knowledge)
- Earned Value Management (EVM) Standard

---

**Próximo:** Sprint 4 - Otimizações de UX
