# Guia de Implementação - Sprint 1: Fundação Financeira

## ⚠️ IMPORTANTE: Problemas de Codificação Detectados

Os arquivos JavaScript no projeto estão com problemas de codificação UTF-8. Antes de implementar, execute:

```powershell
# Converter todos os arquivos JS para UTF-8
Get-ChildItem -Path ".\site\src" -Filter *.js -Recurse | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    [System.IO.File]::WriteAllText($_.FullName, $content, [System.Text.Encoding]::UTF8)
}
```

---

## 📁 Arquivo 1: `site/src/modules/obras/obras.service.js`

### Adicionar ao final do arquivo:

```javascript
/**
 * Calcula resumo financeiro completo da obra
 * Sprint 1 - Fundação Financeira
 */
calculateFinancialSummary: async (obraId, compras = [], rdoData = null) => {
    const obra = await ObrasService.getObraById(obraId);
    if (!obra) return null;

    // ===== MATERIAIS =====
    const materialsPlanned = Number(obra.valor_orcado) || 0;
    const materialsSpent = compras.reduce((sum, c) => sum + (Number(c.valor_total) || 0), 0);
    const materialsBalance = materialsPlanned - materialsSpent;
    const materialsPercent = materialsPlanned > 0 ? (materialsSpent / materialsPlanned) * 100 : 0;

    // ===== MÃO DE OBRA =====
    const horasNormaisPrevistas = Number(obra.horas_previstas) || 0;
    const horasExtrasPrevistas = Number(obra.horas_extras_previstas) || 0;
    const laborPlanned = (horasNormaisPrevistas * COST_PER_HOUR) + (horasExtrasPrevistas * COST_PER_OVERTIME_HOUR);

    let laborSpent = 0;
    let horasNormaisExecutadas = 0;
    let horasExtrasExecutadas = 0;

    if (rdoData && rdoData.reports) {
        const PADRAO_DIA = 9;
        rdoData.reports.forEach(rep => {
            let normalRep = 0;
            let extraRep = 0;

            // Mão de obra padrão
            (rep?.maoDeObra?.padrao || []).forEach(p => {
                const horas = Number(p.quantidade) || 0;
                const extra = Math.max(0, horas - PADRAO_DIA);
                normalRep += (horas - extra);
                extraRep += extra;
            });

            // Mão de obra personalizada
            (rep?.maoDeObra?.personalizada || []).forEach(mo => {
                const horasStr = mo.horasTrabalhadas || '0';
                const horas = parseFloat(horasStr.toString().replace(',', '.')) || 0;
                const extra = Math.max(0, horas - PADRAO_DIA);
                normalRep += (horas - extra);
                extraRep += extra;
            });

            horasNormaisExecutadas += normalRep;
            horasExtrasExecutadas += extraRep;
        });

        laborSpent = (horasNormaisExecutadas * COST_PER_HOUR) + (horasExtrasExecutadas * COST_PER_OVERTIME_HOUR);
    }

    const laborBalance = laborPlanned - laborSpent;
    const laborPercent = laborPlanned > 0 ? (laborSpent / laborPlanned) * 100 : 0;

    // ===== TOTAIS COMBINADOS =====
    const totalPlanned = materialsPlanned + laborPlanned;
    const totalSpent = materialsSpent + laborSpent;
    const totalBalance = totalPlanned - totalSpent;
    const totalPercent = totalPlanned > 0 ? (totalSpent / totalPlanned) * 100 : 0;

    // ===== HORAS EQUIVALENTES (1.5x para extras) =====
    const horasPrevistasEq = horasNormaisPrevistas + (horasExtrasPrevistas * 1.5);
    const horasExecutadasEq = horasNormaisExecutadas + (horasExtrasExecutadas * 1.5);
    const saldoHorasEq = horasPrevistasEq - horasExecutadasEq;
    const percentExtrasNormais = horasNormaisExecutadas > 0 ? (horasExtrasExecutadas / horasNormaisExecutadas) * 100 : 0;

    return {
        // Materiais
        materialsPlanned,
        materialsSpent,
        materialsBalance,
        materialsPercent,

        // Mão de Obra
        laborPlanned,
        laborSpent,
        laborBalance,
        laborPercent,
        horasNormaisPrevistas,
        horasExtrasPrevistas,
        horasNormaisExecutadas,
        horasExtrasExecutadas,

        // Totais
        totalPlanned,
        totalSpent,
        totalBalance,
        totalPercent,
        economia: totalBalance,

        // Horas Equivalentes
        horasPrevistasEq,
        horasExecutadasEq,
        saldoHorasEq,
        percentExtrasNormais
    };
},
```

