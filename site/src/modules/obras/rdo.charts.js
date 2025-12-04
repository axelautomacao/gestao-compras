import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';

const LABEL_FONT = {
    family: 'Rajdhani, Inter, system-ui, sans-serif',
    weight: '600'
};

const getPalette = () => {
    const root = typeof window !== 'undefined' ? getComputedStyle(document.documentElement) : null;
    const isLight = document.documentElement?.classList?.contains('theme-light');
    const read = (varName, fallback) => (root ? (root.getPropertyValue(varName) || '').trim() : '') || fallback;
    const fallbackText = isLight ? '#0b0b0b' : '#e5e5e5';
    const fallbackMuted = isLight ? '#111827' : '#a1a1aa';
    return {
        isLight,
        text: read('--color-text', fallbackText),
        muted: read('--color-text-muted', fallbackMuted),
        primary: read('--color-primary', '#22c55e'),
        danger: read('--color-alert', '#ef4444'),
        grid: isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)',
        weekendShade: isLight ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.03)',
        holidayShade: isLight ? 'rgba(255,206,86,0.18)' : 'rgba(255,206,86,0.08)'
    };
};

export const RDOCharts = {
    renderEmpty: (canvasId) => {
        const el = document.getElementById(canvasId);
        if (!el) return;
        const container = el.parentElement;
        if (!container) return;
        el.style.display = 'none';
        let placeholder = container.querySelector('.chart-placeholder');
        if (!placeholder) {
            placeholder = document.createElement('div');
            placeholder.className = 'chart-placeholder text-center text-sm text-text-muted py-6';
            container.appendChild(placeholder);
        }
        placeholder.textContent = 'Sem dados';
    },

    renderHorasNormaisExtras: (canvasId, normais = {}, extras = {}) => {
        const palette = getPalette();
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        const labels = Array.from(new Set([...Object.keys(normais), ...Object.keys(extras)])).sort();
        const normVals = labels.map(l => normais[l] || 0);
        const extraVals = labels.map(l => extras[l] || 0);

        if (ctx.chart) ctx.chart.destroy();

        ctx.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels.map(l => {
                    const d = new Date(l);
                    d.setHours(12, 0, 0, 0);
                    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
                }),
                datasets: [
                    {
                        label: 'Horas Normais',
                        data: normVals,
                        backgroundColor: palette.primary
                    },
                    {
                        label: 'Horas Extras',
                        data: extraVals,
                        backgroundColor: palette.danger
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'top', labels: { color: palette.text, font: LABEL_FONT } } },
                scales: {
                    x: { stacked: true, grid: { display: false }, ticks: { color: palette.muted, font: LABEL_FONT, maxRotation: 45, autoSkip: true } },
                    y: { stacked: true, grid: { color: palette.grid }, ticks: { color: palette.muted, font: LABEL_FONT }, beginAtZero: true }
                }
            }
        });
    },

    renderCurvaHoras: (canvasId, planejado = [], realizado = [], feriados = []) => {
        const palette = getPalette();
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;
        if (ctx.chart) ctx.chart.destroy();

        const plannedSorted = [...(planejado || [])].sort((a, b) => new Date(a.x) - new Date(b.x));
        const execSorted = [...(realizado || [])].sort((a, b) => new Date(a.x) - new Date(b.x));
        const allDates = [...plannedSorted, ...execSorted].map(p => new Date(p.x)).filter(d => !Number.isNaN(d));
        const minX = allDates.length ? new Date(Math.min(...allDates)) : null;
        const maxX = allDates.length ? new Date(Math.max(...allDates)) : null;

        const weekendShade = {
            id: 'weekendShade',
            beforeDraw(chart) {
                const xAxis = chart.scales.x;
                const ctxShade = chart.ctx;
                const start = xAxis.min;
                const end = xAxis.max;
                if (!start || !end) return;
                const dayMs = 24 * 60 * 60 * 1000;
                let cursor = start - ((new Date(start).getDay() + 7) % 7) * dayMs;
                while (cursor <= end + dayMs * 7) {
                    const d = new Date(cursor);
                    const day = d.getDay();
                    if (day === 0 || day === 6) {
                        const xStart = xAxis.getPixelForValue(d);
                        const xEnd = xAxis.getPixelForValue(new Date(cursor + dayMs));
                        ctxShade.save();
                        ctxShade.fillStyle = palette.weekendShade;
                        ctxShade.fillRect(xStart, chart.chartArea.top, xEnd - xStart, chart.chartArea.bottom - chart.chartArea.top);
                        ctxShade.restore();
                    }
                    cursor += dayMs;
                }
            }
        };

        const feriadoShade = {
            id: 'holidayShade',
            beforeDraw(chart) {
                if (!feriados || !feriados.length) return;
                const xAxis = chart.scales.x;
                const ctxShade = chart.ctx;
                feriados.forEach(f => {
                    const d = new Date(f);
                    if (Number.isNaN(d)) return;
                    const xStart = xAxis.getPixelForValue(d);
                    const xEnd = xAxis.getPixelForValue(new Date(d.getTime() + 24 * 60 * 60 * 1000));
                    ctxShade.save();
                    ctxShade.fillStyle = palette.holidayShade;
                    ctxShade.fillRect(xStart, chart.chartArea.top, xEnd - xStart, chart.chartArea.bottom - chart.chartArea.top);
                    ctxShade.restore();
                });
            }
        };

        ctx.chart = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [
                    {
                        label: 'Horas Planejadas',
                        data: plannedSorted,
                        borderColor: palette.primary,
                        backgroundColor: palette.isLight ? 'rgba(34,197,94,0.15)' : 'rgba(34,197,94,0.12)',
                        fill: true,
                        tension: 0.3,
                        borderWidth: 2,
                        pointRadius: 0,
                        parsing: { xAxisKey: 'x', yAxisKey: 'y' }
                    },
                    {
                        label: 'Horas Executadas',
                        data: execSorted,
                        borderColor: palette.danger,
                        backgroundColor: palette.isLight ? 'rgba(239,68,68,0.12)' : 'rgba(239,68,68,0.1)',
                        fill: true,
                        tension: 0.3,
                        borderWidth: 3,
                        pointRadius: 3,
                        parsing: { xAxisKey: 'x', yAxisKey: 'y' }
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        type: 'time',
                        time: { unit: 'day' },
                        grid: { color: palette.grid },
                        offset: false,
                        bounds: 'ticks',
                        min: minX || undefined,
                        max: maxX || undefined,
                        ticks: {
                            source: 'data',
                            color: palette.muted,
                            font: LABEL_FONT,
                            autoSkip: true,
                            maxRotation: 0,
                            callback: (val) => {
                                const d = new Date(val);
                                const base = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                                const day = d.getDay();
                                if (day === 1) return `${base} (Mon)`;
                                if (day === 5) return `${base} (Fri)`;
                                return base;
                            }
                        }
                    },
                    y: { grid: { color: palette.grid }, ticks: { color: palette.muted, font: LABEL_FONT }, beginAtZero: true }
                },
                plugins: {
                    legend: { position: 'bottom', labels: { color: palette.text, font: LABEL_FONT, usePointStyle: true } },
                    weekendShade: true
                }
            },
            plugins: [weekendShade, feriadoShade]
        });
    },

    renderHorasStacked: (canvasId, data = {}) => {
        const palette = getPalette();
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;
        if (ctx.chart) ctx.chart.destroy();

        const {
            plannedNormal = 0,
            plannedExtra = 0,
            execNormal = 0,
            execExtra = 0
        } = data;

        ctx.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Planejado', 'Gasto'],
                datasets: [
                    {
                        label: 'Normais (Planejado)',
                        data: [plannedNormal, 0],
                        backgroundColor: palette.primary,
                        stack: 'planejado'
                    },
                    {
                        label: 'Extras conv. (Planejado)',
                        data: [plannedExtra, 0],
                        backgroundColor: palette.isLight ? '#f97316cc' : '#f97316',
                        stack: 'planejado'
                    },
                    {
                        label: 'Normais (Gasto)',
                        data: [0, execNormal],
                        backgroundColor: palette.muted,
                        stack: 'executado'
                    },
                    {
                        label: 'Extras conv. (Gasto)',
                        data: [0, execExtra],
                        backgroundColor: palette.danger,
                        stack: 'executado'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { labels: { color: palette.text, font: LABEL_FONT } },
                    tooltip: {
                        callbacks: {
                            label: (ctxTip) => `${ctxTip.dataset.label}: ${ctxTip.parsed.y.toFixed(1)}h`
                        }
                    }
                },
                scales: {
                    x: { stacked: true, ticks: { color: palette.muted, font: LABEL_FONT }, grid: { display: false } },
                    y: { stacked: true, beginAtZero: true, ticks: { color: palette.muted, font: LABEL_FONT }, grid: { color: palette.grid } }
                }
            }
        });
    },

    renderHorasPorFuncao: (canvasId, data = {}) => {
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
                    backgroundColor: ['#22c55e', '#16a34a', '#0ea5e9', '#f59e0b', '#ef4444', '#a855f7', '#6366f1']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: { color: palette.text, font: LABEL_FONT, usePointStyle: true }
                    }
                }
            }
        });
    }
};
