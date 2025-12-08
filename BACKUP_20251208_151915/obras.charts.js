import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';

const LABEL_FONT = {
    family: 'Rajdhani, Inter, system-ui, sans-serif',
    weight: '600'
};

const getPalette = () => {
    const root = typeof window !== 'undefined' ? getComputedStyle(document.documentElement) : null;
    const read = (varName, fallback) => (root ? (root.getPropertyValue(varName) || '').trim() : '') || fallback;
    const isLight = document.documentElement?.classList?.contains('theme-light');
    return {
        isLight,
        text: read('--color-text', '#e5e5e5'),
        muted: read('--color-text-muted', '#a1a1aa'),
        primary: read('--color-primary', '#22c55e'),
        primaryStrong: read('--color-primary-strong', '#16a34a'),
        danger: read('--color-alert', '#ef4444'),
        grid: isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'
    };
};

const applyDefaults = () => {
    const palette = getPalette();
    Chart.defaults.color = palette.text;
    Chart.defaults.font.family = LABEL_FONT.family;
    Chart.defaults.font.weight = LABEL_FONT.weight;
    Chart.defaults.plugins.legend.labels.color = palette.text;
    Chart.defaults.scales = Chart.defaults.scales || {};
};

applyDefaults();

export const setChartsTheme = () => {
    applyDefaults();
};

// Plugin global para exibir percentuais em doughnuts
const percentLabelsPlugin = {
    id: 'percentLabels',
    afterDraw(chart) {
        if (chart.config.type !== 'doughnut') return;
        const palette = getPalette();
        const { ctx } = chart;
        chart.data.datasets.forEach((dataset) => {
            const meta = chart.getDatasetMeta(0);
            const total = dataset.data.reduce((a, b) => a + b, 0);
            meta.data.forEach((element, index) => {
                const value = dataset.data[index];
                if (!value || !total) return;
                const perc = `${((value / total) * 100).toFixed(1)}%`;
                ctx.save();
                ctx.fillStyle = palette.text;
                ctx.font = '600 11px ' + LABEL_FONT.family;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                const position = element.tooltipPosition();
                ctx.fillText(perc, position.x, position.y);
                ctx.restore();
            });
        });
    }
};
Chart.register(percentLabelsPlugin);

