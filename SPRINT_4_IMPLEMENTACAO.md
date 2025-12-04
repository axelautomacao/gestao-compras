# Guia de Implementação - Sprint 4: Otimizações de UX

## 🎯 Objetivo
Melhorar visualizações, eliminar redundâncias e implementar funil de compras.

---

## 🗑️ PARTE 1: Remover Componentes de Baixo Valor

### Dashboard Geral - Remover KPIs:

Em `site/src/modules/dashboard/dashboard.view.js`:

**REMOVER:**
1. KPI "Obras Ativas" (métrica descritiva)
2. KPI "Total de Pedidos" (métrica descritiva)

### Dashboard por Obra - Remover:

Em `site/src/modules/obras/obras.view.js`:

**REMOVER:**
- KPI "Média Func./Dia" (redundante)

### Gráficos a Remover:

**NÃO IMPLEMENTAR:**
- "Funcionários por Dia" (baixo valor)
- "Distribuição Horas (Donut)" (redundante com KPIs)

---

## 🔄 PARTE 2: Otimizar Gráficos Existentes

### 2.1 Trocar Pizza por Barras Horizontais

#### Arquivo: `site/src/modules/obras/obras.charts.js`

**Modificar função de gráfico de Natureza:**

```javascript
/**
 * Gráfico: Gastos por Natureza (Barras Horizontais)
 * Otimizado em Sprint 4
 */
renderNaturezaChart: (canvasId, gastosPorCategoria) => {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return null;

    const ctx = canvas.getContext('2d');

    // Ordenar por valor (maior para menor)
    const sorted = Object.entries(gastosPorCategoria)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8); // Top 8

    const labels = sorted.map(([nat, _]) => nat);
    const values = sorted.map(([_, val]) => val);

    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Valor Gasto',
                data: values,
                backgroundColor: [
                    '#3b82f6', '#10b981', '#f59e0b', '#ef4444',
                    '#6366f1', '#8b5cf6', '#ec4899', '#14b8a6'
                ],
                borderWidth: 0
            }]
        },
        options: {
            indexAxis: 'y', // HORIZONTAL
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Top Naturezas de Compra'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(context.parsed.x);
                        }
                    }
                }
            },
            scales: {
                x: {
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

### 2.2 Implementar Funil de Compras

#### Arquivo: `site/src/modules/reports/reports.charts.js` (ou criar novo)

```javascript
/**
 * Gráfico: Funil de Compras (Horizontal)
 * Sprint 4 - Otimizações UX
 */
