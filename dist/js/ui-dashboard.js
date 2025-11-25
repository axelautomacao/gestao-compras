import { getIntegratedDataForObra } from './services/diarioDeObraApi.js';
import { generatePlannedValueData, generateActualValueData, parseHoras, getDaysArray, formatDate } from './utils/sCurve.js';
import { COST_PER_HOUR, COST_PER_OVERTIME_HOUR } from './constants/costs.js';
import { state } from './state.js';
import { Utils } from './utils.js';
import { Data } from './data.js';
import { NotificationManager } from './notification-manager.js';

const $ = (id) => document.getElementById(id);

let barChart, pieChart, donutChart, rdoHoursChart, sCurveChart, hoursCompareChart, hoursDailyChart, hoursCurveChart;
let barChartGeral, pieChartGeral, lineChartGeral;

const calendarState = { timeline: null, dataset: null, compras: [] };

const showPlaceholder = (canvasEl, message) => {
    if (!canvasEl) return;
    const container = canvasEl.parentElement;
    if (!container) return;
    let placeholder = container.querySelector('.chart-placeholder');
    if (!placeholder) {
        placeholder = document.createElement('div');
        placeholder.className = 'chart-placeholder text-center text-sm text-gray-500 py-6';
        container.appendChild(placeholder);
    }
    placeholder.textContent = message;
    canvasEl.style.display = 'none';
};

const hidePlaceholder = (canvasEl) => {
    if (!canvasEl) return;
    const container = canvasEl.parentElement;
    const placeholder = container?.querySelector('.chart-placeholder');
    if (placeholder) placeholder.remove();
    canvasEl.style.display = 'block';
};

