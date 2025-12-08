import Chart from 'chart.js/auto';

const GRID_COLOR = 'rgba(255,255,255,0.08)';
const TICK_COLOR = '#a1a1aa';
const LABEL_FONT = {
    family: 'Rajdhani, Inter, system-ui, sans-serif',
    weight: '600'
};

Chart.defaults.color = '#e5e5e5';
Chart.defaults.font.family = LABEL_FONT.family;
Chart.defaults.font.weight = LABEL_FONT.weight;

export const DashboardCharts = {
    renderCurvaS: (canvasId, planejado = [], realizado = [], labels = []) => {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        if (ctx.chart) ctx.chart.destroy();

        const finalLabels = labels.length ? labels : planejado.map((_, idx) => `M${idx + 1}`);

        ctx.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: finalLabels,
                datasets: [
                    {
                        label: 'Planejado',
                        data: planejado,
                        borderColor: '#16a34a',
                        backgroundColor: 'rgba(34, 197, 94, 0.15)',
                        tension: 0.35,
                        fill: true,
                        borderWidth: 3
                    },
                    {
                        label: 'Realizado',
                        data: realizado,
                        borderColor: '#22c55e',
                        backgroundColor: 'rgba(34, 197, 94, 0.05)',
                        tension: 0.35,
                        fill: true,
                        borderWidth: 3
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#e5e5e5',
                            font: LABEL_FONT,
                            usePointStyle: true
                        }
                    }
                },
                scales: {
                    x: {
                        grid: { color: GRID_COLOR },
                        ticks: { color: TICK_COLOR, font: LABEL_FONT }
                    },
                    y: {
                        grid: { color: GRID_COLOR },
                        ticks: { color: TICK_COLOR, font: LABEL_FONT }
                    }
                }
            }
        });
    },
    renderGastosPorMes: (canvasId, data) => {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        // Sort keys
        const labels = Object.keys(data).sort();
        const values = labels.map(k => data[k]);

        // Destroy existing chart if any
        if (ctx.chart) ctx.chart.destroy();

        ctx.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Gastos (R$)',
                    data: values,
                    backgroundColor: '#22c55e',
                    borderRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: {
                        grid: { color: GRID_COLOR },
                        ticks: { color: TICK_COLOR, font: LABEL_FONT }
                    },
                    y: {
                        grid: { color: GRID_COLOR },
                        ticks: { color: TICK_COLOR, font: LABEL_FONT }
                    }
                }
            }
        });
    },

    renderStatusPie: (canvasId, data) => {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        const labels = Object.keys(data);
        const values = Object.values(data);

        if (ctx.chart) ctx.chart.destroy();

        ctx.chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: values,
                    backgroundColor: [
                        '#22c55e',
                        '#16a34a',
                        '#a1a1aa',
                        '#ef4444',
                        '#1c1c1e'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#e5e5e5',
                            font: LABEL_FONT,
                            padding: 12,
                            usePointStyle: true
                        }
                    }
                }
            }
        });
    },

    renderNatureza: (canvasId, data = {}) => {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        const sorted = Object.entries(data).sort((a, b) => b[1] - a[1]).slice(0, 8);
        const labels = sorted.map(([k]) => k);
        const values = sorted.map(([_, v]) => v);

        if (ctx.chart) ctx.chart.destroy();

        if (!values.length) {
            ctx.parentElement.innerHTML = `<div class="flex items-center justify-center h-full text-text-muted text-sm">Sem dados</div>`;
            return;
        }

        ctx.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels,
                datasets: [{
                    label: 'Valor Gasto',
                    data: values,
                    backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#6366f1', '#8b5cf6', '#ec4899', '#14b8a6'],
                    borderWidth: 0
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    title: { display: true, text: 'Top Naturezas de Compra' },
                    tooltip: {
                        callbacks: {
                            label: (ctxTip) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 }).format(ctxTip.parsed.x)
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        grid: { color: GRID_COLOR },
                        ticks: {
                            color: TICK_COLOR,
                            font: LABEL_FONT,
                            callback: (v) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 }).format(v)
                        }
                    },
                    y: { grid: { display: false }, ticks: { color: TICK_COLOR, font: LABEL_FONT } }
                }
            }
        });
    },

    renderCentrosCusto: (canvasId, data) => {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        const labels = Object.keys(data);
        const values = Object.values(data);

        if (ctx.chart) ctx.chart.destroy();

        ctx.chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels,
                datasets: [{
                    data: values,
                    backgroundColor: ['#22c55e', '#16a34a', '#a1a1aa', '#ef4444', '#1c1c1e', '#0ea5e9', '#f59e0b']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: { color: '#e5e5e5', font: LABEL_FONT, padding: 12, usePointStyle: true }
                    }
                }
            }
        });
    }
};
