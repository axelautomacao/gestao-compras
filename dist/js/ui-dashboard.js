import { getIntegratedDataForObra } from './services/diarioDeObraApi.js';
import { generatePlannedValueData, generateActualValueData, parseHoras, getDaysArray, formatDate } from './utils/sCurve.js';
import { COST_PER_HOUR, COST_PER_OVERTIME_HOUR } from './constants/costs.js';
import { state } from './state.js';
import { Utils } from './utils.js';
import { Data } from './data.js';

const $ = (id) => document.getElementById(id);

let barChart, pieChart, donutChart, rdoHoursChart, sCurveChart, hoursCompareChart, hoursDailyChart, hoursCurveChart;
let barChartGeral, pieChartGeral, lineChartGeral;

const calendarState = { timeline: null, dataset: null, compras: [] };

const calcMetrics = (compras = [], resumo = {}) => {
    let onTime = 0, deliveries = 0, leadSum = 0, leadCount = 0, atrasos = 0;
    compras.forEach(c => {
        if (c.data_recebimento && c.previsao_entrega) {
            deliveries++;
            if (new Date(c.data_recebimento) <= new Date(c.previsao_entrega)) onTime++;
        }
        if (c.data_emissao && (c.data_recebimento || c.previsao_entrega)) {
            const diff = Math.max(0, (new Date(c.data_recebimento || c.previsao_entrega) - new Date(c.data_emissao)) / (1000 * 60 * 60 * 24));
            leadSum += diff;
            leadCount++;
        }
        if (c.status_compra !== 'Recebido' && c.previsao_entrega && new Date(c.previsao_entrega) < new Date()) {
            atrasos++;
        }
    });
    return {
        sla: deliveries ? (onTime / deliveries) * 100 : 0,
        lead: leadCount ? leadSum / leadCount : 0,
        atrasos,
        economia: Math.max(0, (resumo?.limite_real || 0) - (resumo?.comprometido || 0)),
        curvaPercent: resumo?.limite_real > 0 ? (resumo.comprometido / resumo.limite_real) * 100 : 0,
    };
};