const calcMetrics = (compras = [], resumo = {}) => {
    let onTime = 0, deliveries = 0, leadSum = 0, leadCount = 0, atrasos = 0;
    compras.forEach(c => {
        const prev = c.previsao_entrega ? new Date(c.previsao_entrega) : null;
        const recv = c.data_recebimento ? new Date(c.data_recebimento) : null;
        if (recv && prev) {
            deliveries++;
            if (recv <= prev) onTime++;
        }
        if (c.data_emissao && (recv || prev)) {
            const endDate = recv || prev;
            const diff = Math.max(0, (new Date(endDate) - new Date(c.data_emissao)) / (1000 * 60 * 60 * 24));
            leadSum += diff;
            leadCount++;
        }
        if (c.status_compra !== 'Recebido' && prev && prev < new Date()) {
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

const destroyCharts = () => {
    [barChart, pieChart, donutChart, rdoHoursChart, sCurveChart, hoursCompareChart, hoursDailyChart, hoursCurveChart, barChartGeral, pieChartGeral, lineChartGeral].forEach(chart => {
        if (chart) {
            try { chart.destroy(); } catch (e) { console.warn('Erro ao destruir chart:', e); }
        }
    });
};

const safeText = (id, text) => {
    const el = $(id);
    if (el) el.textContent = text;
};

const parseDateRdo = (raw) => {
    if (!raw) return null;
    if (typeof raw === 'string' && raw.includes('/')) {
        const [d, m, y] = raw.split('/').map(Number);
        if (d && m && y) {
            const date = new Date(Date.UTC(y, m - 1, d));
            return isNaN(date) ? null : date;
        }
    }
    const d = new Date(raw);
    return isNaN(d) ? null : d;
};

const isoDate = (raw) => {
    const d = parseDateRdo(raw);
    return d ? d.toISOString().substring(0, 10) : null;
};

const fmtDateBR = (raw) => {
    const iso = isoDate(raw);
    return iso ? Utils.fmtBR(iso) : 'N/D';
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
        if (!select) return;
        select.innerHTML = `<option value="">-- Selecione uma Obra (${obras.length}) --</option>` +
            obras.map(o => `<option value="${o.id}">${Utils.escapeHtml(o.nome_obra)} (${Utils.escapeHtml(o.numero_os)})</option>`).join('');

        if (state.currentObraId && obras.some(o => o.id === state.currentObraId)) {
            select.value = state.currentObraId;
        } else {
            select.value = "";
        }
    },

    updateOrcamentoResumo: async (mode, obraId, compraIdParaExcluir = null) => {
        const targetId = mode === 'edit' ? 'edit-orcamento-resumo' : 'registro-orcamento-resumo';
        const container = $(targetId);
        if (!container) return null;
        if (!obraId) {
            container.classList.add('hidden');
            container.innerHTML = '';
            return null;
        }
        try {
            const resumo = await Data.getResumoOrcamento(obraId, compraIdParaExcluir);
            state.currentOrcamentoResumo = resumo;
            const balanco = (resumo?.limite_real || 0) - (resumo?.comprometido || 0);
            const percent = resumo?.limite_real ? (resumo.comprometido / resumo.limite_real) * 100 : 0;

            container.innerHTML = `
                <div class="orcamento-resumo-item">
                    <div class="label">Orçamento de Materiais</div>
                    <div class="value text-emerald-700">${Utils.formatCurrency(resumo?.limite_real || 0)}</div>
                </div>
                <div class="orcamento-resumo-item">
                    <div class="label">Compras Comprometidas</div>
                    <div class="value text-blue-700">${Utils.formatCurrency(resumo?.comprometido || 0)}</div>
                </div>
                <div class="orcamento-resumo-item">
                    <div class="label">Balanço</div>
                    <div class="value ${balanco >= 0 ? 'text-emerald-700' : 'text-red-600'}">${Utils.formatCurrency(balanco)}</div>
                </div>
                <div class="orcamento-resumo-item">
                    <div class="label">% Gasto</div>
                    <div class="value ${percent > 100 ? 'text-red-600' : 'text-indigo-700'}">${percent.toFixed(1)}%</div>
                </div>`;
            container.classList.remove('hidden');
            return resumo;
        } catch (err) {
            console.error('Erro ao atualizar resumo do orçamento:', err);
            container.classList.add('hidden');
            return null;
        }
    },

    renderDashboardStats: async (obraId) => {
        if (!obraId) {
            $('dashboard-content')?.classList.add('hidden');
            $('dashboard-analysis-title')?.classList.add('hidden');
            const alertBox = $('dashboard-alert');
            if (alertBox) { alertBox.classList.add('hidden'); alertBox.textContent = ''; }
            if (state.listeners.dashboardCompras) {
                try { state.listeners.dashboardCompras(); } catch (e) { }
                state.listeners.dashboardCompras = null;
            }
            return;
        }

        state.currentObraId = obraId;
        const obra = state.cache.obras.find(o => o.id === obraId);
        const titleEl = $('dashboard-analysis-title');
        if (titleEl) {
            titleEl.textContent = obra ? `${obra.nome_obra} (${obra.numero_os})` : 'Análise da Obra';
            titleEl.classList.remove('hidden');
        }
        const alertBox = $('dashboard-alert');
        if (alertBox) {
            const hasDates = obra?.data_inicio || obra?.data_prevista_inicio;
            if (!hasDates || (!obra?.data_fim && !obra?.data_prevista_fim)) {
                alertBox.textContent = 'Defina datas de início e fim da obra para liberar todos os gráficos e métricas.';
                alertBox.classList.remove('hidden');
            } else {
                alertBox.classList.add('hidden');
                alertBox.textContent = '';
            }
        }
        $('dashboard-content')?.classList.remove('hidden');

        destroyCharts();

        let resumo = null;
        try {
            resumo = await Data.getResumoOrcamento(obraId);
            state.currentOrcamentoResumo = resumo;
            if (resumo) {
                safeText('kpi-orcado', Utils.formatCurrency(resumo.orcado));
                safeText('kpi-gasto', Utils.formatCurrency(resumo.comprometido));

                const balanco = resumo.limite_real - resumo.comprometido;
                const balancoEl = $('kpi-balanco');
                if (balancoEl) {
                    balancoEl.textContent = Utils.formatCurrency(balanco);
                    balancoEl.className = `text-2xl font-bold ${balanco >= 0 ? 'text-emerald-600' : 'text-red-600'}`;
                }

                const percent = resumo.limite_real > 0 ? (resumo.comprometido / resumo.limite_real) * 100 : 0;
                const percentEl = $('kpi-percent');
                if (percentEl) {
                    percentEl.textContent = `${percent.toFixed(1)}%`;
                    percentEl.className = `text-2xl font-bold ${percent > 100 ? 'text-red-600' : 'text-blue-600'}`;
                }
            }
        } catch (err) {
            console.error('Erro ao buscar resumo do orçamento:', err);
        }

        const rdoPromise = obra?.numero_os ? getIntegratedDataForObra(obra.numero_os).catch(() => null) : Promise.resolve(null);

        if (state.listeners.dashboardCompras) {
            try { state.listeners.dashboardCompras(); } catch (e) { }
        }

        state.listeners.dashboardCompras = Data.listenToCompras(obraId, async (compras = []) => {
            try {
                const resumoLocal = state.currentOrcamentoResumo || resumo || {};
                const metrics = calcMetrics(compras, resumoLocal);
                safeText('kpi-qt-total', compras.length);
                safeText('kpi-qt-aguardando', compras.filter(c => c.status_compra !== 'Recebido' && c.status_compra !== 'Cancelado').length);
                safeText('kpi-qt-recebidas', compras.filter(c => c.status_compra === 'Recebido').length);
                safeText('kpi-qt-atraso', metrics.atrasos);
                safeText('kpi-obra-economia', Utils.formatCurrency(metrics.economia));
                safeText('kpi-obra-sla', `${metrics.sla.toFixed(1)}%`);
                safeText('kpi-obra-lead', `${metrics.lead.toFixed(1)} dias`);
                safeText('kpi-obra-curva', `${metrics.curvaPercent.toFixed(1)}%`);
                state.dashboardAlertCount = metrics.atrasos;
                if (metrics.atrasos > 0) {
                    NotificationManager.show(`Há ${metrics.atrasos} compra(s) em atraso nesta obra.`, 'warning', 5000);
                }

                const rdoData = await rdoPromise;
                let custoRdo = 0;
                const PADRAO_DIA = 9;
                const calcHorasReport = (rep) => {
                    let normal = 0, extra = 0;
                    (rep?.maoDeObra?.padrao || []).forEach(p => {
                        const horas = Number(p.quantidade) || 0;
                        const extraHoras = Math.max(0, horas - PADRAO_DIA);
                        normal += (horas - extraHoras);
                        extra += extraHoras;
                    });
                    (rep?.maoDeObra?.personalizada || []).forEach(mo => {
                        const horas = parseHoras(mo.horasTrabalhadas);
                        const extraHoras = Math.max(0, horas - PADRAO_DIA);
                        normal += (horas - extraHoras);
                        extra += extraHoras;
                    });
                    return { normal, extra };
                };

                let dailyMap = new Map();
                let plannedTotal = (Number(obra?.horas_previstas) || 0) + (Number(obra?.horas_extras_previstas) || 0);
                let horasExecutadas = 0;
                let horasExtras = 0;
                let horasNormais = 0;

                if (rdoData) {
                    const totals = (rdoData.reports || []).reduce((acc, rep) => {
                        const { normal, extra } = calcHorasReport(rep);
                        acc.normal += normal;
                        acc.extra += extra;
                        return acc;
                    }, { normal: 0, extra: 0 });

                    horasExecutadas = totals.normal + totals.extra;
                    horasExtras = totals.extra;
                    horasNormais = totals.normal;
                    custoRdo = (horasNormais * COST_PER_HOUR) + (horasExtras * COST_PER_OVERTIME_HOUR);

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
                            data: { labels: ['Horas Normais', 'Horas Extras'], datasets: [{ data: [horasNormais, horasExtras], backgroundColor: ['#3b82f6', '#f97316'], borderWidth: 1 }] },
                            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' }, tooltip: { callbacks: { label: (ctx) => `${ctx.label}: ${(ctx.raw || 0).toFixed(2)}h` } } } }
                        });
                    }

                    const saldoHoras = plannedTotal - horasExecutadas;
                    const custoMao = (horasNormais * COST_PER_HOUR) + (horasExtras * COST_PER_OVERTIME_HOUR);
                    const setKpi = (id, text) => { const el = $(id); if (el) el.textContent = text; };
                    setKpi('kpi-horas-previstas', `${plannedTotal.toFixed(2)}h`);
                    setKpi('kpi-horas-executadas', `${horasExecutadas.toFixed(2)}h`);
                    setKpi('kpi-horas-saldo', `${saldoHoras.toFixed(2)}h`);
                    setKpi('kpi-custo-mao', Utils.formatCurrency(custoMao));

                    dailyMap = new Map();
                    (rdoData.reports || []).forEach(rep => {
                        const dateIso = isoDate(rep.data || rep.createdAt || rep.data_inicio || rep.dataInicio);
                        if (!dateIso) return;
                        const { normal, extra } = calcHorasReport(rep);
                        const cur = dailyMap.get(dateIso) || { normal: 0, extra: 0 };
                        cur.normal += normal;
                        cur.extra += extra;
                        dailyMap.set(dateIso, cur);
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
                        if (dailyLabels.length === 0) {
                            showPlaceholder(dailyEl, 'Sem horas registradas para montar a evolução diária.');
                        } else {
                            hidePlaceholder(dailyEl);
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
                    }

                    const startStr = isoDate(obra?.data_prevista_inicio || obra?.data_inicio || dailyLabels[0]);
                    const endStr = isoDate(obra?.data_prevista_fim || obra?.data_fim || dailyLabels[dailyLabels.length - 1]);
                    const curveEl = document.getElementById('curveHoursChart');
                    if (curveEl) {
                        if (!startStr || !endStr) {
                            showPlaceholder(curveEl, 'Defina datas de início e fim da obra para gerar a Curva S de horas.');
                        } else {
                            const days = getDaysArray(new Date(startStr), new Date(endStr));
                            if (days.length > 0) {
                                hidePlaceholder(curveEl);
                                const plannedPerDay = plannedTotal / days.length;
                                let plannedCum = 0;
                                let actualCum = 0;
                                const plannedPoints = [];
                                const actualPoints = [];
                                days.forEach(day => {
                                    const dateStr = formatDate(day);
                                    if (!dateStr) return;
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
                            } else {
                                showPlaceholder(curveEl, 'Sem intervalo de datas suficiente para gerar a Curva S de horas.');
                            }
                        }
                    }

                    const rdoTable = $('rdo-table-body');
                    if (rdoTable) {
                        const reports = (rdoData.reports || []).slice().sort((a, b) => (isoDate(b.data || b.createdAt || '') || '').localeCompare(isoDate(a.data || a.createdAt || '') || ''));
                        if (reports.length === 0) {
                            rdoTable.innerHTML = `<tr><td colspan="6" class="px-3 py-2 text-center text-gray-400">Sem dados RDO</td></tr>`;
                        } else {
                            rdoTable.innerHTML = reports.map(r => {
                                const date = fmtDateBR(r.data || r.createdAt || r.data_inicio || r.dataInicio);
                                const { normal, extra } = calcHorasReport(r);
                                const qtdTecnicos = (r?.maoDeObra?.padrao?.length || 0) + (r?.maoDeObra?.personalizada?.length || 0);
                                const ht = r.horarioDeTrabalho || {};
                                const horaInicio = ht.expedienteInicio || ht.inicio || r.horaInicio || r.horarioInicio || r.inicio || '';
                                const horaFim = ht.expedienteFim || ht.fim || r.horaFim || r.horarioFim || r.fim || '';
                                const horario = (horaInicio || horaFim) ? `${Utils.escapeHtml(horaInicio || 'N/D')} - ${Utils.escapeHtml(horaFim || 'N/D')}` : 'N/D';
                                const numero = r._id ? String(r._id).slice(-8) : 'N/D';
                                return `<tr><td class="px-3 py-2">${Utils.escapeHtml(date)}</td><td class="px-3 py-2 text-right font-semibold">${normal.toFixed(2)}h</td><td class="px-3 py-2 text-right text-orange-700 font-semibold">${extra.toFixed(2)}h</td><td class="px-3 py-2 text-center">${qtdTecnicos || 'N/D'}</td><td class="px-3 py-2 text-center">${horario}</td><td class="px-3 py-2 text-center">${Utils.escapeHtml(numero)}</td></tr>`;
                            }).join('');
                        }
                    }
                } else {
                    safeText('kpi-horas-previstas', `${plannedTotal.toFixed(2)}h`);
                    safeText('kpi-horas-executadas', '0.00h');
                    safeText('kpi-horas-saldo', `${plannedTotal.toFixed(2)}h`);
                    safeText('kpi-custo-mao', Utils.formatCurrency(0));
                    const rdoTable = $('rdo-table-body');
                    if (rdoTable) rdoTable.innerHTML = `<tr><td colspan="5" class="px-3 py-2 text-center text-gray-400">Sem dados RDO</td></tr>`;
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
                            { label: 'Planejado (Limite)', data: [resumoLocal?.limite_real || 0, 0], backgroundColor: '#93c5fd', stack: 'planejado' },
                            ...datasets
                        ]
                    },
                    options: { scales: { y: { beginAtZero: true, stacked: true }, x: { stacked: true } } }
                });

                const sCurveCtxEl = document.getElementById('curveSDetail');
                const sCurveCtx = sCurveCtxEl ? sCurveCtxEl.getContext('2d') : null;
                if (sCurveCtx) {
                    const obraForCurve = {
                        ...obra,
                        data_inicio: obra?.data_inicio || obra?.data_prevista_inicio,
                        data_fim: obra?.data_fim || obra?.data_prevista_fim,
                        compras
                    };
                    const plannedValueData = generatePlannedValueData(obraForCurve);
                    const actualValueData = generateActualValueData({ ...obraForCurve, compras }, rdoPromise ? (await rdoPromise)?.reports || [] : []);

                    if (!plannedValueData.length && !actualValueData.length) {
                        showPlaceholder(sCurveCtxEl, 'Cadastre datas de início/fim e compras para gerar a Curva S financeira.');
                    } else {
                        hidePlaceholder(sCurveCtxEl);
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
                    }
                }

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
                        options: { plugins: { legend: { position: 'right' } } }
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
        const total = sorted.reduce((acc, [, v]) => acc + v, 0);
        tbody.innerHTML = sorted.map(([name, val]) => `
            <tr>
                <td class="px-3 py-2 text-xs text-gray-700">${Utils.escapeHtml(name)}</td>
                <td class="px-3 py-2 text-xs font-semibold text-gray-900">${Utils.formatCurrency(val)}</td>
            </tr>
        `).join('') + `
            <tr class="bg-gray-50 font-semibold">
                <td class="px-3 py-2 text-xs text-gray-700">Total</td>
                <td class="px-3 py-2 text-xs text-gray-900">${Utils.formatCurrency(total)}</td>
            </tr>
        `;
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
            const dateIso = isoDate(rdo.createdAt || rdo.data || rdo.data_inicio || rdo.dataInicio);
            if (!dateIso) return;
            const contentLabel = rdo?.maoDeObra?.padrao?.length || rdo?.maoDeObra?.personalizada?.length ? `RDO ${idx + 1}` : 'RDO';
            items.add({ id: idCounter++, content: contentLabel, start: dateIso, type: 'point', className: 'bg-purple-100 text-purple-800 border-purple-300 text-xs' });
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

        tbody.innerHTML = compras
            .sort((a, b) => (b.data_solicitacao || b.data_emissao || '').localeCompare(a.data_solicitacao || a.data_emissao || ''))
            .map(c => {
                const dataSolic = Utils.fmtBR(c.data_solicitacao || c.data_emissao);
                const dataCompra = Utils.fmtBR(c.data_emissao);
                const prevEntrada = Utils.fmtBR(c.previsao_entrega);
                const comprador = compradorMap.get(c.compradorId) || 'N/D';
                const centro = ccMap.get(c.centroCustoId) || 'N/D';
                return `
            <tr>
                <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">${dataSolic}</td>
                <td class="px-4 py-2 whitespace-nowrap">${Utils.renderStatusBadge(c.status_compra, c.previsao_entrega)}</td>
                <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">${dataCompra}</td>
                <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">${prevEntrada}</td>
                <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-900 font-semibold">${Utils.formatCurrency(c.valor_total)}</td>
                <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">${Utils.escapeHtml(comprador)}</td>
                <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">${Utils.escapeHtml(centro)}</td>
                <td class="px-4 py-2 whitespace-nowrap text-sm text-center space-x-2">
                    <button data-action="view-compra" data-id="${c.id}" class="btn-secondary btn-small">Ver</button>
                    <button data-action="edit-compra" data-id="${c.id}" class="btn-secondary btn-small">Editar</button>
                </td>
            </tr>`;
            }).join('');
    }
};

export { };
