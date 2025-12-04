# Guia de Implementação - Sprint 2: Mão de Obra Completa

## 🎯 Objetivo
Implementar controle total de horas RDO com cálculos corretos de equivalência e gráficos de análise temporal.

---

## 📁 Arquivo 1: `site/src/modules/obras/rdo.service.js`

### Adicionar função de cálculo de métricas RDO:

```javascript
/**
 * Calcula métricas completas de RDO
 * Sprint 2 - Mão de Obra Completa
 */
calculateLaborMetrics: (obra, rdoReports = []) => {
    const PADRAO_DIA = 9;
    const EXTRA_FACTOR = 1.5;

    // Horas previstas
    const horasNormaisPrevistas = Number(obra?.horas_previstas) || 0;
    const horasExtrasPrevistas = Number(obra?.horas_extras_previstas) || 0;
    const horasPrevistasEq = horasNormaisPrevistas + (horasExtrasPrevistas * EXTRA_FACTOR);

    // Processar relatórios RDO
    let horasNormaisExecutadas = 0;
    let horasExtrasExecutadas = 0;
    const dailyMap = new Map(); // Data -> {normal, extra, funcionarios}
    const techMap = new Map(); // Técnico -> horas
    const funcaoMap = new Map(); // Função -> horas

    rdoReports.forEach(rep => {
        let normalRep = 0;
        let extraRep = 0;
        let funcCount = 0;

        const dateStr = rep.data || rep.createdAt || rep.data_inicio;
        const dateKey = dateStr ? new Date(dateStr).toISOString().split('T')[0] : null;

        // Mão de obra padrão
        (rep?.maoDeObra?.padrao || []).forEach(p => {
            const horas = Number(p.quantidade) || 0;
            const extra = Math.max(0, horas - PADRAO_DIA);
            const normal = horas - extra;
            
            normalRep += normal;
            extraRep += extra;
            funcCount++;

            // Por técnico
            const nome = p.nome || p.funcionario || p.descricao || 'Técnico';
            techMap.set(nome, (techMap.get(nome) || 0) + horas);

            // Por função
            const funcao = p.funcao || p.cargo || 'Geral';
            funcaoMap.set(funcao, (funcaoMap.get(funcao) || 0) + horas);
        });

        // Mão de obra personalizada
        (rep?.maoDeObra?.personalizada || []).forEach(mo => {
            const horasStr = mo.horasTrabalhadas || '0';
            const horas = parseFloat(horasStr.toString().replace(',', '.')) || 0;
            const extra = Math.max(0, horas - PADRAO_DIA);
            const normal = horas - extra;
            
            normalRep += normal;
            extraRep += extra;
            funcCount++;

            const nome = mo.nome || mo.funcionario || mo.descricao || 'Técnico';
            techMap.set(nome, (techMap.get(nome) || 0) + horas);

            const funcao = mo.funcao || mo.cargo || 'Geral';
            funcaoMap.set(funcao, (funcaoMap.get(funcao) || 0) + horas);
        });

        horasNormaisExecutadas += normalRep;
        horasExtrasExecutadas += extraRep;

        // Armazenar por dia
        if (dateKey) {
            const existing = dailyMap.get(dateKey) || { normal: 0, extra: 0, funcionarios: 0 };
            existing.normal += normalRep;
            existing.extra += extraRep;
            existing.funcionarios += funcCount;
            dailyMap.set(dateKey, existing);
        }
    });

    // Horas equivalentes
    const horasExecutadasEq = horasNormaisExecutadas + (horasExtrasExecutadas * EXTRA_FACTOR);
    const saldoHorasEq = horasPrevistasEq - horasExecutadasEq;

    // Custos
    const custoEstimado = (horasNormaisExecutadas * COST_PER_HOUR) + (horasExtrasExecutadas * COST_PER_OVERTIME_HOUR);

    // Percentuais
    const percentExtrasNormais = horasNormaisExecutadas > 0 ? (horasExtrasExecutadas / horasNormaisExecutadas) * 100 : 0;

    // Médias
    const diasTrabalhados = dailyMap.size;
    const mediaHorasDia = diasTrabalhados > 0 ? horasExecutadasEq / diasTrabalhados : 0;
    const totalFuncionarios = techMap.size;
    const mediaFuncionariosDia = diasTrabalhados > 0 ? 
        Array.from(dailyMap.values()).reduce((sum, d) => sum + d.funcionarios, 0) / diasTrabalhados : 0;

    return {
        // Horas previstas
        horasNormaisPrevistas,
        horasExtrasPrevistas,
        horasPrevistasEq,

        // Horas executadas
        horasNormaisExecutadas,
        horasExtrasExecutadas,
        horasExecutadasEq,

        // Saldo
        saldoHorasEq,

        // Custos
        custoEstimado,

        // Percentuais
        percentExtrasNormais,
        percentExecutado: horasPrevistasEq > 0 ? (horasExecutadasEq / horasPrevistasEq) * 100 : 0,

        // Médias
        mediaHorasDia,
        totalFuncionarios,
        mediaFuncionariosDia,
        diasTrabalhados,

        // Mapas para gráficos
        dailyMap,
        techMap,
        funcaoMap
    };
},
```

---

## 📁 Arquivo 2: `site/src/modules/obras/rdo.charts.js`

### Adicionar gráfico de comparação de horas:

