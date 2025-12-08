import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import { EXTRA_FACTOR } from '../../constants/costs.js';

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
                    d.setDate(d.getDate() + 1); // atrasar 1 dia na visualização
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
    },

    renderHoursComparisonChart: (canvasId, metrics) => {
        const ctx = document.getElementById(canvasId);
        if (!ctx || !metrics) return null;
        if (ctx.chart) ctx.chart.destroy();

        ctx.chart = new Chart(ctx, {
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
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    title: { display: true, text: 'Horas Previstas vs Realizadas (Equivalentes)' },
                    tooltip: { callbacks: { label: (ctxTooltip) => `${ctxTooltip.parsed.y.toFixed(1)}h` } }
                },
                scales: {
                    y: { beginAtZero: true, ticks: { callback: (value) => `${value.toFixed ? value.toFixed(0) : value}h` } }
                }
            }
        });
        return ctx.chart;
    },

    renderHoursCurveChart: (canvasId, obra, metrics) => {
        const canvas = document.getElementById(canvasId);
        if (!canvas || !obra || !metrics) return null;

        const startDate = obra?.data_prevista_inicio || obra?.data_inicio;
        const endDate = obra?.data_prevista_fim || obra?.data_fim;

        if (!startDate || !endDate) {
            const parent = canvas.parentElement;
            if (parent) parent.innerHTML = '<p class="text-center text-text-muted py-6 text-sm">Defina datas de início e fim da obra</p>';
            return null;
        }

        const ctx = canvas.getContext('2d');

        const start = new Date(startDate);
        const end = new Date(endDate);
        const days = [];
        const cur = new Date(start);
        while (cur <= end) {
            days.push(new Date(cur));
            cur.setDate(cur.getDate() + 1);
        }

        const workdays = days.filter(d => {
            const day = d.getDay();
            return day !== 0 && day !== 6;
        });
        const horasPorDia = workdays.length > 0 ? (metrics.horasPrevistasEq || 0) / workdays.length : 0;
        let plannedCum = 0;
        const plannedPoints = [];
        days.forEach(d => {
            const isWorkday = d.getDay() !== 0 && d.getDay() !== 6;
            if (isWorkday) plannedCum += horasPorDia;
            const dShift = new Date(d);
            dShift.setDate(dShift.getDate() + 1); // atrasar +1 para alinhar início mostrado
            plannedPoints.push({ x: dShift.toISOString().split('T')[0], y: plannedCum });
        });

        let actualCum = 0;
        const actualPoints = [];
        days.forEach(d => {
            const key = d.toISOString().split('T')[0];
            const daily = metrics.dailyMap?.get(key);
            if (daily) {
                actualCum += daily.normal + (daily.extra * EXTRA_FACTOR);
            }
            actualPoints.push({ x: key, y: actualCum });
        });

        if (ctx.chart) ctx.chart.destroy();
        ctx.chart = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [
                    { label: 'Horas Planejadas (PV)', data: plannedPoints, borderColor: '#9ca3af', backgroundColor: 'transparent', tension: 0.3, borderWidth: 2, pointRadius: 0 },
                    { label: 'Horas Reais (AV)', data: actualPoints, borderColor: '#10b981', backgroundColor: 'rgba(16,185,129,0.1)', tension: 0.3, fill: true, borderWidth: 2, pointRadius: 0 }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom' },
                    title: { display: true, text: 'Curva S de Horas (Planejado vs Real)' },
                    tooltip: { callbacks: { label: (ctxTooltip) => `${ctxTooltip.dataset.label}: ${ctxTooltip.parsed.y.toFixed(1)}h` } }
                },
                scales: {
                    x: { type: 'time', time: { unit: 'day', displayFormats: { day: 'dd/MM' } } },
                    y: { beginAtZero: true, ticks: { callback: (v) => `${v.toFixed ? v.toFixed(0) : v}h` } }
                }
            }
        });
        return ctx.chart;
    }
};