export const ObrasCharts = {
    renderCategorias: (canvasId, data) => {
        const palette = getPalette();
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        const labels = Object.keys(data);
        const values = Object.values(data);

        if (ctx.chart) ctx.chart.destroy();

        ctx.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels,
                datasets: [{
                    label: 'Gastos (R$)',
                    data: values,
                    backgroundColor: palette.primary,
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
                        grid: { color: palette.grid },
                        ticks: { color: palette.muted, font: LABEL_FONT }
                    },
                    y: {
                        grid: { color: palette.grid },
                        ticks: { color: palette.muted, font: LABEL_FONT }
                    }
                }
            }
        });
    },

    renderNaturezaChart: (canvasId, gastosPorCategoria = {}) => {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return null;

        if (!gastosPorCategoria || Object.keys(gastosPorCategoria).length === 0) {
            const parent = canvas.parentElement;
            if (parent) parent.innerHTML = `<div class="flex items-center justify-center h-full text-text-muted text-sm">Sem dados de natureza</div>`;
            return null;
        }

        const ctx = canvas.getContext('2d');
        const palette = getPalette();

        const sorted = Object.entries(gastosPorCategoria)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 8);

        const labels = sorted.map(([nat]) => nat);
        const values = sorted.map(([_, val]) => val);

        if (ctx.chart) ctx.chart.destroy();

        ctx.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels,
                datasets: [{
                    label: 'Valor Gasto',
                    data: values,
                    backgroundColor: [
                        palette.primary,
                        palette.primaryStrong,
                        '#3b82f6',
                        '#f59e0b',
                        '#ef4444',
                        '#6366f1',
                        '#14b8a6',
                        '#8b5cf6'
                    ],
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
                            label: (ctxTip) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(ctxTip.parsed.x)
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: {
                            color: palette.muted,
                            font: LABEL_FONT,
                            callback: (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 }).format(value)
                        },
                        grid: { color: palette.grid }
                    },
                    y: {
                        ticks: { color: palette.text, font: LABEL_FONT },
                        grid: { display: false }
                    }
                }
            }
        });
        return ctx.chart;
    },

    renderStatusObra: (canvasId, data) => {
        const palette = getPalette();
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
                    backgroundColor: [
                        palette.primary,
                        palette.primaryStrong,
                        palette.muted,
                        palette.danger,
                        '#1c1c1e'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                layout: { padding: 10 },
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: palette.text,
                            font: LABEL_FONT,
                            padding: 12,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: (ctxTooltip) => {
                                const total = ctxTooltip.dataset.data.reduce((a, b) => a + b, 0);
                                const perc = total ? ((ctxTooltip.parsed / total) * 100).toFixed(1) : 0;
                                return `${ctxTooltip.label}: ${perc}% (${ctxTooltip.parsed})`;
                            }
                        }
                    }
                },
                cutout: '65%',
                pluginsCustom: true
            }
        });
    },

    renderCentrosCusto: (canvasId, data) => {
        const palette = getPalette();
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        const labels = Object.keys(data);
        const values = Object.values(data);

        if (ctx.chart) ctx.chart.destroy();

        ctx.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels,
                datasets: [{
                    data: values,
                    backgroundColor: palette.primary,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: { grid: { color: palette.grid }, ticks: { color: palette.muted, font: LABEL_FONT, callback: (v)=>`R$ ${(v/1000).toFixed(0)}k` }, beginAtZero: true },
                    y: { grid: { display: false }, ticks: { color: palette.muted, font: LABEL_FONT, autoSkip: false } }
                },
                indexAxis: 'y'
            }
        });
    },

    renderFinancePVAV: (canvasId, pv = [], av = []) => {
        const palette = getPalette();
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;
        if (ctx.chart) ctx.chart.destroy();

        ctx.chart = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [
                    {
                        label: 'Planejado (PV)',
                        data: pv,
                        borderColor: palette.primaryStrong,
                        backgroundColor: 'rgba(34,197,94,0.12)',
                        fill: true,
                        tension: 0.3,
                        borderWidth: 3,
                        parsing: { xAxisKey: 'x', yAxisKey: 'y' }
                    },
                    {
                        label: 'Real (AV)',
                        data: av,
                        borderColor: palette.danger,
                        backgroundColor: 'rgba(239,68,68,0.08)',
                        fill: true,
                        tension: 0.3,
                        borderWidth: 3,
                        parsing: { xAxisKey: 'x', yAxisKey: 'y' }
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { type: 'time', time: { unit: 'day' }, grid: { color: palette.grid }, ticks: { color: palette.muted } },
                    y: { grid: { color: palette.grid }, ticks: { color: palette.muted, callback: (v)=>`R$ ${(v/1000).toFixed(0)}k` }, beginAtZero: true }
                },
                plugins: { legend: { position: 'bottom', labels: { color: palette.text, font: LABEL_FONT, usePointStyle: true } } }
            }
        });
    },

    renderFinanceComparison: (canvasId, summary) => {
        const palette = getPalette();
        const ctx = document.getElementById(canvasId);
        if (!ctx || !summary) return;
        if (ctx.chart) ctx.chart.destroy();

        const labels = ['Materiais', 'Mão de Obra', 'Total'];
        const planned = [
            summary.materials?.planned || 0,
            summary.labor?.planned || 0,
            summary.total?.planned || 0
        ];
        const spent = [
            summary.materials?.spent || 0,
            summary.labor?.spent || 0,
            summary.total?.spent || 0
        ];

        ctx.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels,
                datasets: [
                    {
                        label: 'Planejado',
                        data: planned,
                        backgroundColor: palette.muted,
                        borderRadius: 6
                    },
                    {
                        label: 'Executado',
                        data: spent,
                        backgroundColor: palette.primary,
                        borderRadius: 6
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { color: palette.text, font: LABEL_FONT, usePointStyle: true }
                    },
                    tooltip: {
                        callbacks: {
                            label: (ctxTooltip) => `${ctxTooltip.dataset.label}: R$ ${Number(ctxTooltip.parsed.y || 0).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                        }
                    }
                },
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: { color: palette.muted, font: LABEL_FONT }
                    },
                    y: {
                        grid: { color: palette.grid },
                        ticks: {
                            color: palette.muted,
                            font: LABEL_FONT,
                            callback: (v) => `R$ ${(v / 1000).toFixed(0)}k`
                        },
                        beginAtZero: true
                    }
                }
            }
        });
    },

    renderComparisonChart: (canvasId, stats) => {
        const palette = getPalette();
        const canvas = document.getElementById(canvasId);
        if (!canvas || !stats) return null;

        const ctx = canvas.getContext('2d');
        if (canvas.chart) canvas.chart.destroy();

        canvas.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Planejado', 'Executado'],
                datasets: [
                    {
                        label: 'Materiais',
                        data: [stats.materialsPlanned || 0, stats.materialsSpent || 0],
                        backgroundColor: palette.primary,
                        stack: 'stack-0',
                        barPercentage: 0.6,
                        categoryPercentage: 0.6
                    },
                    {
                        label: 'Mao de Obra',
                        data: [stats.laborPlanned || 0, stats.laborSpent || 0],
                        backgroundColor: palette.primaryStrong,
                        stack: 'stack-0',
                        barPercentage: 0.6,
                        categoryPercentage: 0.6
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
                            color: palette.text,
                            font: LABEL_FONT,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: (ctxTooltip) => {
                                const label = ctxTooltip.dataset.label || '';
                                const val = ctxTooltip.parsed.y || 0;
                                return `${label}: ${val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 })}`;
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'Orcado vs Executado (Materiais + M.O.)',
                        color: palette.text,
                        font: LABEL_FONT
                    }
                },
                scales: {
                    x: { stacked: true, ticks: { color: palette.muted, font: LABEL_FONT }, grid: { color: palette.grid } },
                    y: {
                        stacked: true,
                        beginAtZero: true,
                        ticks: {
                            color: palette.muted,
                            font: LABEL_FONT,
                            callback: (value) => `R$ ${(value / 1000).toFixed(0)}k`
                        },
                        grid: { color: palette.grid }
                    }
                }
            }
        });

        return canvas.chart;
    },

    renderCurvaS: (canvasId, labels = [], planejado = [], realizado = []) => {
        const palette = getPalette();
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        if (ctx.chart) ctx.chart.destroy();

        ctx.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels.length ? labels : planejado.map((_, i) => `Semana ${i + 1}`),
                datasets: [
                    {
                        label: 'Planejado',
                        data: planejado,
                        borderColor: palette.muted,
                        backgroundColor: 'transparent',
                        borderWidth: 2,
                        borderDash: [5, 5],
                        tension: 0.4,
                        pointRadius: 0
                    },
                    {
                        label: 'Realizado',
                        data: realizado,
                        borderColor: palette.primary,
                        backgroundColor: 'rgba(34, 197, 94, 0.1)',
                        borderWidth: 3,
                        tension: 0.4,
                        fill: true,
                        pointRadius: 4,
                        pointBackgroundColor: palette.primary,
                        pointBorderColor: '#121212',
                        pointBorderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: palette.text,
                            font: LABEL_FONT,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        backgroundColor: '#1c1c1e',
                        titleColor: palette.text,
                        bodyColor: palette.muted,
                        borderColor: '#333333',
                        borderWidth: 1,
                        titleFont: LABEL_FONT,
                        bodyFont: LABEL_FONT
                    }
                },
                scales: {
                    x: {
                        grid: { color: palette.grid },
                        ticks: { color: palette.muted, font: LABEL_FONT }
                    },
                    y: {
                        grid: { color: palette.grid },
                        ticks: {
                            color: palette.muted,
                            font: LABEL_FONT,
                            callback: (value) => `R$ ${(value / 1000).toFixed(0)}k`
                        },
                        beginAtZero: true
                    }
                }
            }
        });
    },

    renderGastosMensais: (canvasId, data) => {
        const palette = getPalette();
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        const labels = Object.keys(data).sort();
        const values = labels.map(k => data[k]);

        if (ctx.chart) ctx.chart.destroy();

        ctx.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels.map(l => {
                    const d = new Date(l);
                    if (!Number.isNaN(d.getTime())) return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
                    return l;
                }),
                datasets: [{
                    label: 'Gastos Diários',
                    data: values,
                    borderColor: palette.primary,
                    backgroundColor: 'rgba(34,197,94,0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: true,
                    pointRadius: 3,
                    pointBackgroundColor: palette.primary
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
                        type: 'category',
                        grid: { display: false },
                        ticks: { color: palette.muted, font: LABEL_FONT, maxRotation: 45, autoSkip: true, maxTicksLimit: 10 }
                    },
                    y: {
                        grid: { color: palette.grid },
                        ticks: {
                            color: palette.muted,
                            font: LABEL_FONT,
                            callback: (value) => `R$ ${(value / 1000).toFixed(0)}k`
                        },
                        beginAtZero: true
                    }
                }
            }
        });
    }
};

