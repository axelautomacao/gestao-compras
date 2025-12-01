import { getIntegratedDataForObra } from './services/diarioDeObraApi.js';
import { generatePlannedValueData, generateActualValueData, parseHoras, getDaysArray, getWorkdaysArray, formatDate } from './utils/sCurve.js';
import { COST_PER_HOUR, COST_PER_OVERTIME_HOUR } from './constants/costs.js';
import { state } from './state.js';
import { Utils } from './utils.js';
import { Data } from './data.js';
import { NotificationManager } from './notification-manager.js';

const $ = (id) => document.getElementById(id);
const VIEW_ICON = `<svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" /></svg>`;

let barChart, pieChart, donutChart, rdoHoursChart, sCurveChart, hoursCompareChart, hoursDailyChart, hoursCurveChart;
let barChartGeral, pieChartGeral, lineChartGeral, curveChartGeral;

const calendarState = { timeline: null, dataset: null, compras: [] };
const EXTRA_FACTOR = 1.5;

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

const loadNotificationPrefsSafe = () => {
    try {
        if (state.notificationPrefs) return state.notificationPrefs;
        const raw = localStorage.getItem('axel_notif_prefs');
        if (raw) return JSON.parse(raw);
    } catch { }
    return null;
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
    [barChart, pieChart, donutChart, rdoHoursChart, sCurveChart, hoursCompareChart, hoursDailyChart, hoursCurveChart, barChartGeral, pieChartGeral, lineChartGeral, curveChartGeral].forEach(chart => {
        if (chart) {
            try { chart.destroy(); } catch (e) { console.warn('Erro ao destruir chart:', e); }
        }
    });
};

const safeText = (id, text) => {
    const el = $(id);
    if (el) el.textContent = text;
};
const setKpi = (id, text) => safeText(id, text);

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

const WEEKDAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const weekdayLabel = (raw) => {
    const d = parseDateRdo(raw);
    return d ? WEEKDAYS[d.getDay()] : 'N/D';
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
                const prefs = loadNotificationPrefsSafe();
                const toastEnabled = prefs?.channels?.toast !== false;
                const allowEvent = prefs?.events?.atraso !== false;
                if (metrics.atrasos > 0 && toastEnabled && allowEvent) {
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
                let plannedNormais = Number(obra?.horas_previstas) || 0;
                let plannedExtras = Number(obra?.horas_extras_previstas) || 0;
                let plannedTotalEq = plannedNormais + (plannedExtras * EXTRA_FACTOR);
                let horasExecutadasEq = 0;
                let horasExtras = 0;
                let horasNormais = 0;

                if (rdoData) {
                    const totals = (rdoData.reports || []).reduce((acc, rep) => {
                        const { normal, extra } = calcHorasReport(rep);
                        acc.normal += normal;
                        acc.extra += extra;
                        return acc;
                    }, { normal: 0, extra: 0 });

                    horasNormais = totals.normal;
                    horasExtras = totals.extra;
                    horasExecutadasEq = horasNormais + (horasExtras * EXTRA_FACTOR);
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
                            options: {
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: {
                                    legend: { position: 'bottom' },
                                    tooltip: { callbacks: { label: (ctx) => `${ctx.label}: ${(ctx.raw || 0).toFixed(2)}h` } },
                                    datalabels: {
                                        display: true,
                                        color: '#111827',
                                        formatter: (val) => `${(val || 0).toFixed(1)}h`
                                    }
                                }
                            }
                        });
                    }

                    const saldoHoras = plannedTotalEq - horasExecutadasEq;
                    const custoMao = (horasNormais * COST_PER_HOUR) + (horasExtras * COST_PER_OVERTIME_HOUR);
                    const horasExtrasPercent = horasNormais > 0 ? (horasExtras / horasNormais) * 100 : 0;
                    setKpi('kpi-horas-previstas', `${plannedTotalEq.toFixed(2)}h`);
                    setKpi('kpi-horas-executadas', `${horasExecutadasEq.toFixed(2)}h`);
                    setKpi('kpi-horas-saldo', `${saldoHoras.toFixed(2)}h`);
                    setKpi('kpi-custo-mao', Utils.formatCurrency(custoMao));
                    setKpi('kpi-horas-extras-total', `${horasExtras.toFixed(2)}h`);
                    setKpi('kpi-horas-extras-percent', `${horasExtrasPercent.toFixed(1)}%`);

                    // KPIs monetários de horas e combinados
                    const horasOrcadasValor = (plannedNormais * COST_PER_HOUR) + (plannedExtras * COST_PER_OVERTIME_HOUR);
                    const horasGastasValor = custoMao;
                    const horasDiffValor = horasOrcadasValor - horasGastasValor;
                    const horasPercent = horasOrcadasValor > 0 ? (horasGastasValor / horasOrcadasValor) * 100 : 0;
                    setKpi('kpi-horas-orcadas', Utils.formatCurrency(horasOrcadasValor));
                    setKpi('kpi-horas-gastas', Utils.formatCurrency(horasGastasValor));
                    setKpi('kpi-horas-diff', Utils.formatCurrency(horasDiffValor));
                    setKpi('kpi-horas-percent', `${horasPercent.toFixed(1)}%`);

                    const materiaisOrcado = resumoLocal.limite_real || 0;
                    const materiaisGasto = resumoLocal.comprometido || 0;
                    const combinadoOrcado = materiaisOrcado + horasOrcadasValor;
                    const combinadoGasto = materiaisGasto + horasGastasValor;
                    const combinadoPercent = combinadoOrcado > 0 ? (combinadoGasto / combinadoOrcado) * 100 : 0;
                    const combinadoDiff = combinadoOrcado - combinadoGasto;
                    setKpi('kpi-combined-total', Utils.formatCurrency(combinadoOrcado));
                    setKpi('kpi-combined-gasto', Utils.formatCurrency(combinadoGasto));
                    setKpi('kpi-combined-diff', Utils.formatCurrency(combinadoDiff));
                    setKpi('kpi-combined-percent', `${combinadoPercent.toFixed(1)}%`);

                    dailyMap = new Map();
                    const techMap = new Map();
                    const addTechHours = (name, hrs) => {
                        const key = name || 'Técnico';
                        techMap.set(key, (techMap.get(key) || 0) + hrs);
                    };

                    (rdoData.reports || []).forEach(rep => {
                        const dateIso = isoDate(rep.data || rep.createdAt || rep.data_inicio || rep.dataInicio);
                        if (!dateIso) return;
                        const { normal, extra } = calcHorasReport(rep);
                        const cur = dailyMap.get(dateIso) || { normal: 0, extra: 0 };
                        cur.normal += normal;
                        cur.extra += extra;
                        dailyMap.set(dateIso, cur);

                        (rep?.maoDeObra?.padrao || []).forEach(p => {
                            const nome = p.nome || p.funcionario || p.descricao || 'Técnico';
                            addTechHours(nome, Number(p.quantidade) || 0);
                        });
                        (rep?.maoDeObra?.personalizada || []).forEach(mo => {
                            const nome = mo.nome || mo.funcionario || mo.descricao || 'Técnico';
                            addTechHours(nome, parseHoras(mo.horasTrabalhadas));
                        });
                    });
                    const dailyLabels = Array.from(dailyMap.keys()).sort();
                    const dailyNormais = dailyLabels.map(d => dailyMap.get(d).normal);
                    const dailyExtras = dailyLabels.map(d => dailyMap.get(d).extra);

                    const compareEl = document.getElementById('hoursCompareChart');
                    if (compareEl) {
                        if (hoursCompareChart) hoursCompareChart.destroy();
                        hoursCompareChart = new Chart(compareEl.getContext('2d'), {
                            type: 'bar',
                            data: { labels: ['Previstas', 'Executadas'], datasets: [{ data: [plannedTotalEq, horasExecutadasEq], backgroundColor: ['#a5b4fc', '#34d399'] }] },
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

                    // Top técnicos
                    const techTable = $('rdo-tech-table');
                    if (techTable) {
                        const rows = Array.from(techMap.entries()).sort((a, b) => b[1] - a[1]).slice(0, 5);
                        if (!rows.length) {
                            techTable.innerHTML = `<tr><td colspan="2" class="px-2 py-2 text-center text-gray-400">Sem dados</td></tr>`;
                        } else {
                            techTable.innerHTML = rows.map(([name, hrs]) => `
                                <tr>
                                    <td class="px-2 py-2 text-gray-700">${Utils.escapeHtml(name)}</td>
                                    <td class="px-2 py-2 text-right font-semibold">${hrs.toFixed(2)}h</td>
                                </tr>
                            `).join('');
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
                                const workdays = getWorkdaysArray(new Date(startStr), new Date(endStr));
                                const plannedPerDay = workdays.length ? (plannedTotalEq / workdays.length) : 0;
                                let plannedCum = 0;
                                let actualCum = 0;
                                const plannedPoints = [];
                                const actualPoints = [];
                                days.forEach(day => {
                                    const dateStr = formatDate(day);
                                    if (!dateStr) return;
                                    if (workdays.some(w => formatDate(w) === dateStr)) {
                                        plannedCum += plannedPerDay;
                                    }
                                    plannedPoints.push({ x: dateStr, y: plannedCum });
                                    const daily = dailyMap.get(dateStr);
                                    if (daily) actualCum += (daily.normal + daily.extra * EXTRA_FACTOR);
                                    actualPoints.push({ x: dateStr, y: actualCum });
                                });
                                if (hoursCurveChart) hoursCurveChart.destroy();
                                const weekendBands = (() => {
                                    const weekendDays = days.filter(d => [0, 6].includes(d.getDay()));
                                    const bands = [];
                                    let startBand = null;
                                    let endBand = null;
                                    weekendDays.forEach(d => {
                                        if (!startBand) {
                                            startBand = d;
                                            endBand = d;
                                            return;
                                        }
                                        const diff = d.getTime() - endBand.getTime();
                                        if (diff <= 24 * 60 * 60 * 1000 + 1000) {
                                            endBand = d;
                                        } else {
                                            bands.push([new Date(startBand), new Date(endBand)]);
                                            startBand = d;
                                            endBand = d;
                                        }
                                    });
                                    if (startBand) bands.push([new Date(startBand), new Date(endBand)]);
                                    return bands.map(([s, e]) => ({
                                        start: formatDate(s),
                                        end: formatDate(new Date(e.getTime() + 24 * 60 * 60 * 1000))
                                    }));
                                })();
                                hoursCurveChart = new Chart(curveEl.getContext('2d'), {
                                    type: 'line',
                                    data: {
                                        datasets: [
                                            { label: 'Horas Planejadas (PV)', data: plannedPoints, borderColor: '#9ca3af', tension: 0.3, fill: false },
                                            { label: 'Horas Reais (AV)', data: actualPoints, borderColor: '#10b981', tension: 0.3, fill: true, backgroundColor: 'rgba(16,185,129,0.1)' }
                                        ]
                                    },
                                    options: {
                                        plugins: {
                                            weekendShades: { weekends: weekendBands }
                                        },
                                        scales: {
                                            x: {
                                                type: 'time',
                                                time: { unit: 'day' },
                                                ticks: {
                                                    callback: function (val, idx, ticks) {
                                                        const d = new Date(ticks[idx].value);
                                                        const day = d.getDay();
                                                        if (day === 1) return 'Seg';
                                                        if (day === 5) return 'Sex';
                                                        return ticks[idx].label;
                                                    }
                                                }
                                            },
                                            y: { beginAtZero: true }
                                        }
                                    },
                                    plugins: [{
                                        id: 'weekendShades',
                                        beforeDraw: (chart, args, opts) => {
                                            const { ctx, chartArea, scales } = chart;
                                            if (!opts?.weekends?.length) return;
                                            ctx.save();
                                            ctx.fillStyle = 'rgba(200,200,200,0.12)';
                                            opts.weekends.forEach(range => {
                                                const start = new Date(`${range.start}T00:00:00`);
                                                const end = new Date(`${range.end || range.start}T00:00:00`);
                                                const x = scales.x.getPixelForValue(start);
                                                const next = scales.x.getPixelForValue(end);
                                                const width = Math.max(2, next - x);
                                                ctx.fillRect(x, chartArea.top, width, chartArea.bottom - chartArea.top);
                                            });
                                            ctx.restore();
                                        }
                                    }]
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
                            rdoTable.innerHTML = `<tr><td colspan="7" class="px-3 py-2 text-center text-gray-400">Sem dados RDO</td></tr>`;
                        } else {
                            rdoTable.innerHTML = reports.map(r => {
                                const dateRaw = r.data || r.createdAt || r.data_inicio || r.dataInicio;
                                const date = fmtDateBR(dateRaw);
                                const dia = weekdayLabel(dateRaw);
                                const { normal, extra } = calcHorasReport(r);
                                const qtdTecnicos = (r?.maoDeObra?.padrao?.length || 0) + (r?.maoDeObra?.personalizada?.length || 0);
                                const ht = r.horarioDeTrabalho || {};
                                const horaInicio = ht.expedienteInicio || ht.inicio || r.horaInicio || r.horarioInicio || r.inicio || '';
                                const horaFim = ht.expedienteFim || ht.fim || r.horaFim || r.horarioFim || r.fim || '';
                                const horario = (horaInicio || horaFim) ? `${Utils.escapeHtml(horaInicio || 'N/D')} - ${Utils.escapeHtml(horaFim || 'N/D')}` : 'N/D';
                                const numero = r._id ? String(r._id).slice(-8) : 'N/D';
                                return `<tr><td class="px-3 py-2">${Utils.escapeHtml(date)}</td><td class="px-3 py-2">${Utils.escapeHtml(dia)}</td><td class="px-3 py-2 text-right font-semibold">${normal.toFixed(2)}h</td><td class="px-3 py-2 text-right text-orange-700 font-semibold">${extra.toFixed(2)}h</td><td class="px-3 py-2 text-center">${qtdTecnicos || 'N/D'}</td><td class="px-3 py-2 text-center">${horario}</td><td class="px-3 py-2 text-center">${Utils.escapeHtml(numero)}</td></tr>`;
                            }).join('');
                        }
                    }
                } else {
                    safeText('kpi-horas-previstas', `${plannedTotalEq.toFixed(2)}h`);
                    safeText('kpi-horas-executadas', '0.00h');
                    safeText('kpi-horas-saldo', `${plannedTotalEq.toFixed(2)}h`);
                    safeText('kpi-custo-mao', Utils.formatCurrency(0));
                    safeText('kpi-horas-extras-total', '0.00h');
                    safeText('kpi-horas-extras-percent', '0.0%');
                    const rdoTable = $('rdo-table-body');
                    if (rdoTable) rdoTable.innerHTML = `<tr><td colspan="7" class="px-3 py-2 text-center text-gray-400">Sem dados RDO</td></tr>`;
                }

                // KPIs de horas monetários também quando não há RDO
                const horasOrcadasValor = (plannedNormais * COST_PER_HOUR) + (plannedExtras * COST_PER_OVERTIME_HOUR);
                setKpi('kpi-horas-orcadas', Utils.formatCurrency(horasOrcadasValor));
                if (!rdoData) {
                    setKpi('kpi-horas-gastas', Utils.formatCurrency(0));
                    setKpi('kpi-horas-diff', Utils.formatCurrency(horasOrcadasValor));
                    setKpi('kpi-horas-percent', '0.0%');
                }

                // KPIs combinados (Materiais + Horas)
                const horasGastasValor = rdoData ? (horasNormais * COST_PER_HOUR) + (horasExtras * COST_PER_OVERTIME_HOUR) : 0;
                const horasPercent = horasOrcadasValor > 0 ? (horasGastasValor / horasOrcadasValor) * 100 : 0;
                if (rdoData) {
                    setKpi('kpi-horas-gastas', Utils.formatCurrency(horasGastasValor));
                    setKpi('kpi-horas-diff', Utils.formatCurrency(horasOrcadasValor - horasGastasValor));
                    setKpi('kpi-horas-percent', `${horasPercent.toFixed(1)}%`);
                }
                const materiaisOrcado = resumoLocal.limite_real || 0;
                const materiaisGasto = resumoLocal.comprometido || 0;
                const combinadoOrcado = materiaisOrcado + horasOrcadasValor;
                const combinadoGasto = materiaisGasto + horasGastasValor;
                const combinadoPercent = combinadoOrcado > 0 ? (combinadoGasto / combinadoOrcado) * 100 : 0;
                const combinadoDiff = combinadoOrcado - combinadoGasto;
                setKpi('kpi-combined-total', Utils.formatCurrency(combinadoOrcado));
                setKpi('kpi-combined-gasto', Utils.formatCurrency(combinadoGasto));
                setKpi('kpi-combined-diff', Utils.formatCurrency(combinadoDiff));
                setKpi('kpi-combined-percent', `${combinadoPercent.toFixed(1)}%`);

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
                        options: {
                            plugins: {
                                legend: { position: 'right' },
                                datalabels: {
                                    display: true,
                                    color: '#0f172a',
                                    formatter: (val) => Utils.formatCurrency(val)
                                }
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
                        options: { plugins: { legend: { display: true, position: 'right' } } }
                    });

                    UIDashboard.renderCcDrilldown(ccMap);
                }

                const combinedEl = document.getElementById('combinedStackedChart');
                if (combinedEl) {
                    if (lineChartGeral) lineChartGeral.destroy();
                    lineChartGeral = new Chart(combinedEl.getContext('2d'), {
                        type: 'bar',
                        data: {
                            labels: ['Planejado', 'Executado'],
                            datasets: [
                                { label: 'Materiais', data: [resumoLocal?.limite_real || 0, resumoLocal?.comprometido || 0], backgroundColor: '#60a5fa' },
                                { label: 'Mão de Obra', data: [(plannedNormais * COST_PER_HOUR) + (plannedExtras * COST_PER_OVERTIME_HOUR), (horasNormais * COST_PER_HOUR) + (horasExtras * COST_PER_OVERTIME_HOUR)], backgroundColor: '#34d399' }
                            ]
                        },
                        options: {
                            scales: { x: { stacked: true }, y: { stacked: true, beginAtZero: true } },
                            plugins: { legend: { position: 'bottom' } }
                        }
                    });
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
        tbody.innerHTML = sorted.map(([name, val]) => {
            const perc = total > 0 ? (val / total) * 100 : 0;
            return `
            <tr>
                <td class="px-3 py-2 text-xs text-gray-700">${Utils.escapeHtml(name)}</td>
                <td class="px-3 py-2 text-xs font-semibold text-gray-900">${Utils.formatCurrency(val)}</td>
                <td class="px-3 py-2 text-xs text-gray-700">${perc.toFixed(1)}%</td>
            </tr>`;
        }).join('') + `
            <tr class="bg-gray-50 font-semibold">
                <td class="px-3 py-2 text-xs text-gray-700">Total</td>
                <td class="px-3 py-2 text-xs text-gray-900">${Utils.formatCurrency(total)}</td>
                <td class="px-3 py-2 text-xs text-gray-700">100%</td>
            </tr>
        `;
    },

    renderCalendar: (compras, rdoReports = []) => {
        const container = document.getElementById('dashboard-calendar');
        if (!container) return;

        const items = new vis.DataSet();
        let idCounter = 1;

        compras.forEach(c => {
            const obra = state.cache.obras.find(o => o.id === c.obraId);
            const obraLabel = obra?.apelido || obra?.nome_obra || 'Obra';
            const shortLabel = obraLabel.length > 15 ? obraLabel.substring(0, 15) + '...' : obraLabel;

            const normalizeStatus = (s = '') => {
                const val = (s || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '');
                if (val.includes('recebido')) return 'recebido';
                if (val.includes('comprado')) return 'comprado';
                if (val.includes('aprov')) return 'aprovado';
                if (val.includes('cot')) return 'cotacao';
                if (val.includes('nao') || val.includes('não')) return 'nao iniciado';
                return val || 'nao iniciado';
            };
            const hoje = new Date();
            hoje.setHours(0, 0, 0, 0);
            const isOverdue = c.status_compra !== 'Recebido' && c.previsao_entrega && new Date(c.previsao_entrega + 'T12:00:00') < hoje;
            let statusColor = 'bg-gray-100 text-gray-800 border-gray-300';
            const statusNorm = normalizeStatus(c.status_compra);
            if (isOverdue) statusColor = 'bg-red-100 text-red-800 border-red-300';
            else if (statusNorm === 'recebido') statusColor = 'bg-green-100 text-green-800 border-green-300';
            else if (statusNorm === 'comprado') statusColor = 'bg-blue-100 text-blue-800 border-blue-300';
            else if (statusNorm === 'aprovado') statusColor = 'bg-indigo-100 text-indigo-800 border-indigo-300';
            else if (statusNorm === 'cotacao') statusColor = 'bg-yellow-100 text-yellow-800 border-yellow-300';

            if (c.data_emissao) {
                items.add({
                    id: idCounter++,
                    content: `<b>${Utils.escapeHtml(shortLabel)}</b><br>${Utils.escapeHtml(c.status_compra || 'N/D')} · NF ${Utils.escapeHtml(c.numero_nf || 'S/N')}`,
                    start: c.data_emissao,
                    type: 'point',
                    className: `${statusColor} text-xs`
                });
            }
            if (c.previsao_entrega) {
                items.add({
                    id: idCounter++,
                    content: `<b>${Utils.escapeHtml(shortLabel)}</b><br>Prev. ${Utils.escapeHtml(c.numero_nf || 'S/N')}`,
                    start: c.previsao_entrega,
                    type: 'point',
                    className: 'bg-orange-100 text-orange-800 border-orange-300 text-xs'
                });
            }
            if (c.data_recebimento) {
                items.add({
                    id: idCounter++,
                    content: `<b>${Utils.escapeHtml(shortLabel)}</b><br>Rec. ${Utils.escapeHtml(c.numero_nf || 'S/N')}`,
                    start: c.data_recebimento,
                    type: 'point',
                    className: 'bg-emerald-100 text-emerald-800 border-emerald-300 text-xs'
                });
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
                    <button data-action="view-compra" data-id="${c.id}" class="btn-secondary btn-small" title="Visualizar">${VIEW_ICON}</button>
                    <button data-action="edit-compra" data-id="${c.id}" class="btn-secondary btn-small">Editar</button>
                </td>
            </tr>`;
            }).join('');
    }
    ,

    // Renderização do Dashboard Geral / Home
    renderDashboardGeral: async () => {
        const kpiIds = ['kpi-geral-obras', 'kpi-geral-orcamento', 'kpi-geral-Gasto', 'kpi-geral-percent', 'kpi-geral-economia', 'kpi-geral-sla', 'kpi-geral-lead', 'kpi-geral-atrasos'];
        kpiIds.forEach(id => { const el = $(id); if (el && !el.textContent) el.textContent = '-'; });

        // bind filtros (uma vez)
        if (!UIDashboard._boundGeralFilters) {
            UIDashboard._boundGeralFilters = true;
            $('dashboard-geral-period')?.addEventListener('change', () => UIDashboard.renderDashboardGeral());
            $('dashboard-geral-year')?.addEventListener('change', () => UIDashboard.renderDashboardGeral());
            $('dashboard-geral-month')?.addEventListener('change', () => UIDashboard.renderDashboardGeral());
        }

        try {
            const periodSelect = $('dashboard-geral-period');
            const period = periodSelect?.value || 'mes';
            const getPeriodStart = () => {
                const now = new Date();
                now.setHours(0, 0, 0, 0);
                if (period === 'mes') {
                    return new Date(now.getFullYear(), now.getMonth(), 1);
                }
                if (period === 'trim') {
                    return new Date(now.getFullYear(), now.getMonth() - 2, 1);
                }
                return null; // all
            };
            const startDate = getPeriodStart();

            const summary = await Data.getAlertSummary();
            const c = summary.counts || {};
            const allCompras = summary.compras || [];
            const ctx = state.currentContext;
            let filteredCompras = ctx && ctx !== '*' ? allCompras.filter(cp => cp.obraId === ctx) : allCompras;
            // filtro ano
            const yearSelect = $('dashboard-geral-year');
            const selectedYear = yearSelect?.value || 'all';
            if (selectedYear !== 'all') {
                filteredCompras = filteredCompras.filter(cp => {
                    const em = cp.data_emissao || cp.data_recebimento || cp.previsao_entrega;
                    if (!em) return false;
                    const d = new Date(em);
                    return !isNaN(d) && d.getFullYear() === Number(selectedYear);
                });
            }
            // filtro mês específico
            const monthSelect = $('dashboard-geral-month');
            const selectedMonth = monthSelect?.value || 'all';
            if (selectedMonth !== 'all') {
                const targetYear = selectedYear !== 'all' ? Number(selectedYear) : (new Date()).getFullYear();
                filteredCompras = filteredCompras.filter(cp => {
                    const em = cp.data_emissao || cp.data_recebimento || cp.previsao_entrega;
                    if (!em) return false;
                    const d = new Date(em);
                    return !isNaN(d) && d.getMonth() + 1 === Number(selectedMonth) && d.getFullYear() === targetYear;
                });
            }
            if (startDate) {
                filteredCompras = filteredCompras.filter(cp => {
                    const em = cp.data_emissao || cp.data_recebimento || cp.previsao_entrega;
                    if (!em) return false;
                    const d = new Date(em);
                    return !isNaN(d) && d >= startDate;
                });
            }
            const obras = (state.cache.obras || []).filter(o => !ctx || ctx === '*' || o.id === ctx);
            // popular combo ano
            if (yearSelect) {
                const years = new Set();
                allCompras.forEach(cp => {
                    const em = cp.data_emissao || cp.data_recebimento || cp.previsao_entrega;
                    if (!em) return;
                    const d = new Date(em);
                    if (!isNaN(d)) years.add(d.getFullYear());
                });
                const sorted = Array.from(years).sort((a, b) => b - a);
                yearSelect.innerHTML = '<option value="all">Todos</option>' + sorted.map(y => `<option value="${y}">${y}</option>`).join('');
                if (sorted.length && selectedYear === 'all') {
                    yearSelect.value = 'all';
                }
            }

            // KPIs gerais (aproximações: orçado = soma valor_orcado das obras; gasto = soma valor_total)
            let orcamentoTotal = obras.reduce((acc, o) => acc + (Number(o.valor_orcado) || 0), 0);
            let gastoTotal = filteredCompras.reduce((acc, cp) => acc + (Number(cp.valor_total) || 0), 0);
            // Se houver contexto específico, tenta usar resumo de orçamento (PV/AV)
            if (ctx && ctx !== '*') {
                try {
                    const resumoCtx = await Data.getResumoOrcamento(ctx);
                    if (resumoCtx) {
                        orcamentoTotal = resumoCtx.limite_real || resumoCtx.orcado || orcamentoTotal;
                        gastoTotal = resumoCtx.comprometido || gastoTotal;
                    }
                } catch (e) {
                    console.warn('Resumo de orçamento não disponível para contexto', e);
                }
            }
            const percent = orcamentoTotal > 0 ? (gastoTotal / orcamentoTotal) * 100 : 0;

            setKpi('kpi-geral-obras', String(obras.length));
            setKpi('kpi-geral-orcamento', Utils.formatCurrency(orcamentoTotal));
            setKpi('kpi-geral-Gasto', Utils.formatCurrency(gastoTotal));
            setKpi('kpi-geral-percent', `${percent.toFixed(1)}%`);
            setKpi('kpi-geral-economia', Utils.formatCurrency(Math.max(0, orcamentoTotal - gastoTotal)));
            setKpi('kpi-geral-atrasos', String(c.atrasados ?? '-'));

            // SLA e lead time (considera entregues)
            const entregues = filteredCompras.filter(cp => cp.data_recebimento);
            const onTime = entregues.filter(cp => {
                if (!cp.previsao_entrega) return false;
                return new Date(cp.data_recebimento) <= new Date(cp.previsao_entrega);
            }).length;
            const sla = entregues.length ? (onTime / entregues.length) * 100 : 0;
            const leadSamples = entregues.filter(cp => cp.data_emissao).map(cp => {
                const end = cp.data_recebimento;
                return (new Date(end) - new Date(cp.data_emissao)) / (1000 * 60 * 60 * 24);
            }).filter(v => v >= 0);
            const leadAvg = leadSamples.length ? (leadSamples.reduce((a, b) => a + b, 0) / leadSamples.length) : 0;
            setKpi('kpi-geral-lead', leadSamples.length ? `${leadAvg.toFixed(1)} dias` : '-');
            setKpi('kpi-geral-sla', entregues.length ? `${sla.toFixed(1)}%` : '-');

            // Diretor/Admin
            setKpi('kpi-dir-total-compras', String(c.total ?? '-'));
            setKpi('kpi-dir-atrasos', String(c.atrasados ?? '-'));
            setKpi('kpi-dir-pendente', String(c.pendente_aprovacao ?? '-'));
            setKpi('kpi-dir-cotacao', String(c.cotacao ?? '-'));

            // Comprador (status)
            const status = c.status || {};
            const naoIniciado = status['não iniciado'] || status['nao iniciado'] || 0;
            const pendente = status['pendente'] || status['pendente de aprovação'] || 0;
            const emAtraso = c.atrasados ?? 0;
            const prazoProximo = filteredCompras.filter(cp => {
                if (cp.status_compra === 'Recebido') return false;
                if (!cp.previsao_entrega) return false;
                const prev = new Date(cp.previsao_entrega + 'T12:00:00');
                const hoje = new Date(); hoje.setHours(0, 0, 0, 0);
                const diff = (prev - hoje) / (1000 * 60 * 60 * 24);
                return diff >= 0 && diff <= 3;
            }).length;
            setKpi('kpi-comp-nao-iniciado', String(naoIniciado));
            setKpi('kpi-comp-pendente', String(pendente || c.pendente_aprovacao || 0));
            setKpi('kpi-comp-atraso', String(emAtraso));
            setKpi('kpi-comp-proximo', String(prazoProximo));

            // Gráficos gerais (barras % consumido por obra)
            const obrasData = obras.map(o => {
                const spent = filteredCompras.filter(cmp => cmp.obraId === o.id).reduce((acc, cp) => acc + (Number(cp.valor_total) || 0), 0);
                const budget = Number(o.valor_orcado) || 0;
                const pct = budget > 0 ? (spent / budget) * 100 : 0;
                return { label: o.nome_obra || o.numero_os || 'Obra', pct, spent };
            }).sort((a, b) => b.pct - a.pct).slice(0, 8);

            const barEl = document.getElementById('barChartGeral');
            if (barEl) {
                if (!obrasData.length) {
                    showPlaceholder(barEl, 'Sem dados para % consumido por obra.');
                } else {
                    hidePlaceholder(barEl);
                    if (barChartGeral) barChartGeral.destroy();
                    barChartGeral = new Chart(barEl.getContext('2d'), {
                        type: 'bar',
                        data: { labels: obrasData.map(o => o.label), datasets: [{ label: '% Orçamento Consumido', data: obrasData.map(o => o.pct), backgroundColor: '#60a5fa' }] },
                        options: { scales: { y: { beginAtZero: true, max: 150 } } }
                    });
                }
            }

            // Pie natureza
            const naturezaMap = new Map();
            filteredCompras.forEach(cmp => {
                const key = cmp.natureza_compra || 'Outros';
                naturezaMap.set(key, (naturezaMap.get(key) || 0) + (Number(cmp.valor_total) || 0));
            });
            const pieEl = document.getElementById('pieChartGeral');
            if (pieEl) {
                if (!naturezaMap.size) {
                    showPlaceholder(pieEl, 'Sem dados para natureza.');
                } else {
                    hidePlaceholder(pieEl);
                    if (pieChartGeral) pieChartGeral.destroy();
                    pieChartGeral = new Chart(pieEl.getContext('2d'), {
                        type: 'pie',
                        data: {
                            labels: Array.from(naturezaMap.keys()),
                            datasets: [{ data: Array.from(naturezaMap.values()), backgroundColor: ['#3b82f6', '#10b981', '#f97316', '#ef4444', '#6366f1'] }]
                        },
                        options: { plugins: { legend: { position: 'right' } } }
                    });
                }
            }

            // Line por mês
            const monthMap = new Map();
            filteredCompras.forEach(cmp => {
                const em = cmp.data_emissao || cmp.data_recebimento || cmp.previsao_entrega;
                if (!em) return;
                const d = new Date(em);
                if (isNaN(d)) return;
                const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
                monthMap.set(key, (monthMap.get(key) || 0) + (Number(cmp.valor_total) || 0));
            });
            const months = Array.from(monthMap.keys()).sort();
            const lineEl = document.getElementById('lineChartGeral');
            if (lineEl) {
                if (!months.length) {
                    showPlaceholder(lineEl, 'Sem dados para evolução mensal.');
                } else {
                    hidePlaceholder(lineEl);
                    if (lineChartGeral) lineChartGeral.destroy();
                    lineChartGeral = new Chart(lineEl.getContext('2d'), {
                        type: 'line',
                        data: { labels: months, datasets: [{ label: 'Valor', data: months.map(m => monthMap.get(m)), borderColor: '#34d399', tension: 0.3, fill: true, backgroundColor: 'rgba(52,211,153,0.1)' }] },
                        options: { scales: { y: { beginAtZero: true } } }
                    });
                }
            }

            // Curva S Financeira (contexto obra ou agregada)
            const curveEl = document.getElementById('curveChartGeral');
            if (curveEl) {
                const buildSeries = (obraObj, comprasObra) => {
                    const obraForCurve = {
                        ...obraObj,
                        data_inicio: obraObj.data_inicio || obraObj.data_prevista_inicio,
                        data_fim: obraObj.data_fim || obraObj.data_prevista_fim,
                        compras: comprasObra
                    };
                    const pv = generatePlannedValueData(obraForCurve);
                    const av = generateActualValueData({ ...obraForCurve, compras: comprasObra });
                    return { pv, av };
                };

                if (!ctx || ctx === '*') {
                    // Agregar todas as obras
                    const pvMap = new Map();
                    const avMap = new Map();
                    obras.forEach(o => {
                        const comprasObra = filteredCompras.filter(cp => cp.obraId === o.id);
                        if (!comprasObra.length) return;
                        const { pv, av } = buildSeries(o, comprasObra);
                        pv.forEach(p => pvMap.set(p.date, (pvMap.get(p.date) || 0) + p.cumulativeCost));
                        av.forEach(a => avMap.set(a.date, (avMap.get(a.date) || 0) + a.cumulativeCost));
                    });

                    const dates = Array.from(new Set([...pvMap.keys(), ...avMap.keys()])).sort();
                    let pvCum = 0, avCum = 0;
                    const pvSeries = [], avSeries = [];
                    dates.forEach(d => {
                        pvCum = pvMap.has(d) ? pvMap.get(d) : pvCum;
                        avCum = avMap.has(d) ? avMap.get(d) : avCum;
                        pvSeries.push({ x: d, y: pvCum });
                        avSeries.push({ x: d, y: avCum });
                    });

                    if (!pvSeries.length && !avSeries.length) {
                        showPlaceholder(curveEl, 'Sem dados suficientes para Curva S agregada.');
                    } else {
                        hidePlaceholder(curveEl);
                        if (curveChartGeral) curveChartGeral.destroy();
                        curveChartGeral = new Chart(curveEl.getContext('2d'), {
                            type: 'line',
                            data: {
                                datasets: [
                                    { label: 'Valor Planejado (PV)', data: pvSeries, borderColor: '#9ca3af', tension: 0.3, fill: false },
                                    { label: 'Valor Real (AV)', data: avSeries, borderColor: '#10b981', tension: 0.3, fill: true, backgroundColor: 'rgba(16,185,129,0.1)' }
                                ]
                            },
                            options: { scales: { x: { type: 'time', time: { unit: 'day' } }, y: { beginAtZero: true } } }
                        });
                    }
                } else {
                    const obraCtx = obras.find(o => o.id === ctx);
                    if (obraCtx) {
                        const comprasObra = filteredCompras;
                        const { pv, av } = buildSeries(obraCtx, comprasObra);
                        if (!pv.length && !av.length) {
                            showPlaceholder(curveEl, 'Cadastre datas de início/fim e compras para gerar a Curva S.');
                        } else {
                            hidePlaceholder(curveEl);
                            if (curveChartGeral) curveChartGeral.destroy();
                            curveChartGeral = new Chart(curveEl.getContext('2d'), {
                                type: 'line',
                                data: {
                                    datasets: [
                                        { label: 'Valor Planejado (PV)', data: pv.map(d => ({ x: d.date, y: d.cumulativeCost })), borderColor: '#9ca3af', tension: 0.3, fill: false },
                                        { label: 'Valor Real (AV)', data: av.map(d => ({ x: d.date, y: d.cumulativeCost })), borderColor: '#10b981', tension: 0.3, fill: true, backgroundColor: 'rgba(16,185,129,0.1)' }
                                    ]
                                },
                                options: { scales: { x: { type: 'time', time: { unit: 'day' } }, y: { beginAtZero: true } } }
                            });
                        }
                    } else {
                        showPlaceholder(curveEl, 'Obra não encontrada no contexto atual.');
                    }
                }
            }

            // Obra (contexto)
            if (ctx && ctx !== '*') {
                const obraAtual = obras.find(o => o.id === ctx);
                const orc = obraAtual ? (Number(obraAtual.valor_orcado) || 0) : 0;
                const gasto = filteredCompras.reduce((acc, cp) => acc + (Number(cp.valor_total) || 0), 0);
                const saldo = orc - gasto;
                setKpi('kpi-obra-orc', Utils.formatCurrency(orc));
                setKpi('kpi-obra-gasto', Utils.formatCurrency(gasto));
                setKpi('kpi-obra-saldo', Utils.formatCurrency(saldo));
                setKpi('kpi-obra-atraso', String(emAtraso));
            }

            // Financeiro (aproximações)
            const now = new Date();
            const mesAtual = now.getMonth();
            const anoAtual = now.getFullYear();
            const gastoMes = filteredCompras.filter(cp => {
                const em = cp.data_emissao || cp.data_recebimento || cp.previsao_entrega;
                if (!em) return false;
                const d = new Date(em);
                return d.getMonth() === mesAtual && d.getFullYear() === anoAtual;
            }).reduce((acc, cp) => acc + (Number(cp.valor_total) || 0), 0);
            const nfFaltantes = filteredCompras.filter(cp => !cp.numero_nf || cp.numero_nf === 'null').length;
            const pendPag = c.pendente_aprovacao ?? 0; // aproximação
            setKpi('kpi-fin-gasto-mes', Utils.formatCurrency(gastoMes));
            setKpi('kpi-fin-pend', String(pendPag));
            setKpi('kpi-fin-nf', String(nfFaltantes));
            setKpi('kpi-fin-atraso', String(emAtraso));
        } catch (err) {
            console.warn('Falha ao renderizar Dashboard Geral:', err);
        }
    }
};

export { };
