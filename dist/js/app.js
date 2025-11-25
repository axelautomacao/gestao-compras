// js/app.js
import { state } from './state.js';
import { Auth } from './auth.js';
import { Data } from './data.js';
import { UI } from './ui.js';
import { Utils } from './utils.js';
import { AuthMiddleware } from './auth-middleware.js';

// --- Mapeamento de DOM ---
const $ = (id) => document.getElementById(id);

// O Objeto App é o controlador principal
const App = {
    // init AGORA É ASSÍNCRONO
    init: async () => {
        try {
            // Registra plugins do Chart.js
            if (window.ChartDataLabels) {
                Chart.register(ChartDataLabels);
                Chart.defaults.plugins.datalabels.display = false;
            }
            
            // Inicia o tema (Claro/Escuro)
            UI.initTheme(); 
            
            // Liga os botões de Login/Cadastro PRIMEIRO
            App.bindAuthEvents(); 
            
            // Espera a autenticação resolver. Também passamos um changeHandler
            // para reagir a mudanças de auth depois da inicialização.
            const userProfile = await Auth.init((userProfile) => {
                if (userProfile) {
                    App.initializeApp_PostLogin(userProfile);
                } else {
                    App.cleanupOnSignOut();
                    UI.updateUIForRole(); // limpa a UI
                    $('loading-overlay').style.display = 'none';
                    UI.showLoginModal('login');
                }
            });

            if (userProfile) {
                // ****** USUÁRIO ESTÁ LOGADO ******
                // userProfile já está no 'state' graças ao Auth.init()
                App.initializeApp_PostLogin(userProfile);
            } else {
                // ****** USUÁRIO ESTÁ DESLOGADO ******
                UI.updateUIForRole(); // Garante que a UI está limpa (sem usuário)
                $('loading-overlay').style.display = 'none'; // Esconde o loading
                UI.showLoginModal('login'); // Mostra o modal de login
            }

        } catch (err) {
            console.error("Erro na inicialização:", err);
            $('loading-message').textContent = `Erro crítico: ${err.message}`;
            $('loading-message').classList.add('text-red-500');
        }
    },

    // bindAuthEvents agora tem a lógica de UI (try/catch)
    bindAuthEvents: () => {
        try {
            // --- LOGIN ---
            $('form-login').addEventListener('submit', async (e) => { 
                e.preventDefault(); 
                const errorDiv = $('login-error');
                errorDiv.classList.add('hidden'); 
                const form = e.target;
                
                try {
                    await Auth.handleLogin(form.email.value, form.password.value); 
                    // Sucesso! O onAuthStateChanged vai disparar, recarregar o app
                    // e o Auth.init() vai resolver com o perfil.
                    UI.hideLoginModal();
                } catch (err) {
                    // O app.js agora trata o erro de UI (mensagem amigável PT-BR)
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
                }
            });
            
            // --- CADASTRO (SIGNUP) ---
            $('form-signup').addEventListener('submit', async (e) => { 
                e.preventDefault(); 
                const errorDiv = $('signup-error');
                errorDiv.classList.add('hidden'); 
                
                try {
                    await Auth.handleSignUp(e.target.nome.value, e.target.email.value, e.target.password.value);
                    // Sucesso! onAuthStateChanged vai disparar.
                    UI.hideLoginModal();
                } catch (err) {
                    // O app.js agora trata o erro de UI
                    errorDiv.textContent = `Erro: ${err.message}`;
                    errorDiv.classList.remove('hidden');
                }
            });
            
            // --- LOGOUT ---
            $('btn-logout').addEventListener('click', async () => {
                await Auth.handleSignOut();
                // onAuthStateChanged vai disparar, o Auth.init() vai resolver como 'null'
                // e o app.js vai mostrar o modal de login.
            });

            // --- ESQUECI A SENHA ---
            $('btn-forgot-password').addEventListener('click', () => UI.showLoginModal('forgot'));
            $('btn-show-login-from-forgot').addEventListener('click', () => UI.showLoginModal('login'));
            $('form-forgot-password').addEventListener('submit', async (e) => {
                e.preventDefault();
                const successMsg = $('forgot-success');
                const errorMsg = $('forgot-error');
                successMsg.classList.add('hidden');
                errorMsg.classList.add('hidden');

                try {
                    await Auth.handleForgotPassword(e.target.email.value);
                    // O app.js agora trata o sucesso da UI
                    successMsg.textContent = 'Link de redefinição enviado para o seu email!';
                    successMsg.classList.remove('hidden');
                } catch (err) {
                    // O app.js agora trata o erro da UI
                    if (err.code === 'auth/user-not-found') {
                        errorMsg.textContent = 'Email não encontrado no nosso sistema.';
                    } else {
                        errorMsg.textContent = `Erro: ${err.message}`;
                    }
                    errorMsg.classList.remove('hidden');
                }
            });

            // --- BOTÕES DE NAVEGAÇÃO DO MODAL ---
            $('btn-show-signup').addEventListener('click', () => UI.showLoginModal('signup'));
            $('btn-show-login').addEventListener('click', () => UI.showLoginModal('login'));

        } catch (err) {
             console.error("Erro crítico ao ligar eventos de autenticação:", err); 
             $('loading-message').textContent = `Erro crítico (bindAuthEvents): ${err.message}`;
        }
    },
    
    // Esta função agora recebe o perfil do usuário
    initializeApp_PostLogin: (userProfile) => {
        UI.updateUIForRole(); // Atualiza a UI com o perfil
        App.bindGlobalEvents(); // Liga o resto dos botões
        
        // Passa os callbacks de UI para o listener de dados
        Data.listenToCadastros({
            renderObrasPage: UI.renderObrasPage,
            updateDashboardObraList: UI.updateDashboardObraList,
            updateRegistroObraList: UI.updateRegistroObraList,
            refreshCadastroLists: UI.refreshCadastroLists
        });
        
        // Define a página inicial com base no perfil
        const defaultPage = (userProfile.role === 'diretor' || userProfile.role === 'financeiro') ? 'dashboard-geral' : 'dashboard';
        UI.showPage(defaultPage);
        
        $('loading-overlay').style.display = 'none'; // Esconde o loading
    },
    
    // Limpa listeners e caches ao fazer logout para evitar vazamentos
    cleanupOnSignOut: () => {
        try {
            // Desinscreve todos os listeners armazenados em state.listeners
            Object.keys(state.listeners).forEach(key => {
                const fn = state.listeners[key];
                if (typeof fn === 'function') {
                    try { fn(); } catch (err) { console.warn(`Erro ao desinscrever listener ${key}:`, err); }
                    state.listeners[key] = null;
                }
            });

            // Limpa caches para estado inicial
            state.cache.obras = [];
            state.cache.centrosCusto = [];
            state.cache.fornecedores = [];
            state.cache.compradores = [];
            state.currentObraId = null;

            // Esconde a área principal (caso esteja visível)
            try { $('main-layout').classList.add('hidden'); } catch (e) { /* ignore */ }
        } catch (err) {
            console.warn('Erro durante cleanupOnSignOut:', err);
        }
    },
    
    // Esta função só é chamada DEPOIS do login
    bindGlobalEvents: () => {
        // Navegação principal
        $('navigation').addEventListener('click', (e) => {
            const pageId = e.target.closest('button')?.dataset.page;
            if (pageId) UI.showPage(pageId);
        });
        
        // Listener para o Seletor de Tema
        try {
            $('select-theme').addEventListener('change', (e) => UI.applyTheme(e.target.value));
        } catch(err) {
            console.warn("Erro ao ligar o listener do tema:", err);
        }

        // Ações de clique (botões de editar, excluir, ver PDF, etc.)
        document.addEventListener('click', async (e) => {
            const el = e.target.closest('button,a,tr');
            if (!el) return;
            const id = el.dataset.id;
            const path = el.dataset.path;
            const action = el.dataset.action;

            if (action) {
                try {
                    if (action === 'view-pdf') await UI.showPdfModal(path);
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

                    // Lógica de exclusão genérica
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
            
            // Botões específicos
            if (el.id === 'btn-report-buscar') {
                UI.showReportTableLoading(true);
                try {
                    const getSelected = (id) => Array.from($(id).selectedOptions).map(o => o.value);
                    const filters = {
                        dateStart: $('report-filter-date-start').value,
                        dateEnd: $('report-filter-date-end').value,
                        status: $('report-filter-status').value,
                        natureza: $('report-filter-natureza').value,
                        obras: getSelected('report-filter-obra'),
                        fornecedores: getSelected('report-filter-fornecedor'),
                        compradores: getSelected('report-filter-comprador'),
                        searchText: $('report-search-text').value.toLowerCase(),
                        sortCol: state.reportSort.col,
                        sortDir: state.reportSort.dir
                    };
                    const compras = await Data.findCompras(filters);
                    UI.renderReportTable(compras);
                } catch (err) {
                    UI.showToast(err.message, true);
                    UI.renderReportTable([]); 
                }
            }
            
            if (el.id === 'btn-export-csv') {
                try {
                    await Data.exportCSV();
                } catch (err) {
                    UI.showToast(err.message, true);
                }
            }
            if (el.id === 'btn-dashboard-refresh') UI.renderDashboardStats(state.currentObraId);
            if (el.id === 'btn-clear-cc-filter') UI.filterDashboardTableByCC(null);
        });
        
        // Fechamento de Modais
        $('btnConfirmCancel').addEventListener('click', () => $('confirmModal').close());
        $('btnClosePdf').addEventListener('click', () => $('pdfModal').close());
        $('btnEditObraCancel').addEventListener('click', () => $('obraEditModal').close());
        $('btnEditCompraCancel').addEventListener('click', () => {
            $('compraEditModal').close();
            state.currentOrcamentoResumo = null;
        });
        $('btnEditCompradorCancel').addEventListener('click', () => $('compradorEditModal').close());
        $('btnEditFornecedorCancel').addEventListener('click', () => $('fornecedorEditModal').close());
        $('btnEditCentroCustoCancel').addEventListener('click', () => $('centroCustoEditModal').close());

        // Eventos de Formulário (Submit)
        try {
            $('form-obra').addEventListener('submit', async (e) => { 
                e.preventDefault(); 
                try { 
                    await Data.saveObra(e.target); 
                    UI.showToast('Obra salva com sucesso!');
                    e.target.reset();
                } catch (err) { 
                    UI.showToast(`Erro: ${err.message}`, true); 
                }
            });
            $('form-fornecedor').addEventListener('submit', async (e) => { 
                e.preventDefault(); 
                try { 
                    await Data.saveGenericForm(e.target, 'fornecedores'); 
                    UI.showToast('Fornecedor salvo com sucesso!');
                    e.target.reset();
                } catch (err) { 
                    UI.showToast(`Erro: ${err.message}`, true); 
                }
            });
            $('form-centro-custo').addEventListener('submit', async (e) => { 
                e.preventDefault(); 
                try { 
                    await Data.saveGenericForm(e.target, 'centrosCusto'); 
                    UI.showToast('Centro de Custo salvo com sucesso!');
                    e.target.reset();
                } catch (err) { 
                    UI.showToast(`Erro: ${err.message}`, true); 
                }
            });
            $('form-comprador').addEventListener('submit', async (e) => { 
                e.preventDefault(); 
                try { 
                    await Data.saveGenericForm(e.target, 'compradores'); 
                    UI.showToast('Comprador salvo com sucesso!');
                    e.target.reset();
                } catch (err) { 
                    UI.showToast(`Erro: ${err.message}`, true); 
                }
            });
            $('form-compra').addEventListener('submit', async (e) => { 
                e.preventDefault();
                const form = e.target;
                try {
                    UI.showToast("Enviando arquivos, aguarde...", false);
                    await Data.saveCompra(form);
                    UI.showToast('Compra registrada com sucesso!');
                    form.reset();
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
                }
            });

            $('form-edit-obra').addEventListener('submit', async (e) => { 
                e.preventDefault(); 
                try { 
                    await Data.updateObra(e.target); 
                    UI.showToast('Obra atualizada!');
                    $('obraEditModal').close();
                } catch (err) { 
                    UI.showToast(`Erro: ${err.message}`, true); 
                }
            });
            $('form-edit-compra').addEventListener('submit', async (e) => { 
                e.preventDefault(); 
                const form = e.target;
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
                }
            });
            $('form-edit-comprador').addEventListener('submit', async (e) => { 
                e.preventDefault(); 
                try { 
                    await Data.updateGeneric(e.target, 'compradores'); 
                    UI.showToast('Cadastro atualizado!');
                    $('compradorEditModal').close();
                } catch (err) { 
                    UI.showToast(`Erro: ${err.message}`, true); 
                }
            });
            $('form-edit-fornecedor').addEventListener('submit', async (e) => { 
                e.preventDefault(); 
                try { 
                    await Data.updateGeneric(e.target, 'fornecedores'); 
                    UI.showToast('Cadastro atualizado!');
                    $('fornecedorEditModal').close();
                } catch (err) { 
                    UI.showToast(`Erro: ${err.message}`, true); 
                }
            });
            $('form-edit-centro-custo').addEventListener('submit', async (e) => { 
                e.preventDefault(); 
                try { 
                    await Data.updateGeneric(e.target, 'centrosCusto'); 
                    UI.showToast('Cadastro atualizado!');
                    $('centroCustoEditModal').close();
                } catch (err) { 
                    UI.showToast(`Erro: ${err.message}`, true); 
                }
            });
        } catch (err) { console.warn("Erro ao anexar listeners de formulário:", err); }
        
        // Listener do Checkbox de Estoque
        try {
            const formCompra = $('form-compra');
            if (formCompra) {
                const checkEstoque = formCompra.elements['retirada_estoque']; 
                if (checkEstoque) {
                    checkEstoque.addEventListener('change', (e) => {
                        UI.toggleEstoqueMode(formCompra, e.target.checked); 
                    });
                } else {
                    console.warn("Elemento 'retirada_estoque' não encontrado no 'form-compra'.");
                }
            } else {
                console.warn("Formulário 'form-compra' não encontrado.");
            }
        } catch (err) {
            console.warn("Erro ao ligar o listener de retirada de estoque:", err);
        }
        
        // Eventos de 'Change'
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
        
        // Eventos de 'Input' (Máscaras)
        document.addEventListener('input', (e) => {
            if (e.target.dataset.mask === 'currency') {
                e.target.value = Utils.formatCurrencyInput(e.target.value);
            }
            if (e.target.dataset.mask === 'cnpj') {
                e.target.value = Utils.formatCnpjInput(e.target.value);
            }
        });

        // Ordenação da Tabela de Relatório
        document.querySelector('#page-relatorio-compras thead').addEventListener('click', (e) => {
            const th = e.target.closest('th');
            if (!th || !th.dataset.sort) return;
            
            const newCol = th.dataset.sort;
            document.querySelectorAll('#page-relatorio-compras thead th[data-sort]').forEach(t => {
                if (t !== th) t.innerHTML = t.innerHTML.replace(' ↑', '').replace(' ↓', '');
            });

            if (state.reportSort.col === newCol) {
                state.reportSort.dir = state.reportSort.dir === 'asc' ? 'desc' : 'asc';
            } else {
                state.reportSort.col = newCol;
                state.reportSort.dir = 'asc';
            }
            
            th.innerHTML = th.innerHTML.replace(' ↑', '').replace(' ↓', '');
            th.innerHTML += state.reportSort.dir === 'asc' ? ' ↑' : ' ↓';

            $('btn-report-buscar').click();
        });

        // Filtros e Selects de Dashboard
        $('dashboard-search-query').addEventListener('keyup', UI.updateDashboardObraList);
        $('dashboard-status-filter').addEventListener('change', UI.updateDashboardObraList);
        $('dashboard-obra-select').addEventListener('change', (e) => UI.renderDashboardStats(e.target.value || null));
        
        // Filtros e Selects de Registro
        $('registro-search-query').addEventListener('keyup', UI.updateRegistroObraList);
        $('registro-status-filter').addEventListener('change', UI.updateRegistroObraList);
        $('registro-obra-select').addEventListener('change', (e) => {
            const obraId = e.target.value;
            UI.updateOrcamentoResumo('registro', obraId);
            $('registro-justificativa-wrapper').classList.add('hidden');
            $('form-compra').justificativa_estouro_orcamento.required = false;
        });
        $('form-edit-compra').obraId.addEventListener('change', (e) => {
            const obraId = e.target.value;
            const compraId = $('form-edit-compra').id.value;
            UI.updateOrcamentoResumo('edit', obraId, compraId);
            $('edit-justificativa-wrapper').classList.add('hidden');
            $('form-edit-compra').justificativa_estouro_orcamento.required = false;
        });

        // 
        // / / / / / / / / / / / / / / / / / / / / / / /
        // / /   AQUI ESTÁ A LINHA QUE FALTAVA       / /
        // / / / / / / / / / / / / / / / / / / / / / /
        //
        // Relatório Fornecedor
        $('relatorio-fornecedor-select').addEventListener('change', (e) => UI.renderRelatorioFornecedor(e.target.value || null));
        //
        // / / / / / / / FIM DA ALTERAÇÃO / / / / / / /
        //
    }
};

// --- INICIALIZAÇÃO ---
App.init(); // Inicia o App