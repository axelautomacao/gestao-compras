// js/app.js
import { state } from './state.js';
import { Auth } from './auth.js';
import { Data } from './data.js';
import { UI } from './ui.js';
import { Utils } from './utils.js';
import { AuthMiddleware } from './auth-middleware.js';
import { UIReports } from './ui-reports.js';
import { UIForms } from './ui-forms.js';

// --- Mapeamento de DOM ---
const $ = (id) => document.getElementById(id);

// O Objeto App é o controlador principal
const App = {
    // init agora é assíncrono
    init: async () => {
        const timeoutMs = 7000;
        let timedOut = false;
        let initCompleted = false;
        const showInitError = (msg) => App.showInitError(msg || 'Não foi possível iniciar. Verifique a conexão ou configuração e tente novamente.');
        const finishInit = (userProfile) => {
            if (initCompleted) return;
            initCompleted = true;

            if (userProfile) {
                App.initializeApp_PostLogin(userProfile);
            } else {
                const loader = $('loader');
                if (loader) loader.classList.add('hidden');

                App.cleanupOnSignOut();
                UI.updateUIForRole();
                UI.showLoginModal('login');
            }
        };

        const timeoutId = setTimeout(() => {
            timedOut = true;
            showInitError('Não foi possível conectar ao Firebase a tempo. Verifique sua conexão ou configuração e tente novamente.');
        }, timeoutMs);

        try {
            // Registra plugins do Chart.js
            if (window.ChartDataLabels) {
                Chart.register(ChartDataLabels);
                Chart.defaults.plugins.datalabels.display = false;
            }

            // Inicia o tema (Claro/Escuro)
            UI.initTheme();

            // Liga os botões de Login/Cadastro primeiro
            App.bindAuthEvents();

            // Espera a autenticação resolver
            const userProfile = await Auth.init((currentProfile) => {
                if (timedOut) return;
                clearTimeout(timeoutId);
                finishInit(currentProfile);
            });

            if (!timedOut) {
                clearTimeout(timeoutId);
                finishInit(userProfile);
            }
        } catch (err) {
            console.error('Erro na inicialização:', err);
            clearTimeout(timeoutId);
            showInitError(`Erro crítico: ${err.message}`);
        }
    },

    showInitError: (message) => {
        const overlay = $('loading-overlay');
        const loader = $('loader');
        const loadingMsg = $('loading-message');

        if (overlay) {
            overlay.style.display = 'flex';
            overlay.innerHTML = `
                <div class="bg-white rounded-lg shadow-xl p-6 max-w-md w-full text-center space-y-4">
                    <h3 class="text-lg font-semibold text-red-600">Falha ao iniciar</h3>
                    <p class="text-sm text-gray-700">${message}</p>
                    <div class="flex justify-center gap-3">
                        <button id="btn-retry-init" class="btn">Tentar Novamente</button>
                        <button id="btn-exit-init" class="btn-secondary">Sair</button>
                    </div>
                </div>`;
            const retry = document.getElementById('btn-retry-init');
            const exitBtn = document.getElementById('btn-exit-init');
            retry?.addEventListener('click', () => window.location.reload());
            exitBtn?.addEventListener('click', () => {
                try { localStorage.clear(); sessionStorage.clear(); } catch (e) { /* ignore */ }
                try { Auth.handleSignOut?.(); } catch (e) { /* ignore */ }
                window.location.reload();
            });
            return;
        }

        if (loader) {
            loader.classList.remove('hidden');
            loader.style.display = 'flex';
            if (loadingMsg) loadingMsg.textContent = message;
            return;
        }

        alert(message);
    },

    // bindAuthEvents agora tem a lógica de UI (try/catch)
    bindAuthEvents: () => {
        try {
            // --- LOGIN ---
            $('form-login').addEventListener('submit', async (e) => {
                e.preventDefault();
                const btn = e.target.querySelector('button[type="submit"]');
                UI.setLoadingState(btn, true, 'Entrando...');
                const errorDiv = $('login-error');
                errorDiv.classList.add('hidden');
                const form = e.target;

                try {
                    await Auth.handleLogin(form.email.value, form.password.value);
                    UI.hideLoginModal();
                } catch (err) {
                    console.error('Login error:', err);
                    let msg = 'Não foi possível entrar. Verifique suas credenciais e tente novamente.';
                    if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential' || err.code === 'auth/invalid-email') {
                        msg = 'Email ou senha incorretos. Verifique e tente novamente.';
                    } else if (err.code === 'auth/user-disabled') {
                        msg = 'Conta desativada. Contacte o administrador.';
                    } else if (err.code === 'auth/too-many-requests') {
                        msg = 'Muitas tentativas. Tente novamente mais tarde.';
                    }
                    errorDiv.textContent = msg;
                    errorDiv.classList.remove('hidden');
                } finally {
                    UI.setLoadingState(btn, false);
                }
            });

            // --- CADASTRO (SIGNUP) ---
            $('form-signup').addEventListener('submit', async (e) => {
                e.preventDefault();
                const btn = e.target.querySelector('button[type="submit"]');
                UI.setLoadingState(btn, true, 'Cadastrando...');
                const errorDiv = $('signup-error');
                errorDiv.classList.add('hidden');

                try {
                    await Auth.handleSignUp(e.target.nome.value, e.target.email.value, e.target.password.value);
                    UI.hideLoginModal();
                } catch (err) {
                    errorDiv.textContent = `Erro: ${err.message}`;
                    errorDiv.classList.remove('hidden');
                } finally {
                    UI.setLoadingState(btn, false);
                }
            });

            // --- LOGOUT ---
            $('btn-logout').addEventListener('click', async () => {
                await Auth.handleSignOut();
                App.cleanupOnSignOut();
                UI.showLoginModal('login');
                window.location.reload();
            });

            // --- ESQUECI A SENHA ---
            $('btn-forgot-password').addEventListener('click', () => UI.showLoginModal('forgot'));
            $('btn-show-login-from-forgot').addEventListener('click', () => UI.showLoginModal('login'));
            $('form-forgot-password').addEventListener('submit', async (e) => {
                e.preventDefault();
                const btn = e.target.querySelector('button[type="submit"]');
                UI.setLoadingState(btn, true, 'Enviando...');
                const successMsg = $('forgot-success');
                const errorMsg = $('forgot-error');
                successMsg.classList.add('hidden');
                errorMsg.classList.add('hidden');

                try {
                    await Auth.handleForgotPassword(e.target.email.value);
                    successMsg.textContent = 'Link de redefinição enviado para o seu email!';
                    successMsg.classList.remove('hidden');
                } catch (err) {
                    if (err.code === 'auth/user-not-found') {
                        errorMsg.textContent = 'Email não encontrado no nosso sistema.';
                    } else {
                        errorMsg.textContent = `Erro: ${err.message}`;
                    }
                    errorMsg.classList.remove('hidden');
                } finally {
                    UI.setLoadingState(btn, false);
                }
            });

            $('btn-show-signup').addEventListener('click', () => UI.showLoginModal('signup'));
            $('btn-show-login').addEventListener('click', () => UI.showLoginModal('login'));

        } catch (err) {
            console.error("Erro crítico ao ligar eventos de autenticação:", err);
            $('loading-message').textContent = `Erro crítico (bindAuthEvents): ${err.message}`;
        }
    },

    initializeApp_PostLogin: async (userProfile) => {
        UI.updateUIForRole();
        App.bindGlobalEvents();
        // Garantir que prefs de notificação estejam sincronizadas
        try { await UI.ensureNotificationPrefs(); } catch (err) { console.warn('Prefs de notificação não sincronizadas', err); }

        Data.listenToCadastros({
            renderObrasPage: UI.renderObrasPage,
            updateDashboardObraList: UI.updateDashboardObraList,
            updateRegistroObraList: UI.updateRegistroObraList,
            refreshCadastroLists: UI.refreshCadastroLists,
            populateContextSelector: UI.populateContextSelector,
            renderRelatorioComprasPage: UI.renderRelatorioComprasPage
        });

        try {
            UI.applyContextSelection(state.currentContext || '*');
        } catch (err) {
            console.warn('Falha ao aplicar contexto, caindo para dashboard padrão:', err);
            UI.showPage('dashboard');
            UI.renderDashboardStats(state.currentObraId);
        }

        // Garantir tela inicial após login e ocultar demais seções
        UI.showPage(state.currentPage || 'dashboard-geral');
        UI.renderDashboardGeral();

        // Toca a animação de entrada
        await Auth.playLoginAnimation();
    },

    cleanupOnSignOut: () => {
        try {
            Object.keys(state.listeners).forEach(key => {
                const fn = state.listeners[key];
                if (typeof fn === 'function') {
                    try { fn(); } catch (err) { console.warn(`Erro ao desinscrever listener ${key}:`, err); }
                    state.listeners[key] = null;
                }
            });

            state.cache.obras = [];
            state.cache.centrosCusto = [];
            state.cache.fornecedores = [];
            state.cache.compradores = [];
            state.currentObraId = null;

            try { $('main-layout').classList.add('hidden'); } catch (e) { /* ignore */ }
        } catch (err) {
            console.warn('Erro durante cleanupOnSignOut:', err);
        }
    },

    bindGlobalEvents: () => {
        const nav = $('navigation');
        const on = (id, evt, handler) => {
            const el = $(id);
            if (el) el.addEventListener(evt, handler);
        };

        nav?.addEventListener('click', (e) => {
            const pageId = e.target.closest('button')?.dataset.page;
            if (pageId) UI.showPage(pageId);
        });

        try {
            const themeSelect = $('select-theme');
            themeSelect?.addEventListener('change', (e) => UI.applyTheme(e.target.value));
        } catch (err) {
            console.warn("Erro ao ligar o listener do tema:", err);
        }

        try {
            const contextSelect = $('context-obra-select');
            contextSelect?.addEventListener('change', (e) => UI.applyContextSelection(e.target.value));
            $('btn-toggle-sidebar')?.addEventListener('click', () => {
                const sidebar = $('sidebar');
                if (sidebar) {
                    sidebar.classList.toggle('-translate-x-full');
                    sidebar.classList.toggle('collapsed');
                    localStorage.setItem('sidebar-collapsed', sidebar.classList.contains('collapsed') ? '1' : '0');
                }
            });
            const sidebarEl = $('sidebar');
            if (sidebarEl && localStorage.getItem('sidebar-collapsed') === '1') {
                sidebarEl.classList.add('collapsed');
            }
            $('view-table-toggle')?.addEventListener('click', () => {
                UIReports.toggleReportView('table');
                if (state.reportCompras?.length) UIReports.renderReportTable(state.reportCompras);
            });
            $('view-kanban-toggle')?.addEventListener('click', () => {
                UIReports.toggleReportView('kanban');
            });
            const globalSearch = $('global-search');
            globalSearch?.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    UI.runGlobalSearch(globalSearch.value);
                }
            });
        } catch (err) {
            console.warn('Erro ao ligar listeners do contexto/sidebar:', err);
        }

        document.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                $('global-search')?.focus();
            }
        });

        document.addEventListener('click', async (e) => {
            const el = e.target.closest('button,a,tr');
            if (!el) return;
            const id = el.dataset.id;
            const path = el.dataset.path;
            const action = el.dataset.action;

            if (action) {
                try {
                    if (action === 'wizard-next') {
                        const nextStep = Number(el.dataset.nextStep || 2);
                        UIForms.goToWizardStep(nextStep);
                        return;
                    }
                    if (action === 'wizard-prev') {
                        UIForms.goToWizardStep(UIForms.getCurrentWizardStep() - 1);
                        return;
                    }
                    if (action === 'view-pdf') await UI.showPdfModal(path);
                    if (action === 'view-compra') {
                        await UI.showCompraDetails(id);
                        return;
                    }
                    if (action === 'view-obra') {
                        state.currentObraId = id;
                        UI.showPage('dashboard');
                        await UI.renderDashboardStats(id);
                        return;
                    }
                    if (action === 'edit-obra') {
                        if (!AuthMiddleware.canEditObra()) {
                            UI.showToast('Você não tem permissão para editar obras.', true);
                            return;
                        }
                        UI.showObraEditModal(id);
                    }

                    if (action === 'delete-obra') {
                        if (!AuthMiddleware.canDeleteObra()) {
                            UI.showToast('Você não tem permissão para deletar obras.', true);
                            return;
                        }
                        const obra = state.cache.obras.find(o => o.id === id);
                        UI.showConfirm('Excluir Obra?', `Tem certeza que deseja excluir "${obra.nome_obra}"?`, async () => {
                            try {
                                await Data.deleteObra(id);
                                UI.showToast('Obra excluída com sucesso.');
                            } catch (err) {
                                UI.showToast(err.message, true);
                            }
                        });
                    }

                    if (action === 'edit-compra') {
                        if (!AuthMiddleware.canEditCompra()) {
                            UI.showToast('Você não tem permissão para editar compras.', true);
                            return;
                        }
                        UI.showCompraEditModal(id);
                    }

                    if (action === 'delete-compra') {
                        if (!AuthMiddleware.canEditCompra()) {
                            UI.showToast('Você não tem permissão para deletar compras.', true);
                            return;
                        }
                        const compra = await Data.getDocById("compras", id);
                        UI.showConfirm('Excluir Compra?', `Tem certeza que deseja excluir a NF-e "${compra.numero_nf}"? PDFs associados serão removidos.`, async () => {
                            try {
                                await Data.deleteCompra(id);
                                UI.showToast('Compra excluída com sucesso.');
                            } catch (err) {
                                UI.showToast(`Erro ao excluir: ${err.message}`, true);
                            }
                        });
                    }

                    if (action === 'kanban-next') {
                        const next = UIReports.getNextStatus(el.dataset.current || 'Nao iniciado');
                        if (!next || next === el.dataset.current) return;
                        try {
                            await Data.updateCompraStatus(id, next);
                            const compras = state.reportCompras || [];
                            compras.forEach(c => { if (c.id === id) c.status_compra = next; });
                            UIReports.renderKanban(compras);
                            UI.showToast('Status atualizado no quadro.');
                        } catch (err) {
                            UI.showToast(err.message, true);
                        }
                        return;
                    }

                    const deleteActions = {
                        'delete-comprador': { id, collection: 'compradores', check: 'compras', field: 'compradorId', name: 'Comprador' },
                        'delete-fornecedor': { id, collection: 'fornecedores', check: 'compras', field: 'fornecedorId', name: 'Fornecedor' },
                        'delete-centro-custo': { id, collection: 'centrosCusto', check: 'compras', field: 'centroCustoId', name: 'Centro de Custo' }
                    };

                    if (deleteActions[action]) {
                        if (!AuthMiddleware.canDeleteCadastros()) {
                            UI.showToast('Você não tem permissão para deletar cadastros.', true);
                            return;
                        }
                        const d = deleteActions[action];
                        const item = state.cache[d.collection].find(i => i.id === d.id);
                        UI.showConfirm(`Excluir ${d.name}?`, `Tem certeza que deseja excluir "${item.nome}"?`, async () => {
                            try {
                                await Data.deleteGeneric(d.id, d.collection, d.check, d.field);
                                UI.showToast(`${d.name} excluído.`);
                            } catch (err) {
                                UI.showToast(err.message, true);
                            }
                        });
                    }

                    if (action === 'edit-comprador') {
                        if (!AuthMiddleware.canEditCadastros()) {
                            UI.showToast('Você não tem permissão para editar cadastros.', true);
                            return;
                        }
                        UI.showCompradorEditModal(id);
                    }
                    if (action === 'edit-fornecedor') {
                        if (!AuthMiddleware.canEditCadastros()) {
                            UI.showToast('Você não tem permissão para editar cadastros.', true);
                            return;
                        }
                        UI.showFornecedorEditModal(id);
                    }
                    if (action === 'edit-centro-custo') {
                        if (!AuthMiddleware.canEditCadastros()) {
                            UI.showToast('Você não tem permissão para editar cadastros.', true);
                            return;
                        }
                        UI.showCentroCustoEditModal(id);
                    }

                    if (action === 'add-cadastro') {
                        const targetFormId = el.dataset.targetForm;
                        UI.showPage('cadastros');
                        setTimeout(() => $(targetFormId)?.nome?.focus(), 100);
                    }
                    if (action === 'go-back') {
                        if (state.previousPage) {
                            UI.showPage(state.previousPage);
                            state.previousPage = null;
                        } else {
                            UI.showPage('dashboard');
                        }
                    }
                    if (action === 'filter-cc') {
                        UI.filterDashboardTableByCC(el.dataset.ccId);
                    }
                } catch (err) {
                    UI.showToast(`Erro: ${err.message}`, true);
                }
                return;
            }

            if (el.id === 'btn-report-buscar') {
                UI.showReportTableLoading(true);
                try {
                    const getSelected = (id) => {
                        const select = $(id);
                        return select ? Array.from(select.selectedOptions).map(o => o.value) : [];
                    };
                    const safeValue = (id) => {
                        const input = $(id);
                        return input ? input.value : '';
                    };
                    const pushUnique = (arr, val) => {
                        if (val && !arr.includes(val)) arr.push(val);
                    };
                    const filters = {
                        dateStart: $('report-filter-date-start')?.value || '',
                        dateEnd: $('report-filter-date-end')?.value || '',
                        status: safeValue('report-filter-status'),
                        natureza: safeValue('report-filter-natureza'),
                        obras: getSelected('report-filter-obra'),
                        fornecedores: getSelected('report-filter-fornecedor'),
                        compradores: getSelected('report-filter-comprador'),
                        centroCusto: safeValue('report-filter-centrocusto-top'),
                        numeroNf: safeValue('report-filter-numero'),
                        descricao: safeValue('report-filter-descricao').toLowerCase(),
                        searchText: safeValue('report-search-text').toLowerCase(),
                        sortCol: state.reportSort.col,
                        sortDir: state.reportSort.dir
                    };
                    pushUnique(filters.fornecedores, safeValue('report-filter-fornecedor-top'));
                    pushUnique(filters.compradores, safeValue('report-filter-comprador-top'));
                    const compras = await Data.findCompras(filters);
                    UI.renderReportTable(compras);
                } catch (err) {
                    UI.showToast(err.message, true);
                    UI.renderReportTable([]);
                }
                return;
            }

            if (el.id === 'btn-export-csv') {
                try {
                    await Data.exportCSV();
                } catch (err) {
                    UI.showToast(err.message, true);
                }
            }
            if (el.id === 'btn-dashboard-edit') {
                if (!state.currentObraId) {
                    UI.showToast('Selecione uma obra antes de editar.', true);
                } else if (!AuthMiddleware.canEditObra()) {
                    UI.showToast('Você não tem permissão para editar obras.', true);
                } else {
                    UI.showObraEditModal(state.currentObraId);
                }
            }
            if (el.id === 'btn-dashboard-refresh') UI.renderDashboardStats(state.currentObraId);
            if (el.id === 'btn-clear-cc-filter') UI.filterDashboardTableByCC(null);
        });

        $('btnConfirmCancel').addEventListener('click', () => $('confirmModal').close());
        on('btnClosePdf', 'click', () => $('pdfModal')?.close());
        on('btnEditObraCancel', 'click', () => $('obraEditModal')?.close());
        on('btnEditCompraCancel', 'click', () => {
            $('compraEditModal')?.close();
            state.currentOrcamentoResumo = null;
        });
        on('btnEditCompradorCancel', 'click', () => $('compradorEditModal')?.close());
        on('btnEditFornecedorCancel', 'click', () => $('fornecedorEditModal')?.close());
        on('btnEditCentroCustoCancel', 'click', () => $('centroCustoEditModal')?.close());

        try {
            const formObra = $('form-obra');
            if (formObra) formObra.addEventListener('submit', async (e) => {
                e.preventDefault();
                const btn = e.target.querySelector('button[type="submit"]');
                UI.setLoadingState(btn, true);
                try {
                    await Data.saveObra(e.target);
                    UI.showToast('Obra salva com sucesso!');
                    e.target.reset();
                } catch (err) {
                    UI.showToast(`Erro: ${err.message}`, true);
                } finally {
                    UI.setLoadingState(btn, false);
                }
            });
            const formForn = $('form-fornecedor');
            if (formForn) formForn.addEventListener('submit', async (e) => {
                e.preventDefault();
                const btn = e.target.querySelector('button[type="submit"]');
                UI.setLoadingState(btn, true);
                try {
                    await Data.saveGenericForm(e.target, 'fornecedores');
                    UI.showToast('Fornecedor salvo com sucesso!');
                    e.target.reset();
                } catch (err) {
                    UI.showToast(`Erro: ${err.message}`, true);
                } finally {
                    UI.setLoadingState(btn, false);
                }
            });
            const formCC = $('form-centro-custo');
            if (formCC) formCC.addEventListener('submit', async (e) => {
                e.preventDefault();
                const btn = e.target.querySelector('button[type="submit"]');
                UI.setLoadingState(btn, true);
                try {
                    await Data.saveGenericForm(e.target, 'centrosCusto');
                    UI.showToast('Centro de Custo salvo com sucesso!');
                    e.target.reset();
                } catch (err) {
                    UI.showToast(`Erro: ${err.message}`, true);
                } finally {
                    UI.setLoadingState(btn, false);
                }
            });
            const formComprador = $('form-comprador');
            if (formComprador) formComprador.addEventListener('submit', async (e) => {
                e.preventDefault();
                const btn = e.target.querySelector('button[type="submit"]');
                UI.setLoadingState(btn, true);
                try {
                    await Data.saveGenericForm(e.target, 'compradores');
                    UI.showToast('Comprador salvo com sucesso!');
                    e.target.reset();
                } catch (err) {
                    UI.showToast(`Erro: ${err.message}`, true);
                } finally {
                    UI.setLoadingState(btn, false);
                }
            });
            const formCompra = $('form-compra');
            if (formCompra) formCompra.addEventListener('submit', async (e) => {
                e.preventDefault();
                const form = e.target;
                const btn = form.querySelector('button[type="submit"]');
                if (!form.checkValidity()) {
                    form.reportValidity();
                    return;
                }
                UI.setLoadingState(btn, true, 'Registrando...');
                try {
                    if (!form.obraId?.value) {
                        UI.showToast("Selecione a obra nos filtros acima antes de registrar a compra.", true);
                        return;
                    }
                    UI.showToast("Enviando arquivos, aguarde...", false);
                    await Data.saveCompra(form);
                    UI.showToast('Compra registrada com sucesso!');
                    form.reset();
                    form.obraId.value = '';
                    $('registro-orcamento-resumo').classList.add('hidden');
                    $('registro-justificativa-wrapper').classList.add('hidden');
                } catch (err) {
                    if (err.message === "JUSTIFICATIVA_NECESSARIA") {
                        $('registro-justificativa-wrapper').classList.remove('hidden');
                        form.justificativa_estouro_orcamento.required = true;
                        UI.showToast("Estouro de orçamento! Justificativa obrigatória.", true);
                    } else {
                        UI.showToast(err.message, true);
                    }
                } finally {
                    UI.setLoadingState(btn, false);
                }
            });

            const formEditObra = $('form-edit-obra');
            if (formEditObra) formEditObra.addEventListener('submit', async (e) => {
                e.preventDefault();
                const btn = e.target.querySelector('button[type="submit"]');
                UI.setLoadingState(btn, true);
                try {
                    await Data.updateObra(e.target);
                    UI.showToast('Obra atualizada!');
                    $('obraEditModal').close();
                } catch (err) {
                    UI.showToast(`Erro: ${err.message}`, true);
                } finally {
                    UI.setLoadingState(btn, false);
                }
            });
            const formEditCompra = $('form-edit-compra');
            if (formEditCompra) formEditCompra.addEventListener('submit', async (e) => {
                e.preventDefault();
                const form = e.target;
                const btn = form.querySelector('button[type="submit"]');
                if (!form.checkValidity()) {
                    form.reportValidity();
                    return;
                }
                UI.setLoadingState(btn, true);
                try {
                    await Data.updateCompra(form);
                    UI.showToast('Compra atualizada!');
                    $('compraEditModal').close();
                } catch (err) {
                    if (err.message === "JUSTIFICATIVA_NECESSARIA") {
                        $('edit-justificativa-wrapper').classList.remove('hidden');
                        form.justificativa_estouro_orcamento.required = true;
                        UI.showToast("Estouro de orçamento! Justificativa obrigatória.", true);
                    } else {
                        UI.showToast(`Erro ao atualizar: ${err.message}`, true);
                    }
                } finally {
                    UI.setLoadingState(btn, false);
                }
            });
            const formEditComprador = $('form-edit-comprador');
            if (formEditComprador) formEditComprador.addEventListener('submit', async (e) => {
                e.preventDefault();
                const btn = e.target.querySelector('button[type="submit"]');
                UI.setLoadingState(btn, true);
                try {
                    await Data.updateGeneric(e.target, 'compradores');
                    UI.showToast('Cadastro atualizado!');
                    $('compradorEditModal').close();
                } catch (err) {
                    UI.showToast(`Erro: ${err.message}`, true);
                } finally {
                    UI.setLoadingState(btn, false);
                }
            });
            const formEditFornecedor = $('form-edit-fornecedor');
            if (formEditFornecedor) formEditFornecedor.addEventListener('submit', async (e) => {
                e.preventDefault();
                const btn = e.target.querySelector('button[type="submit"]');
                UI.setLoadingState(btn, true);
                try {
                    await Data.updateGeneric(e.target, 'fornecedores');
                    UI.showToast('Cadastro atualizado!');
                    $('fornecedorEditModal').close();
                } catch (err) {
                    UI.showToast(`Erro: ${err.message}`, true);
                } finally {
                    UI.setLoadingState(btn, false);
                }
            });
            const formEditCC = $('form-edit-centro-custo');
            if (formEditCC) formEditCC.addEventListener('submit', async (e) => {
                e.preventDefault();
                const btn = e.target.querySelector('button[type="submit"]');
                UI.setLoadingState(btn, true);
                try {
                    await Data.updateGeneric(e.target, 'centrosCusto');
                    UI.showToast('Cadastro atualizado!');
                    $('centroCustoEditModal').close();
                } catch (err) {
                    UI.showToast(`Erro: ${err.message}`, true);
                } finally {
                    UI.setLoadingState(btn, false);
                }
            });
        } catch (err) {
            console.warn("Erro ao anexar listeners de formulário:", err);
        }

        try {
            const formCompra = $('form-compra');
            if (formCompra) {
                const checkEstoque = formCompra.elements['retirada_estoque'];
                if (checkEstoque) {
                    checkEstoque.addEventListener('change', (e) => {
                        UIForms.toggleEstoqueMode(formCompra, e.target.checked);
                    });
                } else {
                    console.warn("Elemento 'retirada_estoque' não encontrado no 'form-compra'.");
                }
            } else {
                console.warn("Formulário 'form-compra' não encontrado.");
            }
            const editForm = $('form-edit-compra');
            if (editForm) {
                const checkEditEstoque = editForm.elements['retirada_estoque'];
                if (checkEditEstoque) {
                    checkEditEstoque.addEventListener('change', (e) => {
                        UIForms.toggleEstoqueMode(editForm, e.target.checked);
                    });
                }
            }
        } catch (err) {
            console.warn("Erro ao ligar o listener de retirada de estoque:", err);
        }

        document.addEventListener('change', async (e) => {
            const action = e.target.dataset.action;
            if (action === 'change-obra-status') {
                try {
                    await Data.changeObraStatus(e.target.dataset.id, e.target.value);
                    UI.showToast('Status da obra atualizado.');
                } catch (err) {
                    UI.showToast(`Erro ao mudar status: ${err.message}`, true);
                }
            }

            if (e.target.id === 'edit-nf_conferida') {
                const porInput = $('edit-nf_conferida_por');
                const emInput = $('edit-nf_conferida_em');
                if (e.target.checked) {
                    porInput.value = state.currentUser.email;
                    emInput.value = new Date().toLocaleString('pt-BR');
                } else {
                    porInput.value = '';
                    emInput.value = '';
                }
            }
        });

        document.addEventListener('input', (e) => {
            if (e.target.dataset.mask === 'currency') {
                e.target.value = Utils.formatCurrencyInput(e.target.value);
            }
            if (e.target.dataset.mask === 'cnpj') {
                e.target.value = Utils.formatCnpjInput(e.target.value);
            }
        });

        const reportHead = document.querySelector('#page-relatorio-compras thead');
        if (reportHead) {
            reportHead.addEventListener('click', (e) => {
                const th = e.target.closest('th');
                if (!th || !th.dataset.sort) return;

                const newCol = th.dataset.sort;
                document.querySelectorAll('#page-relatorio-compras thead th[data-sort]').forEach(t => {
                    if (t !== th) t.innerHTML = t.innerHTML.replace(' ^', '').replace(' v', '');
                });

                if (state.reportSort.col === newCol) {
                    state.reportSort.dir = state.reportSort.dir === 'asc' ? 'desc' : 'asc';
                } else {
                    state.reportSort.col = newCol;
                    state.reportSort.dir = 'asc';
                }

                th.innerHTML = th.innerHTML.replace(' ^', '').replace(' v', '');
                th.innerHTML += state.reportSort.dir === 'asc' ? ' ^' : ' v';

                $('btn-report-buscar')?.click();
            });
        }

        const dashboardHead = document.querySelector('#dashboard-table-head');
        if (dashboardHead) {
            dashboardHead.addEventListener('click', (e) => {
                const th = e.target.closest('th[data-sort]');
                if (!th) return;
                const col = th.dataset.sort;
                if (state.dashboardSort.col === col) {
                    state.dashboardSort.dir = state.dashboardSort.dir === 'asc' ? 'desc' : 'asc';
                } else {
                    state.dashboardSort.col = col;
                    state.dashboardSort.dir = 'asc';
                }
                if (state.currentObraId) {
                    UI.renderDashboardStats(state.currentObraId);
                }
            });
        }

        on('dashboard-search-query', 'keyup', UI.updateDashboardObraList);
        on('dashboard-status-filter', 'change', UI.updateDashboardObraList);
        on('dashboard-obra-select', 'change', (e) => UI.renderDashboardStats(e.target.value || null));

        on('registro-search-query', 'keyup', UI.updateRegistroObraList);
        on('registro-status-filter', 'change', UI.updateRegistroObraList);
        const registroObraSelect = $('registro-obra-select');
        if (registroObraSelect) registroObraSelect.addEventListener('change', (e) => {
            const obraId = e.target.value;
            const formCompra = $('form-compra');
            if (formCompra?.obraId) {
                formCompra.obraId.value = obraId || '';
            }
            UI.updateOrcamentoResumo('registro', obraId);
            $('registro-justificativa-wrapper').classList.add('hidden');
            const f = $('form-compra');
            if (f?.justificativa_estouro_orcamento) f.justificativa_estouro_orcamento.required = false;
        });
        const formEditCompraEl = $('form-edit-compra');
        if (formEditCompraEl?.obraId) {
            formEditCompraEl.obraId.addEventListener('change', (e) => {
                const obraId = e.target.value;
                const compraId = formEditCompraEl.id.value;
                UI.updateOrcamentoResumo('edit', obraId, compraId);
                $('edit-justificativa-wrapper').classList.add('hidden');
                formEditCompraEl.justificativa_estouro_orcamento.required = false;
            });
        }

        const bindObraFilhaToggle = (checkboxId, wrapperId) => {
            const checkbox = $(checkboxId);
            const wrapper = $(wrapperId);
            if (!checkbox || !wrapper) return;
            const toggle = () => wrapper.classList.toggle('hidden', !checkbox.checked);
            checkbox.addEventListener('change', toggle);
            toggle();
        };
        bindObraFilhaToggle('obra-filha-toggle', 'obra-filha-wrapper');
        bindObraFilhaToggle('edit-obra-filha', 'obra-edit-filha-wrapper');

        on('relatorio-fornecedor-select', 'change', (e) => UI.renderRelatorioFornecedor(e.target.value || null));
        $('calendar-filter-type')?.addEventListener('change', () => UI.handleCalendarFilterChange());
        $('btn-calendar-prev')?.addEventListener('click', () => UI.shiftCalendarWindow(-1));
        $('btn-calendar-next')?.addEventListener('click', () => UI.shiftCalendarWindow(1));
    }
};

// --- INICIALIZAÇÃO ---
App.init();