export const UIDashboard = {
    updateDashboardObraList: () => {
        const query = $('dashboard-search-query').value.toLowerCase();
        const status = $('dashboard-status-filter').value;
        let obras = state.cache.obras.filter(o => {
            if (status === 'Ativas') return o.status !== 'Finalizada';
            if (status !== 'Todas') return o.status === status;
            return true;
        }).filter(o => {
            if (!query) return true;
            return (o.nome_obra?.toLowerCase() || '').includes(query) || (o.numero_os?.toLowerCase() || '').includes(query);
        });

        const select = $('dashboard-obra-select');
        select.innerHTML = `<option value="">-- Selecione uma Obra (${obras.length}) --</option>` +
            obras.map(o => `<option value="${o.id}">${Utils.escapeHtml(o.nome_obra)} (${Utils.escapeHtml(o.numero_os)})</option>`).join('');

        if (state.currentObraId && obras.some(o => o.id === state.currentObraId)) {
            select.value = state.currentObraId;
        } else {
            select.value = "";
        }
    },

    renderDashboardStats: async (obraId) => {
        if (!obraId) {
            $('dashboard-content')?.classList.add('hidden');
            $('dashboard-analysis-title')?.classList.add('hidden');
            if (state.listeners.dashboardCompras) {
                try { state.listeners.dashboardCompras(); } catch (e) { }
                state.listeners.dashboardCompras = null;
            }
            return;
        }

        state.currentObraId = obraId;
        const obra = state.cache.obras.find(o => o.id === obraId);
        $('dashboard-analysis-title').textContent = obra ? `${obra.nome_obra} (${obra.numero_os})` : 'Análise da Obra';
        $('dashboard-analysis-title').classList.remove('hidden');
        $('dashboard-content').classList.remove('hidden');

        [barChart, pieChart, donutChart, rdoHoursChart, sCurveChart, hoursCompareChart, hoursDailyChart, hoursCurveChart, barChartGeral, pieChartGeral, lineChartGeral].forEach(chart => {
            if (chart) try { chart.destroy(); } catch (e) { console.warn("Erro ao destruir chart:", e); }
        });

        try {
            const resumo = await Data.getResumoOrcamento(obraId);
            state.currentOrcamentoResumo = resumo;
            if (resumo) {
                $('kpi-orcado').textContent = Utils.formatCurrency(resumo.orcado);
                $('kpi-gasto').textContent = Utils.formatCurrency(resumo.comprometido);

                const balanco = resumo.limite_real - resumo.comprometido;
                const balancoEl = $('kpi-balanco');
                balancoEl.textContent = Utils.formatCurrency(balanco);
                balancoEl.className = `text-2xl font-bold ${balanco >= 0 ? 'text-emerald-600' : 'text-red-600'}`;

                const percent = resumo.limite_real > 0 ? (resumo.comprometido / resumo.limite_real) * 100 : 0;
                const percentEl = $('kpi-percent');
                percentEl.textContent = `${percent.toFixed(1)}%`;
                percentEl.className = `text-2xl font-bold ${percent > 100 ? 'text-red-600' : 'text-blue-600'}`;
            }
        } catch (err) {
            console.error('Erro ao buscar resumo do orçamento:', err);
        }

        const rdoPromise = obra.numero_os ? getIntegratedDataForObra(obra.numero_os).catch(() => null) : Promise.resolve(null);

        if (state.listeners.dashboardCompras) {
            try { state.listeners.dashboardCompras(); } catch (e) { }
        }

        state.listeners.dashboardCompras = Data.listenToCompras(obraId, async (compras) => {
            try {
                const resumo = state.currentOrcamentoResumo || {};
                const metrics = calcMetrics(compras, resumo);
                $('kpi-qt-total').textContent = compras.length;
                $('kpi-qt-aguardando').textContent = compras.filter(c => c.status_compra !== 'Recebido' && c.status_compra !== 'Cancelado').length;
                $('kpi-qt-recebidas').textContent = compras.filter(c => c.status_compra === 'Recebido').length;
                $('kpi-qt-atraso').textContent = metrics.atrasos;
                $('kpi-obra-economia').textContent = Utils.formatCurrency(metrics.economia);
                $('kpi-obra-sla').textContent = `${metrics.sla.toFixed(1)}%`;
                $('kpi-obra-lead').textContent = `${metrics.lead.toFixed(1)} dias`;
                $('kpi-obra-curva').textContent = `${metrics.curvaPercent.toFixed(1)}%`;

                const rdoData = await rdoPromise;
                let custoRdo = 0;
                const PADRAO_DIA = 9;
                const calcHorasReport = (rep) => {
                    let normal = 0, extra = 0;
                    (rep.maoDeObra?.padrao || []).forEach(p => {
                        const horas = Number(p.quantidade) || 0;
                        const extraHoras = Math.max(0, horas - PADRAO_DIA);
                        normal += (horas - extraHoras);
                        extra += extraHoras;
                    });
                    (rep.maoDeObra?.personalizada || []).forEach(mo => {
                        const horas = parseHoras(mo.horasTrabalhadas);
                        const extraHoras = Math.max(0, horas - PADRAO_DIA);
                        normal += (horas - extraHoras);
                        extra += extraHoras;
                    });
                    return { normal, extra };
                };

                let dailyMap = new Map();

                if (rdoData) {
                    const totals = (rdoData.reports || []).reduce((acc, rep) => {
                        const { normal, extra } = calcHorasReport(rep);
                        acc.normal += normal;
                        acc.extra += extra;
                        return acc;
                    }, { normal: 0, extra: 0 });

                    const totalHoras = totals.normal + totals.extra;
                    const totalHorasExtras = totals.extra;
                    const totalHorasNormais = totals.normal;
                    custoRdo = (totalHorasNormais * COST_PER_HOUR) + (totalHorasExtras * COST_PER_OVERTIME_HOUR);

                    const rdoCtxEl = document.getElementById('rdoHoursChart');
                    if (rdoCtxEl) {
                        const rdoCtx = rdoCtxEl.getContext('2d');
                        const cardTitle = rdoCtxEl.parentElement.querySelector('h3');
                        if (cardTitle) {
                            cardTitle.innerHTML = `Análise de Horas (RDO)<br><span class="text-sm text-gray-500">Custo Est.: ${Utils.formatCurrency(custoRdo)}</span>`;
                        }
                        if (rdoHoursChart) rdoHoursChart.destroy();
                        rdoHoursChart = new Chart(rdoCtx, {
                            type: 'doughnut',
                            data: { labels: ['Horas Normais', 'Horas Extras'], datasets: [{ data: [totalHorasNormais, totalHorasExtras], backgroundColor: ['#3b82f6', '#f97316'], borderWidth: 1 }] },
                            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' }, tooltip: { callbacks: { label: (ctx) => `${ctx.label}: ${(ctx.raw || 0).toFixed(2)}h` } } } }
                        });
                    }

                    const plannedNormais = Number(obra.horas_previstas) || 0;
                    const plannedExtras = Number(obra.horas_extras_previstas) || 0;
                    const plannedTotal = plannedNormais + plannedExtras;
                    const horasExecutadas = totalHoras;
                    const horasExtras = totalHorasExtras;
                    const horasNormais = Math.max(0, horasExecutadas - horasExtras);
                    const saldoHoras = plannedTotal - horasExecutadas;
                    const custoMao = (horasNormais * COST_PER_HOUR) + (horasExtras * COST_PER_OVERTIME_HOUR);

                    const setKpi = (id, text) => { const el = $(id); if (el) el.textContent = text; };
                    setKpi('kpi-horas-previstas', `${plannedTotal.toFixed(2)}h`);
                    setKpi('kpi-horas-executadas', `${horasExecutadas.toFixed(2)}h`);
                    setKpi('kpi-horas-saldo', `${saldoHoras.toFixed(2)}h`);
                    setKpi('kpi-custo-mao', Utils.formatCurrency(custoMao));

                    dailyMap = new Map();
                    (rdoData.reports || []).forEach(rep => {
                        const dateIso = rep.createdAt || rep.data || rep.data_inicio || rep.dataInicio || '';
                        const dateObj = dateIso ? new Date(dateIso) : null;
                        if (!dateObj || isNaN(dateObj)) return;
                        const date = dateObj.toISOString().substring(0, 10);
                        const { normal, extra } = calcHorasReport(rep);
                        const cur = dailyMap.get(date) || { normal: 0, extra: 0 };
                        cur.normal += normal;
                        cur.extra += extra;
                        dailyMap.set(date, cur);
                    });
                    const dailyLabels = Array.from(dailyMap.keys()).sort();
                    const dailyNormais = dailyLabels.map(d => dailyMap.get(d).normal);
                    const dailyExtras = dailyLabels.map(d => dailyMap.get(d).extra);

                    const compareEl = document.getElementById('hoursCompareChart');
                    if (compareEl) {
                        if (hoursCompareChart) hoursCompareChart.destroy();
                        hoursCompareChart = new Chart(compareEl.getContext('2d'), {
                            type: 'bar',
                            data: { labels: ['Previstas', 'Executadas'], datasets: [{ data: [plannedTotal, horasExecutadas], backgroundColor: ['#a5b4fc', '#34d399'] }] },
                            options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
                        });
                    }

                    const dailyEl = document.getElementById('hoursDailyChart');
                    if (dailyEl) {
                        if (hoursDailyChart) hoursDailyChart.destroy();
                        hoursDailyChart = new Chart(dailyEl.getContext('2d'), {
                            type: 'bar',
                            data: {
                                labels: dailyLabels,
                                datasets: [
                                    { label: 'Horas Normais', data: dailyNormais, backgroundColor: '#3b82f6' },
                                    { label: 'Horas Extras', data: dailyExtras, backgroundColor: '#f97316' }
                                ]
                            },
                            options: { responsive: true, maintainAspectRatio: false, scales: { x: { stacked: true }, y: { stacked: true, beginAtZero: true } } }
                        });
                    }

                    const startStr = obra.data_prevista_inicio || obra.data_inicio || dailyLabels[0];
                    const endStr = obra.data_prevista_fim || obra.data_fim || dailyLabels[dailyLabels.length - 1];
                    const curveEl = document.getElementById('curveHoursChart');
                    if (curveEl && startStr && endStr) {
                        const days = getDaysArray(new Date(startStr), new Date(endStr));
                        if (days.length > 0) {
                            const plannedPerDay = plannedTotal / days.length;
                            let plannedCum = 0;
                            let actualCum = 0;
                            const plannedPoints = [];
                            const actualPoints = [];
                            days.forEach(day => {
                                const dateStr = formatDate(day);
                                plannedCum += plannedPerDay;
                                plannedPoints.push({ x: dateStr, y: plannedCum });
                                const daily = dailyMap.get(dateStr);
                                if (daily) actualCum += (daily.normal + daily.extra);
                                actualPoints.push({ x: dateStr, y: actualCum });
                            });
                            if (hoursCurveChart) hoursCurveChart.destroy();
                            hoursCurveChart = new Chart(curveEl.getContext('2d'), {
                                type: 'line',
                                data: {
                                    datasets: [
                                        { label: 'Horas Planejadas (PV)', data: plannedPoints, borderColor: '#9ca3af', tension: 0.3, fill: false },
                                        { label: 'Horas Reais (AV)', data: actualPoints, borderColor: '#10b981', tension: 0.3, fill: true, backgroundColor: 'rgba(16,185,129,0.1)' }
                                    ]
                                },
                                options: { scales: { x: { type: 'time', time: { unit: 'day' } }, y: { beginAtZero: true } } }
                            });
                        }
                    }

                    const rdoTable = $('rdo-table-body');
                    if (rdoTable) {
                        const reports = (rdoData.reports || []).slice().sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
                        if (reports.length === 0) {
                            rdoTable.innerHTML = `<tr><td colspan="5" class="px-3 py-2 text-center text-gray-400">Sem dados RDO</td></tr>`;
                        } else {
                            rdoTable.innerHTML = reports.map(r => {
                                const dateIso = r.createdAt || r.data || r.data_inicio || r.dataInicio || '';
                                const date = dateIso ? Utils.fmtBR(formatDate(new Date(dateIso))) : 'N/D';
                                const { normal, extra } = calcHorasReport(r);
                                const qtdTecnicos = (r.maoDeObra?.padrao?.length || 0) + (r.maoDeObra?.personalizada?.length || 0);
                                const horaInicio = r.horaInicio || r.horarioInicio || r.inicio || '';
                                const horaFim = r.horaFim || r.horarioFim || r.fim || '';
                                const horario = (horaInicio || horaFim) ? `${Utils.escapeHtml(horaInicio || 'N/D')} - ${Utils.escapeHtml(horaFim || 'N/D')}` : 'N/D';
                                return `<tr><td class="px-3 py-2">${Utils.escapeHtml(date)}</td><td class="px-3 py-2 text-right font-semibold">${normal.toFixed(2)}h</td><td class="px-3 py-2 text-right text-orange-700 font-semibold">${extra.toFixed(2)}h</td><td class="px-3 py-2 text-center">${qtdTecnicos || 'N/D'}</td><td class="px-3 py-2 text-center">${horario}</td></tr>`;
                            }).join('');
                        }
                    }
                }

                const barCtxEl = document.getElementById('barChart');
                const barCtx = barCtxEl ? barCtxEl.getContext('2d') : null;
                if (!barCtx) return;
                const naturezaMap = new Map();
                compras.forEach(c => naturezaMap.set(c.natureza_compra || 'Outros', (naturezaMap.get(c.natureza_compra || 'Outros') || 0) + (c.valor_total || 0)));
                const naturezaLabels = Array.from(naturezaMap.keys());
                const naturezaValues = Array.from(naturezaMap.values());
                const cores = ['#10b981', '#f59e0b', '#ef4444', '#6366f1', '#14b8a6'];

                const datasets = naturezaLabels.map((lab, idx) => ({
                    label: `Realizado - ${lab}`,
                    data: [0, naturezaValues[idx]],
                    backgroundColor: cores[idx % cores.length],
                    stack: 'real'
                }));
                datasets.push({
                    label: 'Custo Mão de Obra (RDO)',
                    data: [0, custoRdo],
                    backgroundColor: '#8b5cf6',
                    stack: 'real'
                });

                if (barChart) barChart.destroy();
                barChart = new Chart(barCtx, {
                    type: 'bar',
                    data: {
                        labels: ['Planejado', 'Realizado'],
                        datasets: [
                            { label: 'Planejado (Limite)', data: [resumo?.limite_real || 0, 0], backgroundColor: '#93c5fd', stack: 'planejado' },
                            ...datasets
                        ]
                    },
                    options: { scales: { y: { beginAtZero: true, stacked: true }, x: { stacked: true } } }
                });

                const sCurveCtxEl = document.getElementById('curveSDetail');
                const sCurveCtx = sCurveCtxEl ? sCurveCtxEl.getContext('2d') : null;
                if (!sCurveCtx) return;
                const plannedValueData = generatePlannedValueData(obra);
                const actualValueData = generateActualValueData({ ...obra, compras }, rdoData?.reports || []);
                if (sCurveChart) sCurveChart.destroy();
                sCurveChart = new Chart(sCurveCtx, {
                    type: 'line',
                    data: {
                        datasets: [
                            { label: 'Valor Planejado (PV)', data: plannedValueData.map(d => ({ x: d.date, y: d.cumulativeCost })), borderColor: '#9ca3af', tension: 0.3, fill: false },
                            { label: 'Valor Real (AV)', data: actualValueData.map(d => ({ x: d.date, y: d.cumulativeCost })), borderColor: '#10b981', tension: 0.3, fill: true, backgroundColor: 'rgba(16,185,129,0.1)' }
                        ]
                    },
                    options: { scales: { x: { type: 'time', time: { unit: 'day' } }, y: { beginAtZero: true } } }
                });

                const pieCtxEl = document.getElementById('pieChart');
                const pieCtx = pieCtxEl ? pieCtxEl.getContext('2d') : null;
                if (pieCtx) {
                    if (pieChart) pieChart.destroy();
                    pieChart = new Chart(pieCtx, {
                        type: 'pie',
                        data: {
                            labels: naturezaLabels,
                            datasets: [{
                                data: naturezaValues,
                                backgroundColor: cores
                            }]
                        },
                        options: {
                            plugins: {
                                legend: { position: 'right' }
                            }
                        }
                    });
                }

                const donutCtxEl = document.getElementById('donutChart');
                const donutCtx = donutCtxEl ? donutCtxEl.getContext('2d') : null;
                if (donutCtx) {
                    const ccMap = new Map();
                    compras.forEach(c => {
                        const ccName = state.cache.centrosCusto.find(cc => cc.id === c.centroCustoId)?.nome || 'N/D';
                        ccMap.set(ccName, (ccMap.get(ccName) || 0) + (c.valor_total || 0));
                    });

                    if (donutChart) donutChart.destroy();
                    donutChart = new Chart(donutCtx, {
                        type: 'doughnut',
                        data: {
                            labels: Array.from(ccMap.keys()),
                            datasets: [{
                                data: Array.from(ccMap.values()),
                                backgroundColor: ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#6366f1', '#8b5cf6', '#ec4899']
                            }]
                        },
                        options: { plugins: { legend: { display: false } } }
                    });

                    UIDashboard.renderCcDrilldown(ccMap);
                }

                UIDashboard.renderCalendar(compras, rdoData?.reports || []);
                UIDashboard.renderDashboardTable(compras);

            } catch (err) {
                console.error('Erro ao renderizar dados do dashboard:', err);
            }
        });
    },

    renderCcDrilldown: (ccMap) => {
        const tbody = $('cc-summary-table');
        if (!tbody) return;
        const sorted = Array.from(ccMap.entries()).sort((a, b) => b[1] - a[1]);
        tbody.innerHTML = sorted.map(([name, val]) => `
            <tr>
                <td class="px-3 py-2 text-xs text-gray-700">${Utils.escapeHtml(name)}</td>
                <td class="px-3 py-2 text-xs font-semibold text-gray-900">${Utils.formatCurrency(val)}</td>
            </tr>
        `).join('');
    },

    renderCalendar: (compras, rdoReports = []) => {
        const container = document.getElementById('dashboard-calendar');
        if (!container) return;

        const items = new vis.DataSet();
        let idCounter = 1;

        compras.forEach(c => {
            if (c.data_emissao) {
                items.add({ id: idCounter++, content: `NF ${c.numero_nf || 'S/N'}`, start: c.data_emissao, type: 'point', className: 'bg-blue-100 text-blue-800 border-blue-300 text-xs' });
            }
            if (c.previsao_entrega) {
                items.add({ id: idCounter++, content: `Prev. ${c.numero_nf || 'S/N'}`, start: c.previsao_entrega, type: 'point', className: 'bg-yellow-100 text-yellow-800 border-yellow-300 text-xs' });
            }
            if (c.data_recebimento) {
                items.add({ id: idCounter++, content: `Rec. ${c.numero_nf || 'S/N'}`, start: c.data_recebimento, type: 'point', className: 'bg-green-100 text-green-800 border-green-300 text-xs' });
            }
        });

        (rdoReports || []).forEach((rdo, idx) => {
            const dateIso = rdo.createdAt || rdo.data || rdo.data_inicio || rdo.dataInicio;
            if (!dateIso) return;
            const date = new Date(dateIso);
            if (isNaN(date)) return;
            const contentLabel = rdo.maoDeObra?.padrao?.length || rdo.maoDeObra?.personalizada?.length ? `RDO ${idx + 1}` : 'RDO';
            items.add({ id: idCounter++, content: contentLabel, start: date.toISOString().substring(0, 10), type: 'point', className: 'bg-purple-100 text-purple-800 border-purple-300 text-xs' });
        });

        const options = { height: '360px', start: new Date(new Date().setDate(new Date().getDate() - 7)), end: new Date(new Date().setDate(new Date().getDate() + 20)) };

        if (calendarState.timeline) {
            calendarState.timeline.setItems(items);
        } else {
            calendarState.timeline = new vis.Timeline(container, items, options);
        }
    },

    renderDashboardTable: (compras) => {
        const tbody = $('dashboard-table-body');
        if (!tbody) return;

        const ccMap = new Map(state.cache.centrosCusto.map(cc => [cc.id, cc.nome]));
        const compradorMap = new Map(state.cache.compradores.map(c => [c.id, c.nome]));

        tbody.innerHTML = compras.sort((a, b) => (b.data_emissao || '').localeCompare(a.data_emissao || '')).map(c => `
            <tr>
                <td class="px-4 py-2 whitespace-nowrap">${Utils.renderStatusBadge(c.status_compra, c.previsao_entrega)}</td>
                <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">${Utils.fmtBR(c.data_recebimento)}</td>
                <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">${Utils.fmtBR(c.data_emissao)}</td>
                <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">${Utils.escapeHtml(c.numero_nf)}</td>
                <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">${Utils.formatCurrency(c.valor_total)}</td>
                <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">${Utils.escapeHtml(compradorMap.get(c.compradorId) || 'N/D')}</td>
                <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">${Utils.escapeHtml(ccMap.get(c.centroCustoId) || 'N/D')}</td>
                <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">${Utils.fmtBR(c.previsao_entrega)}</td>
                <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                    ${c.pdf_nf_path ? `<button data-action="view-pdf" data-path="${c.pdf_nf_path}" class="text-blue-600 hover:underline">NF</button>` : ''}
                </td>
            </tr>
        `).join('');
    }
};

export { };
