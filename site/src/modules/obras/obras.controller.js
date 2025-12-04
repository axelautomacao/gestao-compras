import { ObrasService } from './obras.service.js';
import { ObrasView } from './obras.view.js';
import { ObrasCharts } from './obras.charts.js';
import { RDOService } from './rdo.service.js';
import { RDOCharts } from './rdo.charts.js';
import { Layout } from '../../ui/layout.js';
import { Components } from '../../ui/components.js';
import { Router } from '../../core/router.js';
import { generatePlannedValue, generateActualValue } from '../../utils/sCurve.js';
import { CompradoresService } from '../cadastros/compradores.service.js';
import { FornecedoresService } from '../cadastros/fornecedores.service.js';
import { Utils } from '../../utils/formatters.js';
import { CentrosService } from '../cadastros/centros.service.js';
import { CalendarView } from './calendar.view.js';
import { setChartsTheme } from './obras.charts.js';
import { Store } from '../../core/store.js';

const parseDateSafe = (val) => {
    if (!val) return null;
    if (val instanceof Date) return val;
    if (val.toDate) return val.toDate();
    if (typeof val === 'number') return new Date(val);
    if (typeof val === 'string') {
        if (val.includes('/') && val.split('/').length === 3) {
            const [d, m, y] = val.split('/');
            const year = y.length === 2 ? `20${y}` : y;
            const dt = new Date(`${year}-${m}-${d}`);
            dt.setHours(12, 0, 0, 0);
            return dt;
        }
        const dt = new Date(val);
        dt.setHours(12, 0, 0, 0);
        return dt;
    }
    return null;
};

