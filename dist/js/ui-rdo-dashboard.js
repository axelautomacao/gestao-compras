/**
 * @file Módulo de UI para renderizar os componentes do dashboard de RDO e Curva S.
 * Este módulo é chamado separadamente para adicionar a nova funcionalidade.
 */
import { getIntegratedDataForObra } from './services/diarioDeObraApi.js';
import { generatePlannedValueData, generateActualValueData } from './utils/sCurve.js';
import { COST_PER_HOUR, COST_PER_OVERTIME_HOUR } from './constants/costs.js';
import { Utils } from './utils.js';

const $ = (id) => document.getElementById(id);

let rdoHoursChart, sCurveChart;

export async function renderRdoDashboard(obra, barChartToUpdate) {
    if (!obra) return;

    // Limpa gráficos anteriores para evitar duplicação
    if (rdoHoursChart) rdoHoursChart.destroy();
    if (sCurveChart) sCurveChart.destroy();

    const rdoCard = $('kpi-rdo-card') || document.createElement('div');
    if (!rdoCard.id) {
        rdoCard.id = 'kpi-rdo-card';
        rdoCard.className = 'card text-center bg-purple-50 border border-purple-200';
        const kpiGrid = $('kpi-orcado-card').parentElement;
        if (kpiGrid?.children.length > 1) kpiGrid.insertBefore(rdoCard, kpiGrid.children[1]);
        else kpiGrid?.appendChild(rdoCard);
    }
    const rdoContent = rdoCard.querySelector('#kpi-rdo-content') || document.createElement('div');
    if(!rdoContent.id) {
        rdoContent.id = 'kpi-rdo-content';
        rdoContent.className = 'text-xl font-bold text-purple-700 mt-2';
        rdoCard.innerHTML = `<div class="text-sm font-medium text-gray-500">ANÁLISE RDO</div>`;
        rdoCard.appendChild(rdoContent);
    }
    rdoContent.textContent = 'Carregando...';

    // Inicializa Curva S com dados planejados
    const plannedValueData = generatePlannedValueData(obra);
    const sCurveCtx = document.getElementById('curveSDetail')?.getContext('2d');
    if (sCurveCtx) {
        sCurveChart = new Chart(sCurveCtx, {
            type: 'line',
            data: {
                datasets: [{
                    label: 'Valor Planejado (PV)',
                    data: plannedValueData.map(d => ({ x: d.date, y: d.cumulativeCost })),
                    borderColor: '#9ca3af',
                    tension: 0.3,
                    fill: false
                }]
            },
            options: { scales: { x: { type: 'time', time: { unit: 'day' } }, y: { beginAtZero: true } } }
        });
    }

    if (!obra.numero_os) {
        rdoContent.innerHTML = `<div class="text-sm text-red-500">Nº de OS não cadastrado</div>`;
        return;
    }

    try {
        const data = await getIntegratedDataForObra(obra.numero_os);
        if (data) {
            const totalHorasNormais = data.totalHoras - data.totalHorasExtras;
            const custoRealizado = (totalHorasNormais * COST_PER_HOUR) + (data.totalHorasExtras * COST_PER_OVERTIME_HOUR);

            rdoContent.innerHTML = `<div class="text-sm"><span class="font-bold">${data.quantidadeRelatorios}</span> Rel.</div> <div class="text-sm"><span class="font-bold">${Utils.formatCurrency(custoRealizado)}</span></div>`;
            
            const rdoCtx = document.getElementById('rdoHoursChart')?.getContext('2d');
            if (rdoCtx) {
                rdoHoursChart = new Chart(rdoCtx, {
                    type: 'doughnut',
                    data: {
                        labels: ['Horas Normais', 'Horas Extras'],
                        datasets: [{ data: [totalHorasNormais, data.totalHorasExtras], backgroundColor: ['#3b82f6', '#f97316'] }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { position: 'bottom' },
                            datalabels: {
                                display: true,
                                color: '#111827',
                                formatter: (val) => `${(val || 0).toFixed(1)}h`
                            }
                        }
                    }
                });
            }
            
            if (barChartToUpdate && barChartToUpdate.data) {
                const rdoDataset = {
                    label: 'Custo Mão de Obra (RDO)',
                    data: [0, custoRealizado],
                    backgroundColor: '#8b5cf6',
                    stack: 'real'
                };
                // Remove RDO dataset anterior se existir, para evitar duplicação
                const existingIndex = barChartToUpdate.data.datasets.findIndex(ds => ds.label === rdoDataset.label);
                if (existingIndex > -1) barChartToUpdate.data.datasets.splice(existingIndex, 1);
                
                barChartToUpdate.data.datasets.push(rdoDataset);
                barChartToUpdate.update();
            }

            const actualValueData = generateActualValueData(obra, data.reports);
            if (sCurveChart) {
                sCurveChart.data.datasets.push({
                    label: 'Valor Real (AV)',
                    data: actualValueData.map(d => ({ x: d.date, y: d.cumulativeCost })),
                    borderColor: '#10b981',
                    fill: true,
                    backgroundColor: 'rgba(16,185,129,0.1)'
                });
                sCurveChart.update();
            }
        } else {
            rdoContent.textContent = 'Não encontrado no RDO';
        }
    } catch (err) {
        console.error("Erro na integração RDO Dashboard:", err);
        rdoContent.textContent = 'Falha ao buscar';
    }
}