renderFunnelChart: (canvasId, porStatus) => {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return null;

    const ctx = canvas.getContext('2d');

    // Definir ordem do funil
    const funnelStages = [
        { key: 'Solicitado', label: 'Solicitado', color: '#9ca3af' },
        { key: 'Em Cotação', label: 'Em Cotação', color: '#60a5fa' },
        { key: 'Aprovado', label: 'Aprovado', color: '#34d399' },
        { key: 'Comprado', label: 'Comprado', color: '#fbbf24' },
        { key: 'Recebido', label: 'Recebido', color: '#10b981' }
    ];

    const data = funnelStages.map(stage => porStatus[stage.key] || 0);
    const labels = funnelStages.map(stage => stage.label);
    const colors = funnelStages.map(stage => stage.color);

    // Calcular % de conversão
    const total = data[0] || 1; // Evitar divisão por zero
    const percentages = data.map(val => ((val / total) * 100).toFixed(1));

    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels.map((label, i) => `${label} (${percentages[i]}%)`),
            datasets: [{
                label: 'Quantidade',
                data: data,
                backgroundColor: colors,
                borderWidth: 0
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Funil de Compras (Pipeline)'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.parsed.x;
                            const percent = percentages[context.dataIndex];
                            return `${value} compras (${percent}% do total)`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
},
```

---

## 📁 PARTE 3: Implementar KPI "Aguardando Entrega"

### Arquivo: `site/src/modules/obras/obras.service.js`

Já implementado no Sprint 1! Apenas garantir que está no return:

```javascript
return {
    // ... outros campos
    aguardandoEntrega,  // Já calculado no loop de compras
    // ...
};
```

### Arquivo: `site/src/modules/obras/obras.view.js`

Já implementado no Sprint 1! Card já existe na seção "Status & Métricas".

---

## 📁 PARTE 4: Atualizar Views para Usar Novos Gráficos

### Dashboard por Obra - Substituir gráfico de natureza:

Em `site/src/modules/obras/obras.view.js`, localizar o card com gráfico de natureza e garantir que usa:

```javascript
<div class="card h-80">
    <h3 class="text-lg font-display text-text mb-4">Top Naturezas</h3>
    <div class="h-64 relative">
        <canvas id="chart-natureza"></canvas>
    </div>
</div>
```

E no controller, chamar:

```javascript
ObrasCharts.renderNaturezaChart('chart-natureza', stats.gastosPorCategoria);
```

### Dashboard Geral - Adicionar Funil:

Em `site/src/modules/dashboard/dashboard.view.js` (visão Diretor), adicionar:

```javascript
<div class="card h-80">
    <h3 class="text-lg font-display text-text mb-4">Pipeline de Compras</h3>
    <div class="h-64 relative">
        <canvas id="chart-funnel"></canvas>
    </div>
</div>
```

E no controller:

```javascript
import { ReportsCharts } from '../reports/reports.charts.js';

// Renderizar funil
ReportsCharts.renderFunnelChart('chart-funnel', stats.porStatus);
```

---

## 🎨 PARTE 5: Melhorias de UI/UX

### 5.1 Adicionar Tooltips Informativos

Em todos os KPIs, adicionar atributo `title` com explicação:

```javascript
${Components.createCard({
    title: 'CPI (Cost Performance Index)',
    content: `...`,
    className: 'accent-left',
    tooltip: 'CPI > 1: Abaixo do orçamento (bom) | CPI < 1: Acima do orçamento (ruim)'
})}
```

### 5.2 Cores Consistentes

Definir paleta de cores padrão em `site/src/style.css`:

```css
:root {
    /* Status Colors */
    --color-success: #10b981;
    --color-warning: #f59e0b;
    --color-danger: #ef4444;
    --color-info: #3b82f6;
    --color-neutral: #6b7280;

    /* Chart Colors */
    --chart-primary: #3b82f6;
    --chart-secondary: #10b981;
    --chart-tertiary: #f59e0b;
    --chart-quaternary: #ef4444;
    --chart-quinary: #6366f1;
}
```

### 5.3 Loading States

Adicionar em `site/src/ui/components.js`:

```javascript
/**
 * Componente: Loading Spinner
 */
createLoadingSpinner: (message = 'Carregando...') => {
    return `
        <div class="flex flex-col items-center justify-center py-12">
            <div class="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p class="mt-4 text-sm text-text-muted">${message}</p>
        </div>
    `;
},

/**
 * Componente: Empty State
 */
createEmptyState: (message = 'Sem dados disponíveis', icon = '📊') => {
    return `
        <div class="flex flex-col items-center justify-center py-12 text-center">
            <div class="text-6xl mb-4">${icon}</div>
            <p class="text-lg text-text-muted">${message}</p>
        </div>
    `;
},
```

Usar nos gráficos:

```javascript
renderNaturezaChart: (canvasId, gastosPorCategoria) => {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return null;

    // Verificar se há dados
    if (!gastosPorCategoria || Object.keys(gastosPorCategoria).length === 0) {
        canvas.parentElement.innerHTML = Components.createEmptyState('Sem dados de natureza', '📦');
        return null;
    }

    // ... resto do código
},
```

---

## ✅ Checklist Sprint 4

- [ ] Remover 3 KPIs de baixo valor
- [ ] Remover 2 gráficos redundantes
- [ ] Implementar gráfico de Natureza (barras horizontais)
- [ ] Implementar Funil de Compras
- [ ] Garantir KPI "Aguardando Entrega" está funcionando
- [ ] Adicionar tooltips informativos
- [ ] Padronizar cores dos gráficos
- [ ] Implementar loading states
- [ ] Implementar empty states
- [ ] Testar UX geral

---

## 🧪 Como Testar

1. **Verificar remoções:**
   - Dashboard Geral não deve ter "Obras Ativas" nem "Total de Pedidos"
   - Dashboard Obra não deve ter "Média Func./Dia"

2. **Verificar otimizações:**
   - Gráfico de Natureza deve ser barras horizontais (não pizza)
   - Funil de Compras deve mostrar pipeline com % de conversão

3. **Verificar UX:**
   - Todos os KPIs devem ter tooltips ao passar mouse
   - Gráficos sem dados devem mostrar empty state
   - Carregamento deve mostrar spinner

---

**Próximo:** Sprint 5 - Novos Indicadores Estratégicos
