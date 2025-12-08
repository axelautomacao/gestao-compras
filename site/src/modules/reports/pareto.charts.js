import Chart from 'chart.js/auto';

/**
 * GrÃ¡fico de Pareto de Fornecedores
 * Sprint 5 - Indicadores EstratÃ©gicos
 */
export const ParetoCharts = {
    renderParetoChart: (canvasId, paretoData) => {
        const canvas = document.getElementById(canvasId);
        if (!canvas || !paretoData?.paretoData?.length) return null;

        const ctx = canvas.getContext('2d');

        const topData = paretoData.paretoData.slice(0, 10);
        const labels = topData.map(d => d.fornecedor);
        const valores = topData.map(d => d.valor);
        const percentAcumulado = topData.map(d => d.percentAcumulado);

        if (canvas.chart) {
            canvas.chart.destroy();
        }

        canvas.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels,
                datasets: [
                    {
                        label: 'Valor (R$)',
                        data: valores,
                        backgroundColor: '#3b82f6',
                        yAxisID: 'y',
                        order: 2
                    },
                    {
                        label: '% Acumulado',
                        data: percentAcumulado,
                        type: 'line',
                        borderColor: '#ef4444',
                        backgroundColor: 'transparent',
                        yAxisID: 'y1',
                        order: 1,
                        borderWidth: 2,
                        tension: 0.3
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
                        text: 'AnÃ¡lise de Pareto - Top Fornecedores (20/80)'
                    },
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                if (context.datasetIndex === 0) {
                                    return `Valor: ${new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(context.parsed.y)}`;
                                }
                                return `Acumulado: ${context.parsed.y.toFixed(1)}%`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        beginAtZero: true,
                        ticks: {
                            callback: (value) => new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                                minimumFractionDigits: 0
                            }).format(value)
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        min: 0,
                        max: 100,
                        grid: {
                            drawOnChartArea: false
                        },
                        ticks: {
                            callback: (value) => `${value}%`
                        }
                    }
                }
            }
        });

        return canvas.chart;
    }
};