### Modificar função `getObraStats`:

Adicionar no início da função:

```javascript
// Calcular resumo financeiro completo
const financialSummary = await ObrasService.calculateFinancialSummary(obraId, compras, rdoData);
```

E no return, adicionar:

```javascript
return {
    ...financialSummary,  // Spread do resumo financeiro
    totalGasto: financialSummary.materialsSpent,
    atrasos,
    aguardandoEntrega,  // NOVO KPI
    sla,
    lead,
    curvaPercent: financialSummary.totalPercent,
    porStatus,
    gastosPorCategoria,
    gastosMensais,
    comprasRecentes: compras.slice(0, 10),
    rdoData
};
```

---

## 📁 Arquivo 2: `site/src/modules/obras/obras.view.js`

### Modificar função `renderDashboard`:

Substituir a seção de KPIs por:

```javascript
// ===== SEÇÃO 1: RESUMO FINANCEIRO =====
<div class="space-y-2">
    <h3 class="text-lg font-display text-text uppercase tracking-wide border-b border-border pb-2">
        💰 Resumo Financeiro
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        ${Components.createCard({
            title: 'Total Orçado (Mat + MO)',
            content: `<p class="text-4xl font-display text-primary uppercase">${Utils.formatCurrency(stats.totalPlanned || 0)}</p>
                     <p class="text-sm heading-muted mt-1">Budget completo</p>`
        })}
        ${Components.createCard({
            title: 'Total Executado (Mat + MO)',
            content: `<p class="text-4xl font-display text-text uppercase">${Utils.formatCurrency(stats.totalSpent || 0)}</p>
                     <p class="text-sm heading-muted mt-1">Gasto até agora</p>`
        })}
        ${Components.createCard({
            title: 'Diferença (Saldo)',
            content: `<p class="text-4xl font-display text-${(stats.totalBalance || 0) < 0 ? 'alert' : 'primary'} uppercase">
                        ${Utils.formatCurrency(stats.totalBalance || 0)}
                     </p>
                     <p class="text-sm heading-muted mt-1">Disponível</p>`
        })}
        ${Components.createCard({
            title: '% Gasto Total',
            content: `<p class="text-4xl font-display text-${(stats.totalPercent || 0) > 100 ? 'alert' : 'text'} uppercase">
                        ${(stats.totalPercent || 0).toFixed(1)}%
                     </p>
                     <p class="text-sm heading-muted mt-1">Burn rate</p>`
        })}
    </div>
</div>

// ===== SEÇÃO 2: ANÁLISE DE MATERIAIS =====
<div class="space-y-2 mt-6">
    <h3 class="text-lg font-display text-text uppercase tracking-wide border-b border-border pb-2">
        📦 Análise de Materiais
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        ${Components.createCard({
            title: 'Orçamento Materiais',
            content: `<p class="text-4xl font-display text-primary uppercase">${Utils.formatCurrency(stats.materialsPlanned || 0)}</p>
                     <p class="text-sm heading-muted mt-1">Budget de capex</p>`,
            className: 'accent-left'
        })}
        ${Components.createCard({
            title: 'Gasto Materiais',
            content: `<p class="text-4xl font-display text-text uppercase">${Utils.formatCurrency(stats.materialsSpent || 0)}</p>
                     <p class="text-sm heading-muted mt-1">Compras realizadas</p>`
        })}
        ${Components.createCard({
            title: 'Balanço Materiais',
            content: `<p class="text-4xl font-display text-${(stats.materialsBalance || 0) < 0 ? 'alert' : 'primary'} uppercase">
                        ${Utils.formatCurrency(stats.materialsBalance || 0)}
                     </p>
                     <p class="text-sm heading-muted mt-1">Saldo disponível</p>`
        })}
        ${Components.createCard({
            title: '% Gasto Materiais',
            content: `<p class="text-4xl font-display text-${(stats.materialsPercent || 0) > 100 ? 'alert' : 'text'} uppercase">
                        ${(stats.materialsPercent || 0).toFixed(1)}%
                     </p>
                     <p class="text-sm heading-muted mt-1">Consumo do budget</p>`
        })}
    </div>
</div>

// ===== SEÇÃO 3: MÃO DE OBRA (RDO) =====
<div class="space-y-2 mt-6">
    <h3 class="text-lg font-display text-text uppercase tracking-wide border-b border-border pb-2">
        👷 Análise de Mão de Obra (RDO)
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-6">
        ${Components.createCard({
            title: 'Horas Previstas (Eq.)',
            content: `<p class="text-3xl font-display text-primary uppercase">${(stats.horasPrevistasEq || 0).toFixed(1)}h</p>
                     <p class="text-xs heading-muted mt-1">Normal: ${stats.horasNormaisPrevistas || 0}h | Extras: ${stats.horasExtrasPrevistas || 0}h</p>`,
            className: 'accent-left'
        })}
        ${Components.createCard({
            title: 'Horas Executadas (Eq.)',
            content: `<p class="text-3xl font-display text-text uppercase">${(stats.horasExecutadasEq || 0).toFixed(1)}h</p>
                     <p class="text-xs heading-muted mt-1">Normal: ${(stats.horasNormaisExecutadas || 0).toFixed(1)}h | Extras: ${(stats.horasExtrasExecutadas || 0).toFixed(1)}h</p>`
        })}
        ${Components.createCard({
            title: 'Saldo de Horas',
            content: `<p class="text-3xl font-display text-${(stats.saldoHorasEq || 0) < 0 ? 'alert' : 'primary'} uppercase">
                        ${(stats.saldoHorasEq || 0).toFixed(1)}h
                     </p>
                     <p class="text-xs heading-muted mt-1">Restante</p>`
        })}
        ${Components.createCard({
            title: 'Custo Estimado MO',
            content: `<p class="text-3xl font-display text-text uppercase">${Utils.formatCurrency(stats.laborSpent || 0)}</p>
                     <p class="text-xs heading-muted mt-1">Horas × R$/h</p>`
        })}
        ${Components.createCard({
            title: 'Horas Extras Total',
            content: `<p class="text-3xl font-display text-alert uppercase">${(stats.horasExtrasExecutadas || 0).toFixed(1)}h</p>
                     <p class="text-xs heading-muted mt-1">Acima do padrão</p>`
        })}
        ${Components.createCard({
            title: '% Extras / Normais',
            content: `<p class="text-3xl font-display text-${(stats.percentExtrasNormais || 0) > 20 ? 'alert' : 'text'} uppercase">
                        ${(stats.percentExtrasNormais || 0).toFixed(1)}%
                     </p>
                     <p class="text-xs heading-muted mt-1">Índice de extras</p>`
        })}
    </div>
</div>

// ===== SEÇÃO 4: STATUS & MÉTRICAS =====
<div class="space-y-2 mt-6">
    <h3 class="text-lg font-display text-text uppercase tracking-wide border-b border-border pb-2">
        📊 Status & Métricas Operacionais
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
        ${Components.createCard({
            title: 'Aguardando Entrega',
            content: `<p class="text-4xl font-display text-primary uppercase">${stats.aguardandoEntrega || 0}</p>
                     <p class="text-sm heading-muted mt-1">Pedidos em trânsito</p>`,
            className: 'accent-left'
        })}
        ${Components.createCard({
            title: 'Pedidos em Atraso',
            content: `<p class="text-4xl font-display text-alert uppercase">${stats.atrasos || 0}</p>
                     <p class="text-sm heading-muted mt-1">Previsão vencida</p>`
        })}
        ${Components.createCard({
            title: 'SLA Entregas',
            content: `<p class="text-4xl font-display text-${(stats.sla || 0) < 80 ? 'alert' : 'primary'} uppercase">
                        ${(stats.sla || 0).toFixed(1)}%
                     </p>
                     <p class="text-sm heading-muted mt-1">Entregues no prazo</p>`
        })}
        ${Components.createCard({
            title: 'Lead Médio',
            content: `<p class="text-4xl font-display text-text uppercase">${(stats.lead || 0).toFixed(1)}d</p>
                     <p class="text-sm heading-muted mt-1">Emissão → Entrega</p>`
        })}
        ${Components.createCard({
            title: 'Economia Gerada',
            content: `<p class="text-4xl font-display text-${(stats.economia || 0) < 0 ? 'alert' : 'primary'} uppercase">
                        ${Utils.formatCurrency(stats.economia || 0)}
                     </p>
                     <p class="text-sm heading-muted mt-1">% Curva: ${(stats.curvaPercent || 0).toFixed(1)}%</p>`
        })}
    </div>
</div>
```

