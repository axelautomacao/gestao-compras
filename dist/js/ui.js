import { state } from './state.js';
import { Utils } from './utils.js';
import { Data } from './data.js';
import { NotificationManager } from './notification-manager.js';
import { UIDashboard } from './ui-dashboard.js';
import { UIForms } from './ui-forms.js';
import { UIReports } from './ui-reports.js';

// --- Mapeamento de DOM ---
const $ = (id) => document.getElementById(id);

// --- Variáveis de UI ---
const navigation = $('navigation');
const pages = document.querySelectorAll('.page');
const toast = $('toast');
const toastMessage = $('toast-message');
const confirmModal = $('confirmModal');
const pdfModal = $('pdfModal');
const authModal = $('authModal');

const obraEditModal = $('obraEditModal');
const compraEditModal = $('compraEditModal');
const compradorEditModal = $('compradorEditModal');
const fornecedorEditModal = $('fornecedorEditModal');
const centroCustoEditModal = $('centroCustoEditModal');
const contextSelect = $('context-obra-select');
const VIEW_ICON = `<svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" /></svg>`;

// --- Objeto UI ---
export const UI = {
    ...UIDashboard,
    ...UIForms,
    ...UIReports,

    showCompraDetails: async (compraId) => {
        // Aproveita o modal de edição para visualizar (modo leitura)
        await UIForms.showCompraEditModal(compraId, true);
    },

    handleCalendarFilterChange: () => {
        if (state.currentObraId) {
            UIDashboard.renderDashboardStats(state.currentObraId);
        }
    },

    shiftCalendarWindow: () => {
        if (state.currentObraId) {
            UIDashboard.renderDashboardStats(state.currentObraId);
        }
    },

    // (Item 3): Lógica do Tema
    initTheme: () => {
        const theme = localStorage.getItem('theme') || 'system';
        const select = $('select-theme');
        if (select) {
            select.value = theme;
        }
        UI.applyTheme(theme);
    },

    applyTheme: (theme) => {
        if (theme === 'system') {
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.classList.toggle('dark', systemPrefersDark);
        } else {
            document.documentElement.classList.toggle('dark', theme === 'dark');
        }
        localStorage.setItem('theme', theme);
    },

    // (Item 1 e 2): Nova Navegação
    renderNav: () => {
        const role = state.currentUser?.role || 'obra';

        // Apenas as roles efetivamente permitidas (admin herda tudo)
        const roles = role === 'administrador'
            ? ['administrador', 'diretor', 'financeiro', 'comprador', 'obra']
            : [role];

        const allNavButtons = [
            { id: 'dashboard-geral', label: 'Dashboard Geral', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3M3.75 3l-1.5 1.5M3.75 3h16.5M12 3c0 1.657-1.343 3-3 3S6 4.657 6 3m6 0c0 1.657 1.343 3 3 3s3-1.343 3-3m-3.75 6.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>`, roles: ['diretor', 'financeiro'] },
            { id: 'dashboard', label: 'Dashboard p/ Obra', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>`, roles: ['diretor', 'comprador', 'obra', 'financeiro'] },
            { id: 'registro', label: 'Registrar Compra', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.5 2.5m2.5-2.5l-2.828-2.828M10.5 21.672L9.142 16.6m0 0l2.5 2.5m-2.5-2.5l2.828-2.828m0 0l-2.828 2.828m0 0L6.32 19.34m0 0l.928.928M3.75 21V9.75A2.25 2.25 0 016 7.5h12A2.25 2.25 0 0120.25 9.75V21M3.75 21H6m14.25 0H18m0 0l-2.25-2.25M3.75 21l-2.25-2.25M12 11.25V15" /></svg>`, roles: ['diretor', 'comprador'] },
            { id: 'relatorio-compras', label: 'Compras', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>`, roles: ['diretor', 'comprador', 'financeiro'] },
            { id: 'relatorios-fornecedor', label: 'Rel. Fornecedor', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-4.682 2.72a.75.75 0 01-.727 0l-4.682-2.72a3 3 0 01-4.682 2.72 9.094 9.094 0 013.741.479m4.682-2.72a9.094 9.094 0 013.741-.479m0 0a48.102 48.102 0 00-3.741-.479m-4.682 2.72c.52.304 1.076.552 1.67.727m-1.67-.727a48.105 48.105 0 01-3.741.479m0 0c-.596.343-1.22.61-1.871.791m0 0a9.094 9.094 0 01-3.741-.479m0 0c.596.343 1.22.61 1.871.791M12 12.75a3 3 0 100-6 3 3 0 000 6z" /></svg>`, roles: ['diretor', 'comprador', 'financeiro'] },

            // (Item 1): Links de Cadastros Separados
            { id: 'separator', type: 'separator', roles: ['diretor'] }, // Separador visual
            { id: 'cadastro-obras', label: 'Cadastrar Obras', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-1.5l-2.625 2.625a.375.375 0 01-.53 0l-2.625-2.625m0-7.5l2.625 2.625a.375.375 0 010 .53l-2.625 2.625m7.5-3l2.625 2.625a.375.375 0 010 .53l-2.625 2.625M15 12l-2.625 2.625a.375.375 0 01-.53 0L9.25 12M4.5 8.25l2.625 2.625a.375.375 0 010 .53L4.5 14.25" /></svg>`, roles: ['diretor', 'comprador', 'obra'] },
            { id: 'cadastro-compradores', label: 'Cad. Compradores', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>`, roles: ['diretor'] },
            { id: 'cadastro-fornecedores', label: 'Cad. Fornecedores', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-6 0V6a1.5 1.5 0 013 0v12.75m3-12.75V6a1.5 1.5 0 013 0v12.75m-3-12.75h.008v.008H12v-.008z" /></svg>`, roles: ['diretor'] },
            { id: 'cadastro-centros-custo', label: 'Cad. Centros Custo', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.75A.75.75 0 013 4.5h.75m0 0h.75A.75.75 0 014.5 6v.75m0 0v.75A.75.75 0 013.75 8.25h-.75m0 0H3A.75.75 0 012.25 7.5v-.75M6 15V7.5a2.25 2.25 0 012.25-2.25h3.75a2.25 2.25 0 012.25 2.25V15m-6 0h6m-6 0v6A2.25 2.25 0 008.25 22.5h7.5A2.25 2.25 0 0018 21V15m-6 0h6" /></svg>`, roles: ['diretor'] },
        ];

        // Botão de Configurações (Item 2)
        const settingsButton = { id: 'configuracoes', label: 'Configurações', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-1.003 1.11-1.226l.28-.1c.792-.286 1.663.111 1.95.898l.04.1c.09.542.56 1.003 1.11 1.226l.28.1c.792.286 1.663-.111 1.95-.898l.04-.1c.287-.787 1.158-1.184 1.95-.898l.28.1c.548.223 1.02.684 1.11 1.226l.04.242c.287.787-.111 1.663-.898 1.95l-.1.04c-.548.223-1.02.684-1.11 1.226l-.04.242c-.287.787.111 1.663.898 1.95l.1.04c.787.287 1.184 1.158.898 1.95l-.1.28c-.223.548-.684 1.02-1.226 1.11l-.242.04c-.787.287-1.663-.111-1.95-.898l-.04-.1c-.223-.548-.684-1.02-1.226-1.11l-.242-.04c-.787-.287-1.663.111-1.95-.898l-.04.1c-.287.787-1.158 1.184-1.95-.898l-.28-.1c-.548-.223-1.02-.684-1.11-1.226l-.04-.242c-.287-.787.111-1.663.898 1.95l.1-.04c.548-.223 1.02.684 1.11-1.226l.04-.242c.287-.787-.111-1.663-.898-1.95l-.1-.04c-.787-.287-1.184-1.158-.898-1.95l.1-.28c.223-.548.684-1.02-1.226-1.11l.242-.04c.787-.287 1.663.111 1.95.898l.04.1c.223.548.684 1.02 1.226 1.11l.242.04c.787.287 1.663.111 1.95-.898l.04-.1c.287-.787 1.158-1.184 1.95-.898l.28.1c.548-.223 1.02.684 1.11 1.226l.04.242zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" /></svg>`, roles: ['diretor', 'comprador', 'obra', 'financeiro'] };

        // Filtra os botões principais
        const navButtons = allNavButtons.filter(btn => {
            if (btn.type === 'separator') return roles.includes('diretor');
            return btn.roles.some(r => roles.includes(r));
        });

        // Adiciona o botão de Configurações no final
        navigation.innerHTML = navButtons.map(btn => {
            if (btn.type === 'separator') {
                return '<hr class="border-gray-700 my-2">';
            }
            const isActive = state.currentPage === btn.id;
            const classes = isActive ? 'nav-link active' : 'nav-link inactive';
            return `<button data-page="${btn.id}" class="${classes}">${btn.icon}<span>${btn.label}</span></button>`;
        }).join('')
            + '<div class="flex-grow"></div>' // Espaçador
            + `<button data-page="${settingsButton.id}" class="${state.currentPage === settingsButton.id ? 'nav-link active' : 'nav-link inactive'}">${settingsButton.icon}<span>${settingsButton.label}</span></button>`;
    },

    // (Item 1 e 2): Lida com as novas páginas
    showPage: (pageId) => {
        const targetPage = document.getElementById(`page-${pageId}`);
        const safePageId = targetPage ? pageId : 'dashboard-geral';

        if (state.currentPage !== safePageId) {
            state.previousPage = state.currentPage;
        }

        state.currentPage = safePageId;
        pages.forEach(page => {
            const isActive = page.id === `page-${safePageId}`;
            page.classList.toggle('active', isActive);
            page.style.display = isActive ? 'block' : 'none';
        });
        UI.renderNav();

        // Limpa o listener de dashboard da obra se sairmos da página
        if (safePageId !== 'dashboard' && state.listeners.dashboardCompras) {
            state.listeners.dashboardCompras(); // Executa a função de unsubscribe
            state.listeners.dashboardCompras = null;
        }

        if (safePageId !== 'dashboard') {
            const refreshBtn = $('btn-dashboard-refresh');
            const analysisTitle = $('dashboard-analysis-title');
            const editBtn = $('btn-dashboard-edit');
            refreshBtn?.classList.add('hidden');
            analysisTitle?.classList.add('hidden');
            editBtn?.classList.add('hidden');
        }

        if (safePageId !== 'registro' && safePageId !== 'relatorio-compras') {
            state.currentOrcamentoResumo = null;
        }

        // Remove o "Voltar" das novas páginas de cadastro
        const voltarBtnWrapper = $('cadastros-voltar-btn-wrapper');
        if (voltarBtnWrapper) {
            voltarBtnWrapper.classList.add('hidden');
        }

        // Funções de renderização de página
        if (safePageId === 'dashboard-geral') UI.renderDashboardGeral();
        if (safePageId === 'dashboard') {
            UI.updateDashboardObraList();
            if (state.currentObraId) {
                UI.renderDashboardStats(state.currentObraId);
            }
        }

        if (safePageId === 'registro') UI.renderRegistroPage();
        if (safePageId === 'relatorio-compras') UI.renderRelatorioComprasPage();
        if (safePageId === 'relatorios-fornecedor') UI.renderRelatoriosFornecedorPage();

        // (Item 1): Renderiza as novas páginas
        if (safePageId === 'cadastro-obras') UI.renderObrasPage(); // Reutiliza a função
        if (safePageId === 'cadastro-compradores') UI.refreshCadastroLists();
        if (safePageId === 'cadastro-fornecedores') UI.refreshCadastroLists();
        if (safePageId === 'cadastro-centros-custo') UI.refreshCadastroLists();

        // (Item 2): Renderiza a página de Configurações
        if (safePageId === 'configuracoes') {
            UI.renderConfiguracoesPage();
        }
    },

    updateUIForRole: () => {
        const role = state.currentUser?.role || 'obra';

        document.querySelectorAll('.protected-role').forEach(el => el.style.display = 'none');

        document.querySelectorAll(`[data-role-show]`).forEach(el => {
            const roles = el.dataset.roleShow.split(' ');
            if (role === 'administrador' || roles.includes(role)) {
                el.style.display = '';
            } else {
                el.style.display = 'none';
            }
        });

        document.querySelectorAll(`[data-role-field]`).forEach(el => {
            const roles = el.dataset.roleField.split(' ');
            el.disabled = !(role === 'administrador' || roles.includes(role));
        });

        if (state.currentUser) {
            $('user-info').textContent = `${state.currentUser.nome} (${state.currentUser.role})`;
            $('user-info').title = state.currentUser.email;
            $('main-layout').classList.remove('hidden');
        } else {
            $('main-layout').classList.add('hidden');
        }

        UI.renderNav();
        UI.populateContextSelector();

        const nameTop = $('user-name-top');
        const roleTop = $('user-role-top');
        if (nameTop) nameTop.textContent = state.currentUser?.nome || 'Usuário';
        if (roleTop) roleTop.textContent = state.currentUser?.role || '-';
    },

    // Configurações (Notificações e Usuários)
    getDefaultNotificationPrefs: () => ({
        channels: { toast: true, email: false, push: false },
        events: { atraso: true, sla: true, orcamento: true, rdo: false },
        thresholds: { diasAtraso: 1, percentGasto: 90 },
        frequency: 'imediato'
    }),

    loadNotificationPrefs: () => {
        if (!state.notificationPrefs) {
            const raw = localStorage.getItem('axel_notif_prefs');
            if (raw) {
                try {
                    state.notificationPrefs = JSON.parse(raw);
                } catch {
                    state.notificationPrefs = UI.getDefaultNotificationPrefs();
                }
            } else {
                state.notificationPrefs = UI.getDefaultNotificationPrefs();
            }
        }
        return state.notificationPrefs;
    },

    saveNotificationPrefs: (prefs) => {
        state.notificationPrefs = prefs;
        localStorage.setItem('axel_notif_prefs', JSON.stringify(prefs));
    },

    ensureNotificationPrefs: async () => {
        const defaults = UI.getDefaultNotificationPrefs();
        let prefs = UI.loadNotificationPrefs();
        if (state.currentUser?.uid) {
            try {
                const remote = await Data.getNotificationPrefs(state.currentUser.uid);
                if (remote) {
                    prefs = remote;
                } else {
                    await Data.saveNotificationPrefs(state.currentUser.uid, prefs || defaults);
                }
            } catch (err) {
                console.warn('Não foi possível carregar/salvar prefs remotas:', err);
            }
        }
        state.notificationPrefs = prefs || defaults;
        UI.saveNotificationPrefs(state.notificationPrefs);
    },

    renderNotificationForm: () => {
        const prefs = UI.loadNotificationPrefs();
        const setChecked = (id, val) => { const el = $(id); if (el) el.checked = !!val; };
        setChecked('notif-channel-toast', prefs.channels.toast);
        setChecked('notif-channel-email', prefs.channels.email);
        setChecked('notif-channel-push', prefs.channels.push);
        setChecked('notif-event-atraso', prefs.events.atraso);
        setChecked('notif-event-sla', prefs.events.sla);
        setChecked('notif-event-orcamento', prefs.events.orcamento);
        setChecked('notif-event-rdo', prefs.events.rdo);
        const dias = $('notif-threshold-atraso');
        const perc = $('notif-threshold-percent');
        if (dias) dias.value = prefs.thresholds.diasAtraso;
        if (perc) perc.value = prefs.thresholds.percentGasto;
        const freq = $('notif-frequency');
        if (freq) freq.value = prefs.frequency;
    },

    bindNotificationHandlers: () => {
        $('notif-save-btn')?.addEventListener('click', async () => {
            const prefs = {
                channels: {
                    toast: $('notif-channel-toast')?.checked || false,
                    email: $('notif-channel-email')?.checked || false,
                    push: $('notif-channel-push')?.checked || false
                },
                events: {
                    atraso: $('notif-event-atraso')?.checked || false,
                    sla: $('notif-event-sla')?.checked || false,
                    orcamento: $('notif-event-orcamento')?.checked || false,
                    rdo: $('notif-event-rdo')?.checked || false
                },
                thresholds: {
                    diasAtraso: Number($('notif-threshold-atraso')?.value || 1),
                    percentGasto: Number($('notif-threshold-percent')?.value || 90)
                },
                frequency: $('notif-frequency')?.value || 'imediato'
            };
            try {
                if (state.currentUser?.uid) {
                    await Data.saveNotificationPrefs(state.currentUser.uid, prefs);
                }
                UI.saveNotificationPrefs(prefs);
                UI.showToast('Preferências de notificação salvas.', 'success', 2500);
            } catch (err) {
                console.error('Erro ao salvar prefs remotas', err);
                UI.showToast('Não foi possível salvar as preferências (Firestore).', 'error', 3000);
            }
        });

        $('notif-test-btn')?.addEventListener('click', () => {
            NotificationManager.show('Teste de notificação: canal ativo.', 'info', 3000);
        });

        $('notif-reset-btn')?.addEventListener('click', () => {
            const defaults = UI.getDefaultNotificationPrefs();
            UI.saveNotificationPrefs(defaults);
            UI.renderNotificationForm();
            UI.showToast('Preferências resetadas para o padrão.', 'info', 2500);
        });
    },

    renderUsersTable: () => {
        const tbody = $('config-users-body');
        if (!tbody) return;
        const users = state.usersCache?.length ? state.usersCache : (state.currentUser ? [state.currentUser] : []);
        if (!users.length) {
            tbody.innerHTML = `<tr><td colspan="4" class="px-3 py-2 text-center text-gray-400">Nenhum usuário cadastrado.</td></tr>`;
            return;
        }
        tbody.innerHTML = users.map(u => `
            <tr>
                <td class="px-3 py-2 text-sm text-gray-900">${Utils.escapeHtml(u.nome || 'Usuário')}</td>
                <td class="px-3 py-2 text-sm text-gray-600">${Utils.escapeHtml(u.email || '')}</td>
                <td class="px-3 py-2 text-sm text-gray-600">${Utils.escapeHtml(u.role || 'obra')}</td>
                <td class="px-3 py-2 text-sm text-right">
                    <button class="btn-secondary btn-small" data-action="edit-user" data-id="${Utils.escapeHtml(u.uid || u.id || '')}">Editar</button>
                    <button class="btn-secondary btn-small" data-action="delete-user" data-id="${Utils.escapeHtml(u.uid || u.id || '')}">Excluir</button>
                </td>
            </tr>
        `).join('');
    },

    bindUserConfigHandlers: () => {
        $('config-add-user')?.addEventListener('click', () => {
            UI.openUserModal(null);
        });
        $('config-refresh-users')?.addEventListener('click', async () => {
            await UI.reloadUsers();
        });
        $('config-users-body')?.addEventListener('click', async (e) => {
            const btn = e.target.closest('button[data-action]');
            if (!btn) return;
            const id = btn.dataset.id;
            if (!id) return;
            const user = state.usersCache.find(u => (u.uid || u.id) === id);
            if (btn.dataset.action === 'edit-user') {
                UI.openUserModal(user || null);
            } else if (btn.dataset.action === 'delete-user') {
                await UI.handleDeleteUser(user || { id });
            }
        });

        $('btnUserModalClose')?.addEventListener('click', UI.closeUserModal);
        $('btnUserCancel')?.addEventListener('click', UI.closeUserModal);
        $('form-user-modal')?.addEventListener('submit', UI.handleSaveUser);
        $('btnUserDelete')?.addEventListener('click', async () => {
            const id = $('user-id')?.value || $('user-uid')?.value;
            const user = state.usersCache.find(u => (u.uid || u.id) === id);
            await UI.handleDeleteUser(user || { id });
        });
    },

    renderConfiguracoesPage: async () => {
        await UI.ensureNotificationPrefs();
        UI.renderNotificationForm();
        UI.bindNotificationHandlers();

        // Carregar usuários (admin/diretor)
        const role = state.currentUser?.role || '';
        if (role === 'administrador' || role === 'diretor') {
            try {
                state.usersCache = await Data.listUsers();
            } catch (err) {
                console.warn('Não foi possível carregar usuários:', err);
                state.usersCache = state.usersCache || [];
            }
        }
        UI.renderUsersTable();
        UI.bindUserConfigHandlers();
    },

    reloadUsers: async () => {
        const role = state.currentUser?.role || '';
        if (role === 'administrador' || role === 'diretor') {
            try {
                state.usersCache = await Data.listUsers();
            } catch (err) {
                UI.showToast('Não foi possível carregar usuários.', 'error', 3000);
            }
        }
        UI.renderUsersTable();
    },

    openUserModal: (user) => {
        const dlg = document.getElementById('userModal');
        if (!dlg) return;
        const obras = state.cache.obras || [];
        const obraSelect = $('user-obra');
        if (obraSelect) {
            obraSelect.innerHTML = `<option value=\"\">-- Nenhuma --</option>` + obras.map(o => `<option value="${o.id}">${Utils.escapeHtml(o.nome_obra)} (${Utils.escapeHtml(o.numero_os || '')})</option>`).join('');
        }

        const isEdit = !!(user && (user.id || user.uid));
        $('userModalTitle').textContent = isEdit ? 'Editar Usuário' : 'Novo Usuário';
        $('btnUserDelete').style.display = isEdit ? 'inline-flex' : 'none';

        $('user-id').value = user?.uid || user?.id || '';
        $('user-uid').value = user?.uid || user?.id || '';
        $('user-nome').value = user?.nome || '';
        $('user-email').value = user?.email || '';
        $('user-role').value = user?.role || 'obra';
        if (obraSelect) obraSelect.value = user?.obraPadrao || '';
        $('user-ativo').checked = user?.ativo !== false;

        dlg.showModal();
    },

    closeUserModal: () => {
        const dlg = document.getElementById('userModal');
        dlg?.close();
    },

    handleSaveUser: async (e) => {
        e.preventDefault();
        const role = state.currentUser?.role || '';
        if (role !== 'administrador' && role !== 'diretor') {
            UI.showToast('Apenas diretores/administradores podem editar usuários.', 'error', 3000);
            return;
        }
        const errorEl = $('user-modal-error');
        if (errorEl) errorEl.textContent = '';
        const id = $('user-uid').value.trim();
        const nome = $('user-nome').value.trim();
        const email = $('user-email').value.trim();
        if (!id || !nome) {
            if (errorEl) errorEl.textContent = 'UID e Nome são obrigatórios.';
            UI.showToast('Informe UID e Nome.', 'error', 2500);
            return;
        }
        if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
            if (errorEl) errorEl.textContent = 'E-mail inválido.';
            UI.showToast('E-mail inválido.', 'error', 2500);
            return;
        }
        const userRole = $('user-role').value || 'obra';
        const obraPadrao = $('user-obra').value || null;
        const ativo = $('user-ativo').checked;

        // Proteção: evitar remover último admin/diretor (demover)
        const isDemotingAdmin = (() => {
            const target = state.usersCache.find(u => (u.uid || u.id) === id);
            const wasAdmin = target && (target.role === 'diretor' || target.role === 'administrador');
            const willBeAdmin = userRole === 'diretor' || userRole === 'administrador';
            if (wasAdmin && !willBeAdmin) {
                const countAdmins = state.usersCache.filter(u => (u.role === 'diretor' || u.role === 'administrador')).length;
                return countAdmins <= 1;
            }
            return false;
        })();
        if (isDemotingAdmin) {
            UI.showToast('Não é possível remover o último diretor/administrador.', 'error', 3500);
            return;
        }

        try {
            const payload = {
                id,
                nome,
                email,
                role: userRole,
                obraPadrao,
                ativo
            };
            await Data.provisionUserAuth(payload);
            await Data.saveUserProfile(payload);
            await UI.reloadUsers();
            UI.showToast('Usuário salvo.', 'success', 2500);
            UI.closeUserModal();
        } catch (err) {
            console.error('Erro ao salvar usuário', err);
            UI.showToast('Erro ao salvar usuário.', 'error', 3000);
        }
    },

    handleDeleteUser: async (user) => {
        const role = state.currentUser?.role || '';
        if (role !== 'administrador' && role !== 'diretor') {
            UI.showToast('Apenas diretores/administradores podem excluir usuários.', 'error', 3000);
            return;
        }
        const id = user?.uid || user?.id;
        if (!id) return;
        const isAdmin = user?.role === 'diretor' || user?.role === 'administrador';
        const adminsCount = state.usersCache.filter(u => u.role === 'diretor' || u.role === 'administrador').length;
        if (isAdmin && adminsCount <= 1) {
            UI.showToast('Não é possível excluir o último diretor/administrador.', 'error', 3500);
            return;
        }
        if (!confirm('Confirmar exclusão do usuário?')) return;
        try {
            await Data.deleteUserRemote(id);
            await Data.deleteUserProfile(id);
            state.usersCache = state.usersCache.filter(u => (u.uid || u.id) !== id);
            UI.renderUsersTable();
            UI.showToast('Usuário excluído.', 'success', 2000);
            UI.closeUserModal();
        } catch (err) {
            console.error('Erro ao excluir usuário', err);
            UI.showToast('Erro ao excluir usuário.', 'error', 3000);
        }
    },

    populateContextSelector: () => {
        if (!contextSelect) return;
        const current = state.currentContext || '*';
        const options = ['<option value=\"*\">Todas as Obras</option>'].concat(
            state.cache.obras.map(o => `<option value="${o.id}">${Utils.escapeHtml(o.nome_obra)}${o.numero_os ? ` (${Utils.escapeHtml(o.numero_os)})` : ''}</option>`)
        );
        contextSelect.innerHTML = options.join('');
        contextSelect.value = current;
    },

    applyContextSelection: (contextId) => {
        state.currentContext = contextId || '*';
        if (contextSelect && contextSelect.value !== state.currentContext) {
            contextSelect.value = state.currentContext;
        }

        UI.showPage('dashboard');
        UI.updateDashboardObraList();

        // Seleciona a primeira obra disponível quando o contexto é "Todas"
        if (state.currentContext === '*') {
            const select = document.getElementById('dashboard-obra-select');
            if (select && select.options.length > 1) {
                // opções incluem placeholder, então pega a primeira obra
                select.selectedIndex = 1;
                const obraId = select.value;
                state.currentObraId = obraId;
                UIDashboard.renderDashboardStats(obraId);
            } else {
                state.currentObraId = null;
            }
        } else {
            state.currentObraId = state.currentContext;
            UIDashboard.renderDashboardStats(state.currentContext);
        }
    },

    runGlobalSearch: (query) => {
        const term = (query || '').trim().toLowerCase();
        if (!term) {
            UI.showToast('Digite algo para buscar.', 'info');
            return;
        }

        const match = (list, fn) => list.filter(fn);
        const obras = match(state.cache.obras, o => (o.nome_obra || '').toLowerCase().includes(term) || (o.numero_os || '').toLowerCase().includes(term));
        const fornecedores = match(state.cache.fornecedores, f => (f.nome || '').toLowerCase().includes(term));
        const compradores = match(state.cache.compradores, c => (c.nome || '').toLowerCase().includes(term) || (c.email || '').toLowerCase().includes(term));

        if (obras.length === 1) {
            UI.applyContextSelection(obras[0].id);
            UI.showToast(`Contexto alterado para obra ${obras[0].nome_obra}`, 'success', 2500);
            return;
        }

        const parts = [
            `Obras: ${obras.length}`,
            `Fornecedores: ${fornecedores.length}`,
            `Compradores: ${compradores.length}`
        ];
        UI.showToast(`Resultados - ${parts.join(' | ')}`, 'info', 4000);
    },

    // --- Utilitários de UI ---
    showToast: (message, typeOrIsError = false, duration = 3000, action = null) => {
        // Backwards-compatible: boolean true => error
        let type = 'success';
        if (typeOrIsError === true) type = 'error';
        else if (typeof typeOrIsError === 'string') type = typeOrIsError;
        NotificationManager.show(message, type, duration, action);
    },

    showConfirm: (title, message, onConfirm) => {
        // Replace old confirm with promise-like handling
        $('confirmTitle').textContent = title;
        $('confirmMessage').textContent = message;
        const btnOk = $('btnConfirmOk');
        const btnCancel = $('btnConfirmCancel') || $('btnConfirmClose');
        const newBtnOk = btnOk.cloneNode(true);
        btnOk.parentNode.replaceChild(newBtnOk, btnOk);
        const cleanup = () => {
            try { confirmModal.close(); } catch (e) { }
        };
        newBtnOk.addEventListener('click', () => {
            try { onConfirm(); } catch (e) { console.error(e); }
            cleanup();
        }, { once: true });
        if (btnCancel) {
            const newBtnCancel = btnCancel.cloneNode(true);
            btnCancel.parentNode.replaceChild(newBtnCancel, btnCancel);
            newBtnCancel.addEventListener('click', () => cleanup(), { once: true });
        }
        try { confirmModal.showModal(); } catch (e) { /* ignore */ }
    },

    showAlert: (opts) => {
        const msg = opts?.message || opts?.title || 'Alerta';
        const type = opts?.type || 'warning';
        const duration = (opts && typeof opts.duration === 'number') ? opts.duration : 0;
        NotificationManager.show(msg, type, duration, opts?.action || null);
    }
};

// Alert center wiring with data + filtros
(() => {
    const $ = (id) => document.getElementById(id);
    let currentSummary = null;
    const state = { urgencia: 'all', status: 'all' };

    const applyFilters = (summary) => {
        if (!summary) return summary;
        const filtered = { items: { atrasados: [], sem_previsao: [], pendente_aprovacao: [], cotacao: [] }, counts: {} };
        const mapStatus = (c) => {
            if (c.status_aprovacao === 'Pendente') return 'pendente';
            if (c.status_compra === 'Recebido') return 'recebido';
            return 'andamento';
        };
        Object.keys(summary.items).forEach(key => {
            let arr = summary.items[key] || [];
            if (state.urgencia !== 'all' && state.urgencia !== key) {
                arr = [];
            }
            if (state.status !== 'all') {
                arr = arr.filter(c => {
                    const s = mapStatus(c);
                    if (state.status === 'pendente') return s === 'pendente';
                    if (state.status === 'andamento') return s === 'andamento';
                    if (state.status === 'recebido') return s === 'recebido';
                    return true;
                });
            }
            filtered.items[key] = arr;
            filtered.counts[key] = arr.length;
        });
        return filtered;
    };

    const renderCounts = (summary) => {
        if (!summary) return;
        Object.keys(summary.counts).forEach(key => {
            document.querySelectorAll(`[data-alert-count="${key}"]`).forEach(el => el.textContent = summary.counts[key]);
        });
    };

    const updateAlertCounts = async () => {
        try {
            currentSummary = await Data.getAlertSummary();
            const filtered = applyFilters(currentSummary);
            renderCounts(filtered);
        } catch (err) {
            console.warn('Erro ao atualizar alertas:', err);
        }
    };

    const showAlertItemsModal = (title, items) => {
        if (!items || items.length === 0) { UI.showToast("Nenhum item para exibir.", true); return; }
        const modal = document.createElement('dialog');
        modal.className = 'p-0 rounded-xl shadow-2xl w-full max-w-3xl';
        const rows = items.map(c => `<tr class="text-sm">
            <td class="px-3 py-2 font-medium">${Utils.escapeHtml(c.numero_nf || 's/ NF')}</td>
            <td class="px-3 py-2">${Utils.escapeHtml(c.obraId || 'N/D')}</td>
            <td class="px-3 py-2">${Utils.fmtBR(c.data_emissao)}</td>
            <td class="px-3 py-2">${Utils.formatCurrency(c.valor_total || 0)}</td>
        </tr>`).join('');
        modal.innerHTML = `<div class="p-5 space-y-3">
            <div class="flex justify-between items-center mb-2">
                <h3 class="text-lg font-semibold">${title}</h3>
                <button class="btn-secondary btn-small" data-close>Fechar</button>
            </div>
            <div class="overflow-auto max-h-80">
                <table class="min-w-full text-left">
                    <thead><tr class="text-xs uppercase text-gray-500"><th class="px-3 py-1">NF</th><th class="px-3 py-1">Obra</th><th class="px-3 py-1">Compra</th><th class="px-3 py-1">Valor</th></tr></thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        </div>`;
        document.body.appendChild(modal);
        const close = () => { modal.close(); modal.remove(); };
        modal.querySelector('[data-close]').addEventListener('click', close);
        modal.addEventListener('click', (e) => { const rect = modal.getBoundingClientRect(); if (e.clientY < rect.top || e.clientY > rect.bottom || e.clientX < rect.left || e.clientX > rect.right) close(); });
        modal.showModal();
    };

    document.addEventListener('DOMContentLoaded', () => {
        const btn = $('btn-open-alert-center');
        const modal = $('alertCenter');
        const closeBtn = modal?.querySelector('[data-close-alert]');
        const filterUrgencia = $('alert-filter-urgencia');
        const filterStatus = $('alert-filter-status');

        if (btn && modal && typeof modal.showModal === 'function') {
            btn.addEventListener('click', () => {
                updateAlertCounts();
                modal.showModal();
            });
        }
        if (modal && closeBtn) closeBtn.addEventListener('click', () => modal.close());
        if (modal) {
            modal.addEventListener('click', (e) => {
                const rect = modal.getBoundingClientRect();
                if (e.clientY < rect.top || e.clientY > rect.bottom || e.clientX < rect.left || e.clientX > rect.right) {
                    modal.close();
                }
            });
        }
        const handleFilterChange = () => {
            state.urgencia = filterUrgencia?.value || 'all';
            state.status = filterStatus?.value || 'all';
            const filtered = applyFilters(currentSummary);
            renderCounts(filtered);
        };
        filterUrgencia?.addEventListener('change', handleFilterChange);
        filterStatus?.addEventListener('change', handleFilterChange);

        document.addEventListener('click', async (e) => {
            const btnAction = e.target.closest('[data-action="view-alert-items"]');
            if (!btnAction) return;
            const alertKey = btnAction.dataset.alert;
            try {
                if (!currentSummary) currentSummary = await Data.getAlertSummary();
                const filtered = applyFilters(currentSummary);
                const items = filtered.items?.[alertKey] || [];
                const titleMap = {
                    atrasados: 'Atrasados',
                    sem_previsao: 'Sem previsão',
                    pendente_aprovacao: 'Pendentes de aprovação',
                    cotacao: 'Em cotação há 7+ dias'
                };
                showAlertItemsModal(`Itens: ${titleMap[alertKey] || alertKey}`, items);
            } catch (err) {
                console.warn('Erro ao abrir itens do alerta:', err);
                UI.showToast('Erro ao carregar itens.', true);
            }
        });
    });
})();
