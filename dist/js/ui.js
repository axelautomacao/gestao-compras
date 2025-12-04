import { state } from './state.js';
import { Utils } from './utils.js';
import { Data } from './data.js';
import { NotificationManager } from './notification-manager.js';
import { UIDashboard } from './ui-dashboard.js';
import { UIForms } from './ui-forms.js';
import { UIReports } from './ui-reports.js';
import { Icons } from './icons.js';

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
const VIEW_ICON = Icons.eye;

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
        const stored = localStorage.getItem('theme') || 'system';
        UI.applyTheme(stored);
        UI.syncThemeControls(stored);

        // Sidebar backdrop (mobile)
        let sidebarBackdrop = document.getElementById('sidebar-backdrop');
        if (!sidebarBackdrop) {
            sidebarBackdrop = document.createElement('div');
            sidebarBackdrop.id = 'sidebar-backdrop';
            document.body.appendChild(sidebarBackdrop);
        }

        const sidebar = $('sidebar');
        const toggleBtn = $('btn-toggle-sidebar');

        const closeSidebarMobile = () => {
            sidebar?.classList.remove('open');
            sidebarBackdrop.classList.remove('visible');
        };

        if (!sidebarBackdrop.dataset.bound) {
            sidebarBackdrop.dataset.bound = '1';
            sidebarBackdrop.addEventListener('click', closeSidebarMobile);
        }

        if (toggleBtn && !toggleBtn.dataset.sidebarBound) {
            toggleBtn.dataset.sidebarBound = '1';
            toggleBtn.addEventListener('click', () => {
                const isMobile = window.matchMedia('(max-width: 768px)').matches;
                if (isMobile) {
                    sidebar?.classList.toggle('open');
                    const isOpen = sidebar?.classList.contains('open');
                    sidebarBackdrop.classList.toggle('visible', !!isOpen);
                } else {
                    sidebarBackdrop.classList.remove('visible');
                }
            });
        }
    },

    applyTheme: (theme) => {
        const effectiveTheme = theme === 'system'
            ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
            : theme;

        document.documentElement.classList.toggle('dark', effectiveTheme === 'dark');
        document.documentElement.dataset.theme = theme;
        localStorage.setItem('theme', theme);
        UI.syncThemeControls(theme);

        // Atualiza defaults de charts/grades para acompanhar o tema
        try {
            const root = getComputedStyle(document.documentElement);
            const textColor = root.getPropertyValue('--text-primary').trim() || '#111827';
            const gridColor = root.getPropertyValue('--border-color').trim() || '#e5e7eb';
            if (window.Chart) {
                Chart.defaults.color = textColor;
                Chart.defaults.borderColor = gridColor;
                const instances = Chart.instances || {};
                Object.values(instances).forEach((chart) => {
                    if (!chart?.options) return;
                    if (chart.options.scales) {
                        Object.values(chart.options.scales).forEach((scale) => {
                            scale.grid = { ...(scale.grid || {}), color: gridColor };
                            scale.ticks = { ...(scale.ticks || {}), color: textColor };
                        });
                    }
                    if (chart.options.plugins?.legend) {
                        chart.options.plugins.legend.labels = {
                            ...(chart.options.plugins.legend.labels || {}),
                            color: textColor,
                        };
                    }
                    chart.update();
                });
            }
            window.dispatchEvent(new CustomEvent('themechange', { detail: { theme, effectiveTheme } }));
        } catch (err) {
            console.warn('Erro ao aplicar tema:', err);
        }
    },

    syncThemeControls: (theme) => {
        const select = $('select-theme');
        if (select && select.value !== theme) select.value = theme;
        const sun = document.getElementById('theme-icon-sun');
        const moon = document.getElementById('theme-icon-moon');
        const isDark = (theme === 'dark') || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
        sun?.classList.toggle('hidden', isDark);
        moon?.classList.toggle('hidden', !isDark);
    },

    toggleTheme: () => {
        const current = localStorage.getItem('theme') || 'system';
        const order = ['system', 'light', 'dark'];
        const next = order[(order.indexOf(current) + 1) % order.length];
        UI.applyTheme(next);
    },

    // (Item 1 e 2): Nova Navegação
        renderNav: () => {
        const role = state.currentUser?.role || 'obra';

        // Apenas as roles efetivamente permitidas (admin herda tudo)
        const roles = role === 'administrador'
            ? ['administrador', 'diretor', 'financeiro', 'comprador', 'obra']
            : [role];

        const icon = (path) => `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" class="w-5 h-5">${path}</svg>`;

        const allNavButtons = [
            { id: 'dashboard-geral', label: 'Dashboard Geral', icon: icon(`<path stroke-linecap="round" stroke-linejoin="round" d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" />`), roles: ['diretor', 'financeiro'] },
            { id: 'dashboard', label: 'Dashboard p/ Obra', icon: icon(`<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 21V9.75A1.75 1.75 0 016.25 8h11.5A1.75 1.75 0 0119.5 9.75V21m-12-7.5h9m-9-3h9m-9 6h9m-6-9V5.25A1.75 1.75 0 0112.75 3.5h0A1.75 1.75 0 0114.5 5.25V6" />`), roles: ['diretor', 'comprador', 'obra', 'financeiro'] },
            { id: 'registro', label: 'Registrar Compra', icon: icon(`<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 4.5h10.5A1.75 1.75 0 0119 6.25v11.5A1.75 1.75 0 0117.25 19H6.75A1.75 1.75 0 015 17.75V6.25A1.75 1.75 0 016.75 4.5zm5.25 3v6m-3-3h6" />`), roles: ['diretor', 'comprador'] },
            { id: 'relatorio-compras', label: 'Compras', icon: icon(`<path stroke-linecap="round" stroke-linejoin="round" d="M5 7.75h14M5 12h14M5 16.25h9M6.5 4.5h11A1.5 1.5 0 0119 6v12a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 015 18V6A1.5 1.5 0 016.5 4.5z" />`), roles: ['diretor', 'comprador', 'financeiro'] },
            { id: 'relatorios-fornecedor', label: 'Rel. Fornecedor', icon: icon(`<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 17.25h16.5M4.5 17.25l1-4h13l1 4M9 17.25V9.75a3 3 0 016 0v7.5m-4.5-7.5h3m-7.5-5.5h9l1.5 3h-12z" />`), roles: ['diretor', 'comprador', 'financeiro'] },

            { id: 'separator', type: 'separator', roles: ['diretor'] },
            { id: 'cadastro-obras', label: 'Cadastrar Obras', icon: icon(`<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5h15m-13.5 0V9.75a1.5 1.5 0 011.5-1.5h9a1.5 1.5 0 011.5 1.5V19.5m-10.5-6h6m-3-3v6m-5.25-9h12.5l-6.25-4.5z" />`), roles: ['diretor', 'comprador', 'obra'] },
            { id: 'cadastro-compradores', label: 'Cad. Compradores', icon: icon(`<path stroke-linecap="round" stroke-linejoin="round" d="M8.5 7.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zm-3 10.25a5.75 5.75 0 0111.5 0V19h-11.5v-1.25zm12.75 1.25v-1.5c0-.79-.64-1.44-1.43-1.5" />`), roles: ['diretor'] },
            { id: 'cadastro-fornecedores', label: 'Cad. Fornecedores', icon: icon(`<path stroke-linecap="round" stroke-linejoin="round" d="M5.25 6.75h13.5m-12 0V5.25A1.5 1.5 0 018.25 3.75h7.5a1.5 1.5 0 011.5 1.5v1.5m-12 0V18a1.5 1.5 0 001.5 1.5h7.5A1.5 1.5 0 0019.5 18V6.75m-12 8.5h4.5m-4.5-3h6" />`), roles: ['diretor'] },
            { id: 'cadastro-centros-custo', label: 'Cad. Centros Custo', icon: icon(`<path stroke-linecap="round" stroke-linejoin="round" d="M7 10.5a5 5 0 1110 0 5 5 0 01-10 0zm5-3.25v6.5m-3.25-3.25h6.5M4 19.25h16" />`), roles: ['diretor'] },
        ];

        const settingsButton = {
            id: 'configuracoes',
            label: 'Configurações',
            icon: icon(`<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 4.5h3m-5.25 3.75h7.5m-7.5 7.5h7.5M6 9.75h-.75A1.75 1.75 0 013.5 8V6.5A1.75 1.75 0 015.25 4.75H6m12 5h.75A1.75 1.75 0 0020.5 8V6.5A1.75 1.75 0 0018.75 4.75H18m-12 9h-.75A1.75 1.75 0 003.5 16v1.5A1.75 1.75 0 005.25 19.25H6m12-5h.75A1.75 1.75 0 0020.5 16v1.5a1.75 1.75 0 01-1.75 1.75H18" />`),
            roles: ['diretor', 'comprador', 'obra', 'financeiro']
        };

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
            + '<div class="flex-grow"></div>'
            + `<button data-page="${settingsButton.id}" class="${state.currentPage === settingsButton.id ? 'nav-link active' : 'nav-link inactive'}">${settingsButton.icon}<span>${settingsButton.label}</span></button>`;
    },// (Item 1 e 2): Lida com as novas páginas
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


