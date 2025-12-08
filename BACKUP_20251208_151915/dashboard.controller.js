import { DashboardService } from './dashboard.service.js';
import { DashboardView } from './dashboard.view.js';
import { DashboardCharts } from './dashboard.charts.js';
import { Store } from '../../core/store.js';
import { Layout } from '../../ui/layout.js';
import { Components } from '../../ui/components.js';
import { ObrasService } from '../obras/obras.service.js';
import { RDOCharts } from '../obras/rdo.charts.js';
import { generatePlannedValue, generateActualValue } from '../../utils/sCurve.js';
import { NotificationsService } from '../notifications/notifications.service.js';
import { ReportsService } from '../reports/reports.service.js';
import { ReportsCharts } from '../reports/reports.charts.js';
import { ParetoCharts } from '../reports/pareto.charts.js';
import { Icons } from '../../ui/icons.js';
import { AlertsService } from '../notifications/alerts.service.js';
import { NotificationManager } from '../notifications/notification.manager.js';
import { WeatherService } from '../../utils/weather.js';

export const DashboardController = {
    currentFilters: {
        obraId: '',
        periodo: { start: null, end: null }
    },

    init: async () => {
        const user = Store.state.currentUser;
        if (!user) return;

        // Render skeleton/loading first
        Layout.render(Components.createLoader());

        try {
            let content = '';

            if (user.role === 'comprador') {
                // Carregar obras para o filtro
                const obras = await DashboardService.getObras();

                // Carregar stats iniciais (sem filtro ou com padrão)
                const stats = await DashboardService.getCompradorStats(DashboardController.currentFilters);

                content = DashboardView.renderComprador(stats, user, obras);
                Layout.render(content);

                // Inicializar widget de clima
                DashboardController.initWeatherWidget();

                // Carregar Timeline
                DashboardController.loadTimeline();

                // Bind actions e filtros
                DashboardController.bindRecentActions();
                DashboardController.bindFilters();

                // Notificações
                if (stats.atrasos > 0) {
                    Components.createToast(`Existem ${stats.atrasos} pedidos em atraso.`, 'warning');
                }
                await AlertsService.notifySummary(stats.alerts, user.uid, { scope: 'comprador' });
            } else if (user.role === 'obra' || user.role === 'engenheiro') {
                let obraId = user.obraPadrao || null;
                // Fallback: primeira obra cadastrada
                if (!obraId) {
                    const obras = await DashboardService.getObras?.();
                    if (obras && obras.length) {
                        obraId = obras[0].id;
                    }
                }
                const stats = await DashboardService.getObraStats(obraId);
                content = DashboardView.renderObra(stats);
                Layout.render(content);
                if (stats.atrasos > 0) {
                    Components.createToast(`Esta obra tem ${stats.atrasos} pedido(s) em atraso.`, 'warning');
                }
                await AlertsService.notifySummary(stats.alerts, user.uid, { scope: 'obra', obraId });
                setTimeout(() => {
                    if (stats.rdoData) {
                        if (stats.rdoData.horasPorDia) {
                            RDOCharts.renderHorasPorDia('chart-rdo-horas', stats.rdoData.horasPorDia);
                        } else {
                            RDOCharts.renderEmpty('chart-rdo-horas');
                        }
                        if (stats.rdoData.horasPorFuncao) {
                            RDOCharts.renderHorasPorFuncao('chart-rdo-funcao', stats.rdoData.horasPorFuncao);
                        } else {
                            RDOCharts.renderEmpty('chart-rdo-funcao');
                        }
                    } else {
                        RDOCharts.renderEmpty('chart-rdo-horas');
                        RDOCharts.renderEmpty('chart-rdo-funcao');
                    }
                }, 100);
            } else {
                // Diretor/Admin/Financeiro
                const stats = await DashboardService.getDiretorStats();
                const obras = await DashboardService.getObras?.() || await ObrasService.getObras();
                const allCompras = stats._allCompras || [];

                const budgetByObra = obras.map(o => {
                    const orcado = Number(o.orcamento || o.valor_orcado || 0);
                    const tolerancia = Number(o.tolerancia_percentual || 0);
                    const limite = orcado + (orcado * tolerancia);
                    const comprasObra = allCompras.filter(c => c.obraId === o.id);
                    const comprometido = comprasObra.reduce((sum, c) => {
                        const status = (c.status_compra || '').toLowerCase();
                        const aprovado = !c.estouro_orcamento || c.status_aprovacao === 'Aprovado';
                        const elegivel = status.includes('compr') || status.includes('receb') || status.includes('entreg') || status.includes('aprov');
                        return elegivel && aprovado ? sum + Number(c.valor_total || c.valor_estimado || 0) : sum;
                    }, 0);
                    const percent = limite > 0 ? (comprometido / limite) * 100 : 0;
                    return { id: o.id, nome: o.nome_obra || o.apelido_obra || o.id, limite, comprometido, percent };
                }).filter(item => item.limite > 0 || item.comprometido > 0).sort((a, b) => b.percent - a.percent).slice(0, 8);

                // Curva S agregada PV/AV com datas reais
                const pvSeries = [];
                const avSeries = [];
                obras.forEach(o => {
                    const pv = generatePlannedValue({
                        data_inicio: o.data_inicio || o.data_prevista_inicio,
                        data_prevista_fim: o.data_prevista_fim || o.data_fim,
                        orcamento: o.orcamento || o.valor_orcado || 0
                    });
                    pv.forEach(p => pvSeries.push(p));
                    const comprasObra = allCompras.filter(c => c.obraId === o.id);
                    const av = generateActualValue(comprasObra, {}, 0, 0);
                    av.forEach(a => avSeries.push(a));
                });
                const allDates = Array.from(new Set([...pvSeries.map(p => p.x), ...avSeries.map(a => a.x)])).sort();
                let pvCum = 0, avCum = 0;
                const plannedArr = [], actualArr = [], labels = [];
                allDates.forEach(d => {
                    const pvDay = pvSeries.filter(p => p.x === d).map(p => p.y).pop();
                    const avDay = avSeries.filter(a => a.x === d).map(a => a.y).pop();
                    if (pvDay !== undefined) pvCum = pvDay;
                    if (avDay !== undefined) avCum = avDay;
                    labels.push(d);
                    plannedArr.push(pvCum);
                    actualArr.push(avCum);
                });

                content = DashboardView.renderDiretor({ ...stats, curvaS: { planejado: plannedArr, realizado: actualArr, labels }, obras, budgetByObra });
                Layout.render(content);

                // Render Charts after DOM update
                setTimeout(() => {
                    if (plannedArr.length || actualArr.length) {
                        DashboardCharts.renderCurvaS('chart-curva', plannedArr, actualArr, labels);
                    }
                    DashboardCharts.renderStatusPie('chart-status', stats.porStatus);
                    if (stats.naturezaTotais) DashboardCharts.renderNatureza('chart-natureza-dir', stats.naturezaTotais);
                    if (stats.ccTotais) DashboardCharts.renderCentrosCusto('chart-cc-dir', stats.ccTotais);
                    if (stats.gastosPorMes) DashboardCharts.renderGastosPorMes('chart-gastos-mes', stats.gastosPorMes);
                    ReportsCharts.renderFunnelChart('chart-funnel', stats.porStatus || {});
                    if (stats.paretoAnalysis) ParetoCharts.renderParetoChart('chart-pareto', stats.paretoAnalysis);
                }, 100);
                if (stats.atrasos > 0) {
                    Components.createToast(`Há ${stats.atrasos} compras com previsão vencida.`, 'warning');
                }
                if (stats.alerts?.sem_previsao > 0) {
                    Components.createToast(`${stats.alerts.sem_previsao} pedidos sem previsão de entrega.`, 'warning');
                }
                if (stats.alerts?.pendente_aprovacao > 0) {
                    Components.createToast(`${stats.alerts.pendente_aprovacao} pedidos com aprovação pendente.`, 'warning');
                }
                await AlertsService.notifySummary(stats.alerts, user.uid, { scope: 'diretor' });
            }
        } catch (error) {
            console.error(error);
            Layout.render(`<div class="text-red-500 p-4">Erro ao carregar dashboard: ${error.message}</div>`);
        }
    },

    loadTimeline: async () => {
        const container = document.getElementById('timeline-container');
        if (!container) return;

        try {
            const timelineData = await DashboardService.getTimelineData(DashboardController.currentFilters.obraId);
            container.innerHTML = DashboardView.renderTimeline(timelineData);
        } catch (error) {
            console.error('[Dashboard] Erro timeline:', error);
            container.innerHTML = '<p class="text-xs text-alert p-2">Erro ao carregar timeline</p>';
        }
    },

    bindFilters: () => {
        const obraSelect = document.getElementById('dashboard-filter-obra');
        const periodoSelect = document.getElementById('dashboard-filter-periodo');
        const btnApply = document.getElementById('btn-apply-filters');

        if (btnApply) {
            btnApply.addEventListener('click', async () => {
                const obraId = obraSelect?.value || '';
                const periodoVal = periodoSelect?.value || '30';

                let start = null;
                let end = new Date();

                if (periodoVal === '7') {
                    start = new Date();
                    start.setDate(end.getDate() - 7);
                } else if (periodoVal === '30') {
                    start = new Date();
                    start.setDate(end.getDate() - 30);
                } else if (periodoVal === 'thisMonth') {
                    start = new Date(end.getFullYear(), end.getMonth(), 1);
                } else if (periodoVal === 'lastMonth') {
                    start = new Date(end.getFullYear(), end.getMonth() - 1, 1);
                    end = new Date(end.getFullYear(), end.getMonth(), 0);
                }

                DashboardController.currentFilters = {
                    obraId,
                    periodo: start ? { start, end } : null
                };

                // Recarregar dashboard
                DashboardController.init();
            });
        }
    },

    bindRecentActions: () => {
        document.querySelectorAll('[data-action="view"]').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;
                if (id) window.location.hash = `/compras/${id}`;
            });
        });
        document.querySelectorAll('[data-action="edit"]').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;
                if (id) window.location.hash = `/compras/${id}/editar`;
            });
        });

        // Ação: Cobrar Fornecedor (WhatsApp)
        document.querySelectorAll('[data-action="cobrar"]').forEach(btn => {
            btn.addEventListener('click', () => {
                const fornecedor = btn.dataset.fornecedor;
                const id = btn.dataset.id;
                const msg = `Olá ${fornecedor}, gostaria de uma posição sobre o pedido #${id.slice(0, 6)}.`;
                const url = `https://wa.me/?text=${encodeURIComponent(msg)}`;
                window.open(url, '_blank');
            });
        });

        // Ação: Receber (Marcar como Entregue)
        document.querySelectorAll('[data-action="receber"]').forEach(btn => {
            btn.addEventListener('click', async () => {
                const id = btn.dataset.id;
                if (!id) return;

                const ok = await NotificationManager.confirm({
                    message: 'Confirmar recebimento deste pedido? O status será alterado para Entregue.'
                });

                if (ok) {
                    try {
                        await DashboardService.markAsDelivered(id);
                        Components.createToast('Pedido marcado como Entregue! ✅');
                        DashboardController.init(); // Recarregar
                    } catch (err) {
                        Components.createToast('Erro ao atualizar: ' + err.message, 'error');
                    }
                }
            });
        });

        document.querySelectorAll('[data-action="delete"]').forEach(btn => {
            btn.addEventListener('click', async () => {
                const id = btn.dataset.id;
                if (!id) return;
                const ok = await NotificationManager.confirm({ message: 'Confirma exclusão desta compra?' });
                if (!ok) return;
                try {
                    await ReportsService.deleteCompra(id);
                    Components.createToast('Compra excluída.');
                    // remover linha da tabela
                    const tr = btn.closest('tr');
                    tr?.remove();
                } catch (err) {
                    Components.createToast('Erro ao excluir: ' + err.message, 'error');
                }
            });
        });
    },

    initWeatherWidget: async () => {
        const widget = document.getElementById('weather-widget');
        if (!widget) return;

        try {
            const location = await WeatherService.getLocation();
            const weather = await WeatherService.getWeather(location.lat, location.lon);

            if (weather) {
                const iconEl = document.getElementById('weather-icon');
                const tempEl = document.getElementById('weather-temp');
                const locEl = document.getElementById('weather-location');

                if (iconEl) iconEl.textContent = weather.icon;
                if (tempEl) tempEl.textContent = `${weather.temp}°C`;
                if (locEl) locEl.textContent = weather.location;

                widget.title = weather.description.charAt(0).toUpperCase() + weather.description.slice(1);
                widget.classList.remove('hidden');
                widget.classList.add('flex');
            }
        } catch (error) {
            console.error('[Dashboard] Erro ao carregar clima:', error);
            widget.style.display = 'none';
        }
    },

    _maybeNotify: async (alerts = {}) => {
        const user = Store.state.currentUser;
        if (!user) return;
        const todayKey = new Date().toISOString().slice(0, 10);
        const send = async (slug, title, mensagem) => {
            const key = `notif_${slug}_${todayKey}_${user.uid}`;
            if (localStorage.getItem(key)) return;
            await NotificationsService.create({
                userId: user.uid,
                tipo: slug,
                titulo: title,
                mensagem,
                link: '#/relatorios',
                prioridade: 'normal'
            });
            localStorage.setItem(key, '1');
        };
        if (alerts?.atrasados > 0) await send('atrasados', 'Pedidos atrasados', `${alerts.atrasados} pedido(s) com previsão vencida.`);
        if (alerts?.sem_previsao > 0) await send('sem_previsao', 'Pedidos sem previsão', `${alerts.sem_previsao} pedido(s) sem data de entrega.`);
        if (alerts?.pendente_aprovacao > 0) await send('pendente_aprovacao', 'Aprovação pendente', `${alerts.pendente_aprovacao} pedido(s) aguardando aprovação.`);
    }
};