```javascript
/**
 * Gráfico: Horas Previstas vs Realizadas
 * Sprint 2 - Mão de Obra Completa
 */
renderHoursComparisonChart: (canvasId, metrics) => {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return null;

    const ctx = canvas.getContext('2d');

    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Previstas (Eq.)', 'Realizadas (Eq.)'],
            datasets: [{
                label: 'Horas Equivalentes',
                data: [
                    metrics.horasPrevistasEq || 0,
                    metrics.horasExecutadasEq || 0
                ],
                backgroundColor: ['#a5b4fc', '#34d399'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Horas Previstas vs Realizadas (Equivalentes)'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.parsed.y.toFixed(1)}h`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value.toFixed(0) + 'h';
                        }
                    }
                }
            }
        }
    });
},

/**
 * Gráfico: Curva S de Horas (PV x AV)
 * Sprint 2 - Mão de Obra Completa
 */
renderHoursCurveChart: (canvasId, obra, metrics) => {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return null;

    const startDate = obra?.data_prevista_inicio || obra?.data_inicio;
    const endDate = obra?.data_prevista_fim || obra?.data_fim;

    if (!startDate || !endDate) {
        canvas.parentElement.innerHTML = '<p class="text-center text-gray-500 py-8">Defina datas de início e fim da obra</p>';
        return null;
    }

    const ctx = canvas.getContext('2d');

    // Gerar dias do projeto
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = [];
    const currentDate = new Date(start);
    
    while (currentDate <= end) {
        days.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }

    // Dias úteis (segunda a sexta)
    const workdays = days.filter(d => {
        const day = d.getDay();
        return day !== 0 && day !== 6; // Não é domingo nem sábado
    });

    // PV (Planned Value) - Distribuição linear
    const horasPorDia = workdays.length > 0 ? metrics.horasPrevistasEq / workdays.length : 0;
    let plannedCum = 0;
    const plannedPoints = [];

    days.forEach(day => {
        const dateStr = day.toISOString().split('T')[0];
        const isWorkday = day.getDay() !== 0 && day.getDay() !== 6;
        
        if (isWorkday) {
            plannedCum += horasPorDia;
        }
        
        plannedPoints.push({
            x: dateStr,
            y: plannedCum
        });
    });

    // AV (Actual Value) - Horas reais acumuladas
    let actualCum = 0;
    const actualPoints = [];

    days.forEach(day => {
        const dateStr = day.toISOString().split('T')[0];
        const dailyData = metrics.dailyMap.get(dateStr);
        
        if (dailyData) {
            actualCum += dailyData.normal + (dailyData.extra * 1.5);
        }
        
        actualPoints.push({
            x: dateStr,
            y: actualCum
        });
    });

    return new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [
                {
                    label: 'Horas Planejadas (PV)',
                    data: plannedPoints,
                    borderColor: '#9ca3af',
                    backgroundColor: 'transparent',
                    tension: 0.3,
                    borderWidth: 2
                },
                {
                    label: 'Horas Reais (AV)',
                    data: actualPoints,
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16,185,129,0.1)',
                    tension: 0.3,
                    fill: true,
                    borderWidth: 2
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
                    text: 'Curva S de Horas (Planejado vs Real)'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.parsed.y.toFixed(1)}h`;
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
                            return value.toFixed(0) + 'h';
                        }
                    }
                }
            }
        }
    });
},
```

---

## 📁 Arquivo 3: `site/src/modules/obras/obras.controller.js`

### Modificar `initDashboard` para incluir métricas RDO:

```javascript
// Após carregar rdoData
if (rdoData && rdoData.reports) {
    const rdoMetrics = RDOService.calculateLaborMetrics(obra, rdoData.reports);
    
    // Renderizar gráficos RDO
    setTimeout(() => {
        RDOCharts.renderHoursComparisonChart('chart-hours-comparison', rdoMetrics);
        RDOCharts.renderHoursCurveChart('chart-hours-curve', obra, rdoMetrics);
    }, 150);
}
```

---

## 📁 Arquivo 4: `site/src/modules/obras/obras.view.js`

### Adicionar seção de gráficos RDO após os KPIs de MO:

```javascript
// ===== GRÁFICOS RDO =====
<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
    <div class="card h-80">
        <h3 class="text-lg font-display text-text mb-4">Horas Previstas vs Realizadas</h3>
        <div class="h-64 relative">
            <canvas id="chart-hours-comparison"></canvas>
        </div>
    </div>
    <div class="card h-80">
        <h3 class="text-lg font-display text-text mb-4">Curva S de Horas</h3>
        <div class="h-64 relative">
            <canvas id="chart-hours-curve"></canvas>
        </div>
    </div>
</div>
```

---

## 📁 Arquivo 5: Atualizar imports

Em `obras.controller.js`, adicionar:

```javascript
import { RDOService } from './rdo.service.js';
import { RDOCharts } from './rdo.charts.js';
```

---

## ✅ Checklist Sprint 2

- [ ] Adicionar `calculateLaborMetrics` em `rdo.service.js`
- [ ] Implementar `renderHoursComparisonChart` em `rdo.charts.js`
- [ ] Implementar `renderHoursCurveChart` em `rdo.charts.js`
- [ ] Atualizar controller para usar novas métricas
- [ ] Adicionar seção de gráficos RDO na view
- [ ] Testar cálculo de horas equivalentes (1.5x extras)
- [ ] Validar Curva S de horas com dados reais

---

## 🧪 Como Testar

1. Abrir dashboard de obra com dados RDO
2. Verificar KPIs de MO:
   - Horas Previstas (Eq.) = Normal + (Extras × 1.5)
   - Horas Executadas (Eq.) = Normal + (Extras × 1.5)
   - Saldo = Previstas - Executadas
3. Verificar gráfico de comparação (barras)
4. Verificar Curva S de horas (linhas PV e AV)

---

**Próximo:** Sprint 3 - EVM (Earned Value Management)