---

## 📁 Arquivo 3: `site/src/modules/obras/obras.charts.js`

### Adicionar nova função para gráfico comparativo:

```javascript
/**
 * Gráfico: Comparação Orçado vs Executado (Materiais + Mão de Obra)
 * Sprint 1 - Fundação Financeira
 */
renderComparisonChart: (canvasId, stats) => {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return null;

    const ctx = canvas.getContext('2d');

    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Planejado', 'Executado'],
            datasets: [
                {
                    label: 'Materiais',
                    data: [stats.materialsPlanned || 0, stats.materialsSpent || 0],
                    backgroundColor: '#60a5fa',
                    stack: 'Stack 0'
                },
                {
                    label: 'Mão de Obra',
                    data: [stats.laborPlanned || 0, stats.laborSpent || 0],
                    backgroundColor: '#34d399',
                    stack: 'Stack 0'
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
                    text: 'Orçado vs Executado (Materiais + Mão de Obra)'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(context.parsed.y);
                            return label;
                        }
                    }
                }
            },
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    stacked: true,
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
},
```

---

## 📁 Arquivo 4: `site/src/modules/obras/obras.controller.js`

### Modificar função `initDashboard`:

Adicionar após carregar os stats:

```javascript
// Renderizar gráfico de comparação
if (stats) {
    // Aguardar DOM estar pronto
    setTimeout(() => {
        ObrasCharts.renderComparisonChart('chart-comparison', stats);
    }, 100);
}
```

