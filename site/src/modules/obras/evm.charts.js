import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';

export const EVMCharts = {
    renderEVMDashboard: (canvasId, curveData) => {
        const canvas = document.getElementById(canvasId);
        if (!canvas || !curveData) return null;
        const ctx = canvas.getContext('2d');
        const { pvPoints, evPoints, acPoints, evm } = curveData;

        if (ctx.chart) ctx.chart.destroy();

        ctx.chart = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [
                    { label: 'PV (Planned Value)', data: pvPoints, borderColor: '#9ca3af', backgroundColor: 'transparent', borderWidth: 2, tension: 0.3, pointRadius: 0 },
                    { label: 'EV (Earned Value)', data: evPoints, borderColor: '#3b82f6', backgroundColor: 'rgba(59,130,246,0.1)', borderWidth: 2, tension: 0.3, fill: true, pointRadius: 0 },
                    { label: 'AC (Actual Cost)', data: acPoints, borderColor: '#ef4444', backgroundColor: 'transparent', borderWidth: 2, tension: 0.3, pointRadius: 0, borderDash: [5, 5] }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom' },
                    title: { display: true, text: `EVM Dashboard | CPI: ${(evm?.CPI || 0).toFixed(2)} | SPI: ${(evm?.SPI || 0).toFixed(2)}` },
                    tooltip: {
                        callbacks: {
                            label: (ctxTooltip) => {
                                const value = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(ctxTooltip.parsed.y);
                                return `${ctxTooltip.dataset.label}: ${value}`;
                            }
                        }
                    }
                },
                scales: {
                    x: { type: 'time', time: { unit: 'day', displayFormats: { day: 'dd/MM' } } },
                    y: { beginAtZero: true, ticks: { callback: (v) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 }).format(v) } }
                }
            }
        });
        return ctx.chart;
    }
};