export const ObrasController = {
    initList: async () => {
        Layout.render(Components.createLoader());

        try {
            const obras = await ObrasService.getObras();
            Layout.render(ObrasView.renderList(obras));
        } catch (error) {
            console.error(error);
            Layout.render(`<div class="text-red-500 p-4">Erro ao carregar obras: ${error.message}</div>`);
        }
    },

    initForm: async (obraId = null) => {
        Layout.render(Components.createLoader());

        try {
            let obra = null;
            if (obraId) {
                obra = await ObrasService.getObraById(obraId);
            }

            Layout.render(ObrasView.renderForm(obra));
            ObrasController.bindFormEvents(obraId);
        } catch (error) {
            console.error(error);
            Layout.render(`<div class="text-red-500 p-4">Erro: ${error.message}</div>`);
        }
    },

    initDashboard: async (obraId) => {
        Layout.render(Components.createLoader());

        try {
            setChartsTheme(document.documentElement.classList.contains('theme-light'));
            const obra = await ObrasService.getObraById(obraId);
            if (!obra) {
                Layout.render(`<div class="text-red-500 p-4">Obra não encontrada.</div>`);
                return;
            }

            const stats = await ObrasService.getObraStats(obraId, false);
            const orcamento = Number(obra.valor_orcado || 0);
            stats.horasExtrasPrev = Number(obra.horas_extras_previstas || 0);
            if (orcamento > 0) {
                stats.economia = orcamento - stats.totalGasto;
                stats.curvaPercent = (stats.totalGasto / orcamento) * 100;
            } else {
                stats.economia = 0;
                stats.curvaPercent = 0;
            }

            const alerts = [];
            if (!obra.horas_previstas && !obra.horas_extras_previstas) {
                alerts.push('Horas da obra não informadas.');
            }
            if (!obra.data_prevista_inicio) {
                alerts.push('Data de início prevista não informada.');
            }
            if (!obra.data_prevista_fim) {
                alerts.push('Data de término prevista não informada.');
            }
            if (!orcamento) {
                alerts.push('Orçamento da obra não informado.');
            }
            if (!obra.numero_os) {
                alerts.push('Número da OS não informado; integração RDO pode falhar.');
            }
            stats.osNumber = obra.numero_os || obra.id;
            stats.alerts = alerts;

            const [compradoresList, fornecedoresList, centrosList] = await Promise.all([
                CompradoresService.list(),
                FornecedoresService.list(),
                CentrosService.list()
            ]);
            const compMap = new Map(compradoresList.map(c => [c.id, c.nome || c.email || c.id]));
            const fornMap = new Map(fornecedoresList.map(f => [f.id, f.nome || f.empresa || f.id]));
            const ccMap = new Map(centrosList.map(c => [c.id, c.nome || c.codigo || c.id]));
            stats.comprasRecentes = (stats.comprasRecentes || []).map(c => ({
                ...c,
                compradorNome: compMap.get(c.compradorId) || c.comprador || '',
                fornecedorNome: fornMap.get(c.fornecedorId) || c.fornecedor || '',
                centroCustoNome: ccMap.get(c.centroCustoId) || c.centroCustoNome || c.centro_custo || c.centroCustoId || ''
            }));
            stats.comprasCalendar = (stats.comprasCalendar || []).map(c => ({
                ...c,
                compradorNome: compMap.get(c.compradorId) || c.comprador || '',
                fornecedorNome: fornMap.get(c.fornecedorId) || c.fornecedor || '',
                centroCustoNome: ccMap.get(c.centroCustoId) || c.centroCustoNome || c.centro_custo || c.centroCustoId || ''
            }));
            let rdoCalendar = (stats.rdoData?.diarios || []).map(d => ({
                date: d.data,
                descricao_compra: 'RDO',
                fornecedorNome: 'Mão de obra',
                type: 'rdo'
            }));
            let calendarItems = [...(stats.comprasCalendar || []), ...rdoCalendar];
            const mappedCcTotais = {};
            Object.entries(stats.ccTotais || {}).forEach(([key, val]) => {
                const nome = ccMap.get(key) || key;
                mappedCcTotais[nome] = (mappedCcTotais[nome] || 0) + val;
            });
            stats.ccTotais = mappedCcTotais;
            stats.ccTable = Object.entries(mappedCcTotais).map(([nome, valor]) => ({ nome, valor }));

            Layout.render(ObrasView.renderDashboard(obra, stats));

            const updateFinancialKpis = () => {
                const total = stats.financialSummary?.total || {};
                const elOrcado = document.getElementById('kpi-total-orcado');
                const elGasto = document.getElementById('kpi-total-gasto');
                const elSaldo = document.getElementById('kpi-total-saldo-label');
                const elPercent = document.getElementById('kpi-total-percent');
                if (elOrcado) elOrcado.textContent = Utils.formatCurrency(total.planned || 0);
                if (elGasto) elGasto.textContent = Utils.formatCurrency(total.spent || stats.totalGasto || 0);
                if (elSaldo) elSaldo.textContent = `Saldo: ${Utils.formatCurrency(total.balance || 0)}`;
                if (elPercent) elPercent.textContent = `${(total.percent || 0).toFixed(1)}%`;
            };
            updateFinancialKpis();

            // Tab switching logic
            const bindTabSwitching = () => {
                const tabs = document.querySelectorAll('.obras-tab');
                const sections = document.querySelectorAll('[data-section-content]');

                tabs.forEach(tab => {
                    tab.addEventListener('click', () => {
                        const targetSection = tab.dataset.section;

                        // Update active tab
                        tabs.forEach(t => t.classList.remove('active'));
                        tab.classList.add('active');

                        // Update visible section
                        sections.forEach(s => s.classList.remove('active'));
                        const targetElement = document.querySelector(`[data-section-content="${targetSection}"]`);
                        if (targetElement) {
                            targetElement.classList.add('active');
                        }
                    });
                });
            };
            bindTabSwitching();

            const bindCompraActions = () => {
                const openModal = (compra) => {
                    const modal = document.createElement('div');
                    modal.className = 'fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4';
                    modal.innerHTML = `
                        <div class="bg-surface border border-border rounded shadow-heavy w-full max-w-2xl">
                            <div class="flex justify-between items-center px-4 py-3 border-b border-border">
                                <h3 class="text-lg font-display text-text">Compra</h3>
                                <button data-close class="text-text-muted hover:text-text">&times;</button>
                            </div>
                            <div class="p-4 space-y-3">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Obra</label>
                                        <p class="text-text">${obra.nome_obra || obra.apelido_obra || obra.id}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Status</label>
                                        <div class="mt-1">${Utils.renderStatusBadge(compra.status_compra, compra.previsao_entrega || compra.data_entrega_prevista)}</div>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Descrição</label>
                                        <p class="text-text">${compra.descricao_compra || compra.descricao || '-'}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Valor</label>
                                        <p class="text-text">${Utils.formatCurrency(compra.valor_total ?? compra.valor_estimado ?? 0)}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Fornecedor</label>
                                        <p class="text-text">${compra.fornecedorNome || compra.fornecedor || '-'}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Comprador</label>
                                        <p class="text-text">${compra.compradorNome || compra.comprador || compra.compradorId || '-'}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Prev. Entrega</label>
                                        <p class="text-text">${Utils.formatDate(compra.previsao_entrega || compra.data_entrega_prevista)}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Data Emissão</label>
                                        <p class="text-text">${Utils.formatDate(compra.data_emissao)}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Número NF</label>
                                        <p class="text-text">${compra.numero_nf || '-'}</p>
                                    </div>
                                    <div class="md:col-span-2">
                                        <label class="text-xs heading-muted uppercase">Última modificação</label>
                                        <p class="text-text">${Utils.formatLastUpdate(compra)}</p>
                                    </div>
                                </div>
                                <div class="flex justify-end gap-2">
                                    <button class="btn-secondary" data-close>Fechar</button>
                                    ${compra.id ? `<button class="btn" data-edit-id="${compra.id}">Editar</button>` : ''}
                                </div>
                            </div>
                        </div>
                    `;
                    document.body.appendChild(modal);
                    modal.querySelectorAll('[data-close]')?.forEach(btn => btn.addEventListener('click', () => modal.remove()));
                    const editBtn = modal.querySelector('[data-edit-id]');
                    if (editBtn) {
                        editBtn.addEventListener('click', () => {
                            Router.navigate(`/compras/${compra.id}/editar`);
                            modal.remove();
                        });
                    }
                };

                document.querySelectorAll('[data-action="edit-compra"]').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const id = btn.dataset.id;
                        if (id) Router.navigate(`/compras/${id}/editar`);
                    });
                });

                document.querySelectorAll('[data-action="view-compra"]').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const id = btn.dataset.id;
                        const compra = stats.comprasRecentes.find(c => c.id === id);
                        if (compra) openModal(compra);
                    });
                });
            };

            bindCompraActions();

            // Calendar navigation
            const renderCalendarSection = () => {
                const calendarWrapper = document.getElementById('calendar-wrapper');
                const timelineWrapper = document.getElementById('timeline-wrapper');
                if (calendarWrapper) calendarWrapper.innerHTML = CalendarView.render(calendarItems || stats.comprasRecentes);
                if (timelineWrapper) timelineWrapper.innerHTML = CalendarView.renderTimeline(stats.comprasCalendar || stats.comprasRecentes);
                const prev = document.getElementById('cal-prev');
                const next = document.getElementById('cal-next');
                prev?.addEventListener('click', () => {
                    CalendarView.changeMonth(-1);
                    renderCalendarSection();
                });
                next?.addEventListener('click', () => {
                    CalendarView.changeMonth(1);
                    renderCalendarSection();
                });
            };
            renderCalendarSection();

            // Função reutilizável para rerenderizar gráficos conforme o tema atual
            const renderCharts = () => {
                const isLight = document.documentElement.classList.contains('theme-light');
                setChartsTheme(isLight);

                ObrasCharts.renderCategorias('chart-categorias', stats.gastosPorCategoria);
                ObrasCharts.renderStatusObra('chart-status-obra', stats.porStatus);

                if (stats.curvaS) {
                    ObrasCharts.renderCurvaS('chart-curva-s', stats.curvaS.labels || [], stats.curvaS.planejado, stats.curvaS.realizado);
                }

                if (stats.gastosDiarios) {
                    ObrasCharts.renderGastosMensais('chart-gastos-diarios', stats.gastosDiarios);
                }

                if (stats.ccTotais) {
                    ObrasCharts.renderCentrosCusto('chart-cc', stats.ccTotais);
                }

                if (stats._pv || stats._av) {
                    ObrasCharts.renderFinancePVAV('chart-finance-pvav', stats._pv || [], stats._av || []);
                }

                if (stats.financialSummary) {
                    ObrasCharts.renderFinanceComparison('chart-finance-compare', stats.financialSummary);
                }

                if (stats.rdoData?.totalHoras > 0) {
                    RDOCharts.renderHorasNormaisExtras('chart-rdo-horas-normais-extras', stats.rdoData.horasNormaisPorDia, stats.rdoData.horasExtrasPorDia);
                    if (stats._plannedCurve && stats._executedCurve) {
                        RDOCharts.renderCurvaHoras('chart-rdo-curva-horas', stats._plannedCurve, stats._executedCurve, stats._feriados || []);
                    }
                    if (stats.rdoData.horasPorFuncao) {
                        RDOCharts.renderHorasPorFuncao('chart-rdo-funcao', stats.rdoData.horasPorFuncao);
                    }
                } else {
                    RDOCharts.renderEmpty('chart-rdo-horas-normais-extras');
                    RDOCharts.renderEmpty('chart-rdo-curva-horas');
                }
            };

            setTimeout(async () => {
                const { COST_PER_HOUR, COST_PER_OVERTIME_HOUR } = await import('../../constants/costs.js');
                const pv = generatePlannedValue({ data_inicio: obra.data_prevista_inicio, data_prevista_fim: obra.data_prevista_fim, orcamento: obra.valor_orcado });
                const av = generateActualValue(
                    stats.comprasCalendar || stats.comprasRecentes || [],
                    stats.rdoData?.horasPorDia || {},
                    COST_PER_HOUR,
                    COST_PER_OVERTIME_HOUR
                );
                stats._pv = pv;
                stats._av = av;

                try {
                    const osNumber = obra.numero_os || obra.numeroOS || obra.id;
                    if (osNumber) {
                        const rdo = await RDOService.getIntegratedDataForObra(osNumber);
                        if (rdo && rdo.reports) {
                            const processed = RDOService.processRDOData(rdo.reports);
                            if (processed) {
                                stats.rdoData = processed;
                                stats.rdoOk = true;
                                // Ajustar total de funcionarios (usar fallback por nome se id ausente)
                                if (!processed.totalFuncionarios || processed.totalFuncionarios === 0) {
                                    const nomes = new Set();
                                    Object.entries(processed.horasPorFuncao || {}).forEach(([nome]) => {
                                        nomes.add(nome);
                                    });
                                    processed.totalFuncionarios = nomes.size;
                                }
                                const setKpi = (id, val) => {
                                    const el = document.getElementById(id);
                                    if (el) el.textContent = val;
                                };
                                const horasPlanejadas = Number(obra.horas_previstas || 0);
                                const horasExtrasPrev = Number(obra.horas_extras_previstas || 0);
                                const horasTotalPlanejadas = horasPlanejadas + (1.5 * horasExtrasPrev);
                                const horasExecutadasEquiv = Number(processed.totalHoras || 0) + (0.5 * Number(processed.totalExtras || 0));
                                const saldoHoras = horasTotalPlanejadas - horasExecutadasEquiv;
                                const totalNormais = Object.values(processed.horasNormaisPorDia || {}).reduce((a, b) => a + b, 0);
                                const ultimos7Dias = Object.keys(processed.horasNormaisPorDia || {}).sort((a, b) => new Date(b) - new Date(a)).slice(0, 7);
                                const normaisUltimaSemana = ultimos7Dias.reduce((sum, key) => sum + (processed.horasNormaisPorDia[key] || 0), 0);
                                const funcionariosUltimoDia = (processed.diarios || []).slice(-1)[0]?.funcionarios || 0;
                                const consumoDia = funcionariosUltimoDia > 0 ? (funcionariosUltimoDia * 9) : (processed.mediaHorasDia || 9);
                                const diasRestantes = consumoDia > 0 ? saldoHoras / consumoDia : 0;
                                processed.ultimos7Normais = normaisUltimaSemana;
                                processed.totalNormais = totalNormais;
                                processed.saldoDias = diasRestantes;

                                setKpi('kpi-rdo-total', totalNormais.toFixed(1));
                                setKpi('kpi-rdo-media-dia', processed.mediaHorasDia.toFixed(1));
                                setKpi('kpi-rdo-func', String(processed.totalFuncionarios || 0));
                                setKpi('kpi-rdo-extras', processed.totalExtras.toFixed(1));
                                setKpi('kpi-rdo-saldo', saldoHoras.toFixed(1));
                                const elLastWeek = document.getElementById('kpi-rdo-total-sub');
                                if (elLastWeek) elLastWeek.textContent = `${normaisUltimaSemana.toFixed(1)}h gastas na última semana`;
                                const elExtraSub = document.getElementById('kpi-rdo-extras-sub');
                                if (elExtraSub) elExtraSub.textContent = `Orçado: ${horasExtrasPrev.toFixed(1)}h`;
                                const elSaldoSub = document.getElementById('kpi-rdo-saldo-sub');
                                if (elSaldoSub) elSaldoSub.textContent = `~${diasRestantes.toFixed(1)} dias`;

                                rdoCalendar = (processed.diarios || []).map(d => ({
                                    date: d.data,
                                    descricao_compra: 'RDO',
                                    fornecedorNome: 'Mão de obra',
                                    type: 'rdo'
                                }));
                                calendarItems = [...(stats.comprasCalendar || []), ...rdoCalendar];
                                renderCalendarSection();

                                if (processed.totalHoras > 0) {
                                    RDOCharts.renderHorasNormaisExtras('chart-rdo-horas-normais-extras', processed.horasNormaisPorDia, processed.horasExtrasPorDia);

                                    const plannedCurve = [];
                                    const executedCurve = [];
                                    const start = parseDateSafe(obra.data_prevista_inicio);
                                    const end = parseDateSafe(obra.data_prevista_fim);
                                    if (start && end && !Number.isNaN(start) && !Number.isNaN(end) && start <= end && horasTotalPlanejadas > 0) {
                                        const workdays = [];
                                        const cursor = new Date(start);
                                        cursor.setHours(12, 0, 0, 0);
                                        const endShifted = new Date(end);
                                        endShifted.setDate(endShifted.getDate() + 1); // atrasar término em +1 dia
                                        while (cursor <= endShifted) {
                                            const day = cursor.getDay();
                                            if (day !== 0 && day !== 6) {
                                                workdays.push(new Date(cursor));
                                            }
                                            cursor.setDate(cursor.getDate() + 1);
                                        }
                                        const perDay = workdays.length ? horasTotalPlanejadas / workdays.length : 0;
                                        let acum = 0;
                                        workdays.forEach(d => {
                                            acum += perDay;
                                            plannedCurve.push({ x: new Date(d), y: Number(acum.toFixed(2)) });
                                        });
                                    }
                                    const sortedExecDates = Object.keys(processed.horasPorDia || {}).sort((a, b) => new Date(a) - new Date(b));
                                    let acumExec = 0;
                                    sortedExecDates.forEach(d => {
                                        const dt = new Date(d);
                                        dt.setDate(dt.getDate() + 1); // atrasar 1 dia conforme solicitado
                                        dt.setHours(12, 0, 0, 0);
                                        if (Number.isNaN(dt.getTime())) return;
                                        acumExec += processed.horasPorDia[d];
                                        executedCurve.push({ x: dt, y: Number(acumExec.toFixed(2)) });
                                    });
                                    const feriados = RDOService.getHolidays ? RDOService.getHolidays() : [];
                                    stats._plannedCurve = plannedCurve;
                                    stats._executedCurve = executedCurve;
                                    stats._feriados = feriados;
                                    RDOCharts.renderCurvaHoras('chart-rdo-curva-horas', plannedCurve, executedCurve, feriados);
                                    if (processed.horasPorFuncao) {
                                        RDOCharts.renderHorasPorFuncao('chart-rdo-funcao', processed.horasPorFuncao);
                                    }
                                    RDOCharts.renderHorasStacked('chart-rdo-bateria', {
                                        plannedNormal: horasPlanejadas,
                                        plannedExtra: horasExtrasPrev * 1.5,
                                        execNormal: totalNormais,
                                        execExtra: processed.totalExtras * 1.5
                                    });
                                    if (processed.techHours) {
                                        const top = Object.entries(processed.techHours || {}).sort((a, b) => b[1] - a[1]).slice(0, 10);
                                        const extrasMap = processed.techExtraHours || {};
                                        const tbodyTech = document.querySelector('#table-rdo-tech tbody');
                                        if (tbodyTech) {
                                            tbodyTech.innerHTML = top.map(([nome, horas]) => `
                                                <tr>
                                                    <td class="px-4 py-2 text-sm text-text">${nome}</td>
                                                    <td class="px-4 py-2 text-sm text-text text-right font-display">${horas.toFixed(1)}h</td>
                                                    <td class="px-4 py-2 text-sm text-text text-right">${(extrasMap[nome] || 0).toFixed(1)}h</td>
                                                </tr>
                                            `).join('') || '<tr><td colspan="3" class="px-4 py-4 text-center heading-muted">Sem dados</td></tr>';
                                        }
                                    }
                                } else {
                                    RDOCharts.renderEmpty('chart-rdo-horas-normais-extras');
                                    RDOCharts.renderEmpty('chart-rdo-curva-horas');
                                }

                                // Preencher tabela RDO
                                const tbody = document.querySelector('#table-rdo tbody');
                                if (tbody) {
                                    const diarios = processed.diarios || [];
                                    if (!diarios.length) {
                                        tbody.innerHTML = '<tr><td colspan="6" class="px-4 py-4 text-center heading-muted">Sem dados</td></tr>';
                                    } else {
                                        const escapeHtml = (str = '') => String(str)
                                            .replace(/&/g, '&amp;')
                                            .replace(/</g, '&lt;')
                                            .replace(/>/g, '&gt;')
                                            .replace(/"/g, '&quot;')
                                            .replace(/'/g, '&#39;');

                                        const parseOcorrencias = (raw) => {
                                            if (!raw) return [];
                                            if (Array.isArray(raw)) return raw;
                                            const text = String(raw).trim();
                                            if (!text) return [];
                                            try {
                                                const parsed = JSON.parse(text);
                                                if (Array.isArray(parsed)) return parsed;
                                                if (parsed && typeof parsed === 'object') return [parsed];
                                            } catch (err) {
                                                // ignore JSON parse errors; fallback below
                                            }
                                            const parts = text.split(/;\s*|\n+/).map(p => p.trim()).filter(Boolean);
                                            if (parts.length) return parts;
                                            return [text];
                                        };

                                        const renderOcorrencias = (raw) => {
                                            const list = parseOcorrencias(raw);
                                            if (!list.length) {
                                                return '<p class="text-sm text-text-muted">Sem detalhes registrados.</p>';
                                            }

                                            return list.map((item) => {
                                                if (typeof item === 'string') {
                                                    return `
                                                        <div class="rounded border border-border bg-canvas p-3 space-y-1">
                                                            <p class="text-sm text-text whitespace-pre-wrap">${escapeHtml(item)}</p>
                                                        </div>
                                                    `;
                                                }
                                                const descricao = item.descricao || item.title || JSON.stringify(item);
                                                const horario = item.horario
                                                    ? `${item.horario.inicio || ''}${item.horario.fim ? ` - ${item.horario.fim}` : ''}${item.horario.total ? ` (${item.horario.total})` : item.horario.descricao ? ` (${item.horario.descricao})` : ''}`.trim()
                                                    : '';
                                                const tags = Array.isArray(item.tags)
                                                    ? item.tags.map(t => t.descricao || t.nome || t).filter(Boolean).join(', ')
                                                    : (typeof item.tags === 'string' ? item.tags : '');
                                                const tarefa = item.tarefa?.descricao || item.tarefa?.nome || '';
                                                const extraInfo = [horario && `Horário: ${horario}`, tags && `Tags: ${tags}`, tarefa && `Tarefa: ${tarefa}`].filter(Boolean);

                                                return `
                                                    <div class="rounded border border-border bg-canvas p-3 space-y-1">
                                                        <p class="text-sm font-display text-text">${escapeHtml(descricao)}</p>
                                                        ${extraInfo.length ? `<p class="text-xs text-text-muted">${escapeHtml(extraInfo.join(' • '))}</p>` : ''}
                                                    </div>
                                                `;
                                            }).join('');
                                        };

                                        tbody.innerHTML = diarios.map(item => {
                                            const rawOcorr = item.ocorrenciaTexto;
                                            const ocorrStr = typeof rawOcorr === 'string'
                                                ? rawOcorr
                                                : rawOcorr
                                                    ? JSON.stringify(rawOcorr, null, 2)
                                                    : '';
                                            const ocorrTxt = ocorrStr ? encodeURIComponent(ocorrStr) : '';
                                            return `
                                            <tr>
                                                <td class="px-2 py-2 text-center text-sm">
                                                    ${item.hasOcorrencia ? `<button class="text-alert underline" data-ocorrencia="${ocorrTxt}" title="Ocorrência registrada">&#9888;</button>` : ''}
                                                </td>
                                                <td class="px-3 py-2 text-sm text-text">${(() => { const d = new Date(item.data); d.setDate(d.getDate() - 1); return d.toLocaleDateString('pt-BR'); })()}</td>
                                                <td class="px-3 py-2 text-sm text-text text-right">${item.horasNormais.toFixed(1)}h</td>
                                                <td class="px-3 py-2 text-sm text-text text-right">${item.horasExtras.toFixed(1)}h</td>
                                                <td class="px-3 py-2 text-sm text-text text-right font-display">${item.total.toFixed(1)}h</td>
                                                <td class="px-3 py-2 text-sm text-text text-right">${item.funcionarios}</td>
                                            </tr>
                                            `;
                                        }).join('');

                                        tbody.querySelectorAll('[data-ocorrencia]').forEach(btn => {
                                            btn.addEventListener('click', () => {
                                                const encoded = btn.getAttribute('data-ocorrencia') || '';
                                                const texto = encoded ? decodeURIComponent(encoded) : 'Sem detalhes';
                                                const modal = document.createElement('div');
                                                modal.className = 'fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4';
                                                modal.innerHTML = `
                                                    <div class="bg-surface border border-border rounded shadow-heavy w-full max-w-lg">
                                                        <div class="flex justify-between items-center px-4 py-3 border-b border-border">
                                                            <h3 class="text-lg font-display text-text">Ocorrência do RDO</h3>
                                                            <button data-close class="text-text-muted hover:text-text">&times;</button>
                                                        </div>
                                                        <div class="p-4 space-y-3" style="max-height:70vh; overflow-y:auto;">
                                                            ${renderOcorrencias(texto)}
                                                            <div class="flex justify-end">
                                                                <button class="btn-secondary" data-close>Fechar</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                `;
                                                document.body.appendChild(modal);
                                                modal.querySelectorAll('[data-close]')?.forEach(el => el.addEventListener('click', () => modal.remove()));
                                            });
                                        });
                                    }
                                }
                            }
                        } else {
                            stats.rdoData = stats.rdoData || { totalHoras: 0, totalExtras: 0, mediaHorasDia: 0, mediaFuncionariosDia: 0, totalFuncionarios: 0 };
                            RDOCharts.renderEmpty('chart-rdo-horas-normais-extras');
                            RDOCharts.renderEmpty('chart-rdo-curva-horas');
                        }
                    }
                } catch (err) {
                    console.warn('Erro ao carregar dados RDO (legacy):', err?.message || err);
                    stats.rdoData = stats.rdoData || { totalHoras: 0, totalExtras: 0, mediaHorasDia: 0, mediaFuncionariosDia: 0, totalFuncionarios: 0 };
                    RDOCharts.renderEmpty('chart-rdo-horas-normais-extras');
                    RDOCharts.renderEmpty('chart-rdo-curva-horas');
                }

                // Renderizar ou rerenderizar tudo (inclui PVxAV) com o tema atual
                try {
                    const summary = await ObrasService.calculateFinancialSummary(
                        obra.id,
                        stats.comprasCalendar || stats.comprasRecentes || [],
                        stats.rdoData || null
                    );
                    stats.financialSummary = summary;
                    if (summary?.total) {
                        stats.totalGasto = summary.total.spent || 0;
                        stats.economia = (summary.total.planned || 0) - (summary.total.spent || 0);
                        stats.curvaPercent = summary.total.planned > 0 ? (summary.total.spent / summary.total.planned) * 100 : 0;
                    }
                    if (summary) {
                        Object.assign(stats, {
                            totalPlanned: summary.totalPlanned,
                            totalSpent: summary.totalSpent,
                            totalBalance: summary.totalBalance,
                            totalPercent: summary.totalPercent,
                            materialsPlanned: summary.materialsPlanned,
                            materialsSpent: summary.materialsSpent,
                            materialsBalance: summary.materialsBalance,
                            materialsPercent: summary.materialsPercent,
                            laborPlanned: summary.laborPlanned,
                            laborSpent: summary.laborSpent,
                            laborBalance: summary.laborBalance,
                            laborPercent: summary.laborPercent,
                            horasNormaisPrevistas: summary.horasNormaisPrevistas,
                            horasExtrasPrevistas: summary.horasExtrasPrevistas,
                            horasNormaisExecutadas: summary.horasNormaisExecutadas,
                            horasExtrasExecutadas: summary.horasExtrasExecutadas,
                            horasPrevistasEq: summary.horasPrevistasEq,
                            horasExecutadasEq: summary.horasExecutadasEq,
                            saldoHorasEq: summary.saldoHorasEq,
                            percentExtrasNormais: summary.percentExtrasNormais
                        });
                    }
                } catch (err) {
                    console.warn('Erro ao calcular resumo financeiro', err);
                }
                updateFinancialKpis();
                renderCharts();
            }, 100);

            // Rerenderizar os gráficos ao trocar de tema sem precisar recarregar
            Store.subscribe((state) => {
                if (state?.currentTheme) {
                    // aguarda o DOM aplicar as classes do tema antes de redesenhar
                    requestAnimationFrame(() => {
                        setTimeout(renderCharts, 0);
                    });
                }
            });

        } catch (error) {
            console.error(error);
            Layout.render(`<div class="text-red-500 p-4">Erro: ${error.message}</div>`);
        }
    },

    bindFormEvents: (obraId) => {
        const form = document.getElementById('form-obra');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = document.getElementById('btn-submit');

            try {
                btn.disabled = true;
                btn.innerHTML = Components.createLoader();

                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());

                data.valor_orcado = data.valor_orcado ? Number(data.valor_orcado) : 0;
                data.tolerancia_percentual = data.tolerancia_percentual ? Number(data.tolerancia_percentual) / 100 : 0;
                data.valor_deslocamento_km = data.valor_deslocamento_km ? Number(data.valor_deslocamento_km) : 0;
                data.horas_previstas = data.horas_previstas ? Number(data.horas_previstas) : 0;
                data.horas_extras_previstas = data.horas_extras_previstas ? Number(data.horas_extras_previstas) : 0;
                data.qtd_refeicoes = data.qtd_refeicoes ? Number(data.qtd_refeicoes) : 0;
                data.qtd_hospedagens = data.qtd_hospedagens ? Number(data.qtd_hospedagens) : 0;
                data.is_obra_filha = form.is_obra_filha.checked;

                if (obraId) {
                    await ObrasService.updateObra(obraId, data);
                    Components.createToast('Obra atualizada com sucesso!');
                } else {
                    await ObrasService.createObra(data);
                    Components.createToast('Obra criada com sucesso!');
                }

                Router.navigate('/obras');

            } catch (error) {
                console.error(error);
                Components.createToast('Erro ao salvar obra: ' + error.message, 'error');
                btn.disabled = false;
                btn.innerHTML = `<span>${obraId ? 'Salvar Alterações' : 'Criar Obra'}</span>`;
            }
        });
    }
};