---

## 📁 Arquivo 5: Adicionar ao HTML do dashboard

No `obras.view.js`, adicionar após a seção de KPIs:

```javascript
// ===== GRÁFICO: COMPARAÇÃO ORÇADO VS EXECUTADO =====
<div class="card h-96 mt-6">
    <h3 class="text-lg font-display text-text mb-4">Comparação: Orçado vs Executado</h3>
    <div class="h-80 relative">
        <canvas id="chart-comparison"></canvas>
    </div>
</div>
```

---

## ✅ Checklist Sprint 1

- [ ] Converter arquivos para UTF-8
- [ ] Adicionar `calculateFinancialSummary` em `obras.service.js`
- [ ] Modificar `getObraStats` para usar novo cálculo
- [ ] Atualizar `obras.view.js` com 4 seções de KPIs
- [ ] Adicionar `renderComparisonChart` em `obras.charts.js`
- [ ] Integrar gráfico no controller
- [ ] Testar com dados reais
- [ ] Validar cálculos

---

## 🧪 Como Testar

1. Abrir dashboard de uma obra
2. Verificar se todos os 18 KPIs aparecem
3. Conferir se valores batem:
   - Total Orçado = Orçamento Materiais + (Horas Previstas × Custo/h)
   - Total Executado = Gasto Materiais + (Horas Executadas × Custo/h)
   - Diferença = Total Orçado - Total Executado
4. Verificar gráfico de barras empilhadas

---

**Próximo:** Sprint 2 - Mão de Obra Completa
