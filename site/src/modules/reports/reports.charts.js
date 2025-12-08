import Chart from 'chart.js/auto';

export const ReportsCharts = {
    renderFunnelChart: (canvasId, porStatus = {}) => {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return null;

        const ctx = canvas.getContext('2d');

        const funnelStages = [
            { key: 'Solicitado', label: 'Solicitado', color: '#9ca3af' },
            { key: 'Em CotaÃ§Ã£o', label: 'Em CotaÃ§Ã£o', color: '#60a5fa' },
            { key: 'Aprovado', label: 'Aprovado', color: '#34d399' },
            { key: 'Comprado', label: 'Comprado', color: '#fbbf24' },
            { key: 'Recebido', label: 'Recebido', color: '#10b981' }
        ];

        const data = funnelStages.map(stage => porStatus[stage.key] || 0);
        const labels = funnelStages.map(stage => stage.label);
        const colors = funnelStages.map(stage => stage.color);

        const total = data[0] || 1;
        const percentages = data.map(val => ((val / total) * 100).toFixed(1));

        if (ctx.chart) ctx.chart.destroy();

        ctx.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels.map((label, i) => `${label} (${percentages[i]}%)`),
                datasets: [{
                    label: 'Quantidade',
                    data,
                    backgroundColor: colors,
                    borderWidth: 0
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    title: { display: true, text: 'Funil de Compras (Pipeline)' },
                    tooltip: {
                        callbacks: {
                            label: (ctxTip) => {
                                const value = ctxTip.parsed.x;
                                const percent = percentages[ctxTip.dataIndex];
                                return `${value} compras (${percent}% do total)`;
                            }
                        }
                    }
                },
                scales: {
                    x: { beginAtZero: true, ticks: { stepSize: 1 } },
                    y: { ticks: { autoSkip: false } }
                }
            }
        });
        return ctx.chart;
    }
};
