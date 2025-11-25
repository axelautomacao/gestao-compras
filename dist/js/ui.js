// js/ui.js
import { state } from './state.js';
import { Utils } from './utils.js';
import { Data } from './data.js'; // Importamos Data para funções específicas
import { NotificationManager } from './notification-manager.js';

// --- Mapeamento de DOM ---
// Usamos uma função $ para encurtar document.getElementById
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

let barChart, pieChart, donutChart;
let barChartGeral, pieChartGeral, lineChartGeral;

// --- Objeto UI ---
// O objeto UI contém todos os métodos de renderização
export const UI = {

    // (Item 3): Lógica do Tema
    initTheme: () => {
        const theme = localStorage.getItem('theme') || 'system';
        $('select-theme').value = theme;
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
        
        // A 'role' 'administrador' tem acesso a tudo que o 'diretor' tem
        const roles = ['obra', 'comprador', 'financeiro', 'diretor'];
        if (role === 'administrador') {
            roles.push('administrador');
        } else {
            roles.push(role);
        }

        const allNavButtons = [
            { id: 'dashboard-geral', label: 'Dashboard Geral', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3M3.75 3l-1.5 1.5M3.75 3h16.5M12 3c0 1.657-1.343 3-3 3S6 4.657 6 3m6 0c0 1.657 1.343 3 3 3s3-1.343 3-3m-3.75 6.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>`, roles: ['diretor', 'financeiro'] },
            { id: 'dashboard', label: 'Dashboard p/ Obra', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>`, roles: ['diretor', 'comprador', 'obra', 'financeiro'] },
            { id: 'obras', label: 'Ver Obras (Legacy)', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 21C21.3284 21 22.5 19.8284 22.5 18V5C22.5 3.17157 21.3284 2 19.5 2H8.5C6.67157 2 5.5 3.17157 5.5 5V18C5.5 19.8284 6.67157 21 8.5 21H19.5zM9 7h6m-6 4h6m-6 4h6" /></svg>`, roles: ['diretor', 'comprador', 'obra'] },
            { id: 'registro', label: 'Registrar Compra', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.5 2.5m2.5-2.5l-2.828-2.828M10.5 21.672L9.142 16.6m0 0l2.5 2.5m-2.5-2.5l2.828-2.828m0 0l-2.828 2.828m0 0L6.32 19.34m0 0l.928.928M3.75 21V9.75A2.25 2.25 0 016 7.5h12A2.25 2.25 0 0120.25 9.75V21M3.75 21H6m14.25 0H18m0 0l-2.25-2.25M3.75 21l-2.25-2.25M12 11.25V15" /></svg>`, roles: ['diretor', 'comprador'] },
            { id: 'relatorio-compras', label: 'Rel. Compras', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>`, roles: ['diretor', 'comprador', 'financeiro'] }, 
            { id: 'relatorios-fornecedor', label: 'Rel. Fornecedor', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-4.682 2.72a.75.75 0 01-.727 0l-4.682-2.72a3 3 0 01-4.682 2.72 9.094 9.094 0 013.741.479m4.682-2.72a9.094 9.094 0 013.741-.479m0 0a48.102 48.102 0 00-3.741-.479m-4.682 2.72c.52.304 1.076.552 1.67.727m-1.67-.727a48.105 48.105 0 01-3.741.479m0 0c-.596.343-1.22.61-1.871.791m0 0a9.094 9.094 0 01-3.741-.479m0 0c.596.343 1.22.61 1.871.791M12 12.75a3 3 0 100-6 3 3 0 000 6z" /></svg>`, roles: ['diretor', 'comprador', 'financeiro'] },
            
            // (Item 1): Links de Cadastros Separados
            { id: 'separator', type: 'separator', roles: ['diretor'] }, // Separador visual
            { id: 'cadastro-obras', label: 'Cadastrar Obras', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-1.5l-2.625 2.625a.375.375 0 01-.53 0l-2.625-2.625m0-7.5l2.625 2.625a.375.375 0 010 .53l-2.625 2.625m7.5-3l2.625 2.625a.375.375 0 010 .53l-2.625 2.625M15 12l-2.625 2.625a.375.375 0 01-.53 0L9.25 12M4.5 8.25l2.625 2.625a.375.375 0 010 .53L4.5 14.25" /></svg>`, roles: ['diretor', 'comprador', 'obra'] }, 
            { id: 'cadastro-compradores', label: 'Cad. Compradores', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>`, roles: ['diretor'] },
            { id: 'cadastro-fornecedores', label: 'Cad. Fornecedores', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-6 0V6a1.5 1.5 0 013 0v12.75m3-12.75V6a1.5 1.5 0 013 0v12.75m-3-12.75h.008v.008H12v-.008z" /></svg>`, roles: ['diretor'] },
            { id: 'cadastro-centros-custo', label: 'Cad. Centros Custo', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.75A.75.75 0 013 4.5h.75m0 0h.75A.75.75 0 014.5 6v.75m0 0v.75A.75.75 0 013.75 8.25h-.75m0 0H3A.75.75 0 012.25 7.5v-.75M6 15V7.5a2.25 2.25 0 012.25-2.25h3.75a2.25 2.25 0 012.25 2.25V15m-6 0h6m-6 0v6A2.25 2.25 0 008.25 22.5h7.5A2.25 2.25 0 0018 21V15m-6 0h6" /></svg>`, roles: ['diretor'] },
        ];
        
        // Botão de Configurações (Item 2)
        const settingsButton = { id: 'configuracoes', label: 'Configurações', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-1.003 1.11-1.226l.28-.1c.792-.286 1.663.111 1.95.898l.04.1c.09.542.56 1.003 1.11 1.226l.28.1c.792.286 1.663-.111 1.95-.898l.04-.1c.287-.787 1.158-1.184 1.95-.898l.28.1c.548.223 1.02.684 1.11 1.226l.04.242c.287.787-.111 1.663-.898 1.95l-.1.04c-.548.223-1.02.684-1.11 1.226l-.04.242c-.287.787.111 1.663.898 1.95l.1.04c.787.287 1.184 1.158.898 1.95l-.1.28c-.223.548-.684 1.02-1.226 1.11l-.242.04c-.787.287-1.663-.111-1.95-.898l-.04-.1c-.223-.548-.684-1.02-1.226-1.11l-.242-.04c-.787-.287-1.663.111-1.95-.898l-.04.1c-.287.787-1.158 1.184-1.95-.898l-.28-.1c-.548-.223-1.02-.684-1.11-1.226l-.04-.242c-.287-.787.111-1.663.898 1.95l.1-.04c.548-.223 1.02.684 1.11-1.226l.04-.242c.287-.787-.111-1.663-.898-1.95l-.1-.04c-.787-.287-1.184-1.158-.898-1.95l.1-.28c.223-.548.684-1.02-1.226-1.11l.242-.04c.787-.287 1.663.111 1.95.898l.04.1c.223.548.684 1.02 1.226 1.11l.242.04c.787.287 1.663.111 1.95-.898l.04-.1c.287-.787 1.158-1.184 1.95-.898l.28.1c.548.223 1.02.684 1.11 1.226l.04.242c.287.787-.111 1.663-.898 1.95l-.1.04c-.548-.223-1.02.684-1.11-1.226L12 18.397l-.04-.242c-.287-.787.111-1.663.898-1.95l.1-.04c.787-.287 1.184-1.158.898-1.95l-.1-.28c-.223-.548-.684-1.02-1.226-1.11l-.242-.04c-.787-.287-1.663-.111-1.95.898l-.04.1c-.223-.548-.684-1.02-1.226-1.11l-.242-.04c-.787-.287-1.663.111-1.95-.898l-.04-.1c-.287-.787-1.158 1.184-1.95-.898l-.28.1c-.548-.223-1.02-.684-1.11-1.226L3.94 9.657l-.04-.242c-.287-.787.111-1.663.898-1.95l.1-.04c.548-.223 1.02.684 1.11-1.226l.04-.242c.287-.787-.111-1.663-.898-1.95l-.1-.04c-.787-.287-1.184-1.158-.898-1.95l.1-.28c.223-.548.684-1.02 1.226-1.11l.242-.04c.787-.287 1.663.111 1.95.898l.04.1c.223.548.684 1.02 1.226 1.11l.242.04c.787-.287 1.663.111 1.95-.898l.04-.1c.287-.787 1.158-1.184 1.95-.898l.28.1c.548-.223 1.02.684 1.11 1.226l.04.242zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" /></svg>`, roles: ['diretor', 'comprador', 'obra', 'financeiro'] };

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
        if (state.currentPage !== pageId) {
            state.previousPage = state.currentPage;
        }
        
        state.currentPage = pageId;
        pages.forEach(page => page.classList.toggle('active', page.id === `page-${pageId}`));
        UI.renderNav();
        
        // Limpa o listener de dashboard da obra se sairmos da página
        if (pageId !== 'dashboard' && state.listeners.dashboardCompras) {
            state.listeners.dashboardCompras(); // Executa a função de unsubscribe
            state.listeners.dashboardCompras = null;
        }
        
        if (pageId !== 'dashboard') {
            $('btn-dashboard-refresh').classList.add('hidden');
            $('dashboard-analysis-title').classList.add('hidden');
        }
        
        if (pageId !== 'registro' && pageId !== 'relatorio-compras') {
            state.currentOrcamentoResumo = null;
        }
        
        // Remove o "Voltar" das novas páginas de cadastro
        const voltarBtnWrapper = $('cadastros-voltar-btn-wrapper');
        if (voltarBtnWrapper) {
            voltarBtnWrapper.classList.add('hidden');
        }

        // Funções de renderização de página
        if (pageId === 'dashboard-geral') UI.renderDashboardGeral();
        if (pageId === 'dashboard') {
            UI.updateDashboardObraList();
            if (state.currentObraId) {
                UI.renderDashboardStats(state.currentObraId);
            }
        }
        if (pageId === 'obras') UI.renderObrasPage(); // Mantém a página antiga, se necessário
        if (pageId === 'registro') UI.renderRegistroPage();
        if (pageId === 'relatorio-compras') UI.renderRelatorioComprasPage();
        if (pageId === 'relatorios-fornecedor') UI.renderRelatoriosFornecedorPage();
        
        // (Item 1): Renderiza as novas páginas
        if (pageId === 'cadastro-obras') UI.renderObrasPage(); // Reutiliza a função
        if (pageId === 'cadastro-compradores') UI.refreshCadastroLists();
        if (pageId === 'cadastro-fornecedores') UI.refreshCadastroLists();
        if (pageId === 'cadastro-centros-custo') UI.refreshCadastroLists();

        // (Item 2): Renderiza a página de Configurações
        if (pageId === 'configuracoes') {
            // (A lógica de carregar utilizadores virá depois)
        }
    },
    
    // (Item 1): Atualiza as listas nos locais certos
    refreshCadastroLists: () => {
        const podeEditar = state.currentUser?.role === 'diretor' || state.currentUser?.role === 'comprador';
        const podeExcluir = state.currentUser?.role === 'diretor';

        const renderList = (elId, data, type, formatter) => {
            const el = $(elId);
            if (!el) return; // Se a lista não estiver na página atual, ignora
            
            el.innerHTML = data.length > 0 
                ? data.map(item => {
                    const editButton = podeEditar ? `<button data-action="edit-${type}" data-id="${item.id}" class="btn-secondary btn-small">Editar</button>` : '';
                    const deleteButton = podeExcluir ? `<button data-action="delete-${type}" data-id="${item.id}" class="btn-danger btn-small">Excluir</button>` : '';
                    return `
                    <li class="cadastro-list-item">
                        <span class="truncate pr-2">${formatter(item)}</span>
                        <span class="space-x-2 flex-shrink-0">${editButton} ${deleteButton}</span>
                    </li>`
                }).join('')
                : `<li class="text-[var(--text-secondary)]">Nenhum item cadastrado.</li>`;
        };

        renderList('lista-fornecedores', state.cache.fornecedores, 'fornecedor', f => `${Utils.escapeHtml(f.nome)} ${f.cnpj ? `(${Utils.escapeHtml(f.cnpj)})` : ''}`);
        renderList('lista-centros-custo', state.cache.centrosCusto, 'centro-custo', c => `${c.codigo ? `[${Utils.escapeHtml(c.codigo)}]` : ''} ${Utils.escapeHtml(c.nome)}`);
        renderList('lista-compradores', state.cache.compradores, 'comprador', c => `${Utils.escapeHtml(c.nome)} ${c.email ? `(${Utils.escapeHtml(c.email)})` : ''}`);
    },
    
    refreshFormDropdowns: async (formId) => {
        const form = $(formId);
        if (!form) return;

        const renderSelect = (el, data, formatter, defaultOption) => {
            if (!el) return;
            const currentValue = el.value;
            el.innerHTML = `<option value="">${defaultOption}</option>` + data.map(formatter).join('');
            el.value = currentValue;
        };
        
        renderSelect(form.centroCustoId, state.cache.centrosCusto, c => `<option value="${c.id}">${Utils.escapeHtml(c.nome)}</option>`, 'Selecione o Centro de Custo *');
        renderSelect(form.fornecedorId, state.cache.fornecedores, f => `<option value="${f.id}">${Utils.escapeHtml(f.nome)}</option>`, 'Selecione o Fornecedor');
        renderSelect(form.compradorId, state.cache.compradores, c => `<option value="${c.id}">${Utils.escapeHtml(c.nome)}</option>`, 'Selecione o Comprador *');
    },

    // --- Renderização de Páginas Específicas ---

    updateDashboardObraList: () => {
        const query = $('dashboard-search-query').value.toLowerCase();
        const status = $('dashboard-status-filter').value;
        let obras = state.cache.obras;
        
        if (status === 'Ativas') { obras = obras.filter(o => o.status !== 'Finalizada'); }
        else if (status !== 'Todas') { obras = obras.filter(o => o.status === status); }
        if (query) { obras = obras.filter(o => o.nome_obra.toLowerCase().includes(query) || o.numero_os.toLowerCase().includes(query)); }
        
        const select = $('dashboard-obra-select');
        select.innerHTML = `<option value="">-- Selecione uma Obra (${obras.length}) --</option>` +
            obras.map(o => `<option value="${o.id}">${Utils.escapeHtml(o.nome_obra)} (${Utils.escapeHtml(o.numero_os)})</option>`).join('');
        
        if (state.currentObraId && obras.some(o => o.id === state.currentObraId)) { 
            select.value = state.currentObraId; 
        } else { 
            select.value = ""; 
            state.currentObraId = null; 
            $('dashboard-content').classList.add('hidden'); 
            $('dashboard-analysis-title').classList.add('hidden');
            $('btn-dashboard-refresh').classList.add('hidden');
        }
    },

    updateRegistroObraList: () => {
        const query = $('registro-search-query').value.toLowerCase();
        const status = $('registro-status-filter').value;
        let obras = state.cache.obras;

        if (status === 'Ativas') { obras = obras.filter(o => o.status !== 'Finalizada'); }
        if (query) { obras = obras.filter(o => o.nome_obra.toLowerCase().includes(query) || o.numero_os.toLowerCase().includes(query)); }
        
        const select = $('registro-obra-select');
        select.innerHTML = `<option value="">-- Selecione uma Obra (${obras.length}) --</option>` +
            obras.map(o => `<option value="${o.id}">${Utils.escapeHtml(o.nome_obra)} (${Utils.escapeHtml(o.numero_os)})</option>`).join('');
    },

    renderDashboardStats: async (obraId) => {
        // Se não houver obra selecionada, limpa a área
        if (!obraId) {
            if (state.listeners.dashboardCompras) {
                try { state.listeners.dashboardCompras(); } catch(e){}
                state.listeners.dashboardCompras = null;
            }
            state.currentObraId = null;
            $('dashboard-content').classList.add('hidden');
            $('dashboard-analysis-title').classList.add('hidden');
            $('btn-dashboard-refresh').classList.add('hidden');
            return;
        }

        state.currentObraId = obraId;
        const obra = state.cache.obras.find(o => o.id === obraId);
        $('dashboard-analysis-title').textContent = obra ? `${obra.nome_obra} (${obra.numero_os})` : 'Análise da Obra';
        $('dashboard-analysis-title').classList.remove('hidden');
        $('dashboard-content').classList.remove('hidden');
        $('btn-dashboard-refresh').classList.remove('hidden');

        // Atualiza resumo de orçamento (kpis financeiros)
        try {
            const resumo = await Data.getResumoOrcamento(obraId);
            state.currentOrcamentoResumo = resumo;
            $('kpi-orcado').textContent = Utils.formatCurrency(resumo.orcado);
            $('kpi-gasto').textContent = Utils.formatCurrency(resumo.comprometido);
            const balanco = resumo.limite_real - resumo.comprometido;
            $('kpi-balanco').textContent = Utils.formatCurrency(balanco);
            $('kpi-balanco').className = balanco < 0 ? 'text-2xl font-bold text-red-600' : 'text-2xl font-bold text-green-700';
            const percent = resumo.limite_real > 0 ? (resumo.comprometido / resumo.limite_real) * 100 : 0;
            $('kpi-percent').textContent = `${percent.toFixed(1)}%`;
        } catch (err) {
            console.error('Erro ao atualizar resumo do orcamento:', err);
        }

        // Remove listener anterior se existir
        if (state.listeners.dashboardCompras) {
            try { state.listeners.dashboardCompras(); } catch(e){}
            state.listeners.dashboardCompras = null;
        }

        // Inscreve para compras da obra e atualiza tabelas/indicadores/graficos
        state.listeners.dashboardCompras = Data.listenToCompras(obraId, (compras) => {
            try {
                // KPIs de contagem
                const total = compras.length;
                const aguardando = compras.filter(c => c.status_compra !== 'Recebido' && !!c.previsao_entrega).length;
                const recebidas = compras.filter(c => c.status_compra === 'Recebido').length;
                const hoje = new Date(); hoje.setHours(0,0,0,0);
                const atraso = compras.filter(c => {
                    if (c.status_compra === 'Recebido') return false;
                    if (!c.previsao_entrega) return false;
                    const previsao = new Date(c.previsao_entrega + 'T12:00:00');
                    return previsao < hoje;
                }).length;

                $('kpi-qt-total').textContent = total;
                $('kpi-qt-aguardando').textContent = aguardando;
                $('kpi-qt-recebidas').textContent = recebidas;
                $('kpi-qt-atraso').textContent = atraso;

                // Monta tabela de histórico
                const tableBody = $('dashboard-table-body');
                const compradorMap = new Map(state.cache.compradores.map(c => [c.id, c.nome]));
                const obraMap = new Map(state.cache.obras.map(o => [o.id, `${o.nome_obra} (${o.numero_os})`]));
                tableBody.innerHTML = compras.length === 0 ? `<tr><td colspan="9" class="p-4 text-center text-gray-500">Nenhuma compra registrada para esta obra.</td></tr>`
                    : compras.map(c => `
                        <tr class="text-sm">
                            <td class="px-4 py-2">${Utils.renderStatusBadge(c.status_compra, c.previsao_entrega)}</td>
                            <td class="px-4 py-2">${Utils.fmtBR(c.data_recebimento)}</td>
                            <td class="px-4 py-2 font-medium">${Utils.escapeHtml(c.numero_nf)}</td>
                            <td class="px-4 py-2">${Utils.formatCurrency(c.valor_total)}</td>
                            <td class="px-4 py-2">${Utils.escapeHtml(compradorMap.get(c.compradorId)) || 'N/D'}</td>
                            <td class="px-4 py-2">${Utils.escapeHtml((state.cache.centrosCusto.find(cc => cc.id === c.centroCustoId) || {}).nome) || 'N/D'}</td>
                            <td class="px-4 py-2">${Utils.fmtBR(c.previsao_entrega)}</td>
                            <td class="px-4 py-2">${c.pdf_nf_path ? `<button data-action="view-pdf" data-path="${c.pdf_nf_path}" class="text-blue-600 hover:underline">NF-e</button>` : ''}${c.pdf_cte_path ? `<button data-action="view-pdf" data-path="${c.pdf_cte_path}" class="text-blue-600 hover:underline ml-2">CT-e</button>` : ''}</td>
                            <td class="px-4 py-2 space-x-2"><button data-action="edit-compra" data-id="${c.id}" class="btn-secondary btn-small">Editar</button><button data-action="delete-compra" data-id="${c.id}" class="btn-danger btn-small">Excluir</button></td>
                        </tr>
                    `).join('');

                // Gráficos: destruir existentes
                if (barChart) { try { barChart.destroy(); } catch(e){} barChart = null; }
                if (pieChart) { try { pieChart.destroy(); } catch(e){} pieChart = null; }
                if (donutChart) { try { donutChart.destroy(); } catch(e){} donutChart = null; }

                // Bar chart: últimos 10 compras por valor
                const recent = compras.slice().sort((a,b) => (b.data_emissao || '').localeCompare(a.data_emissao || '')).slice(0,10).reverse();
                const barLabels = recent.map(c => c.numero_nf || Utils.fmtBR(c.data_emissao));
                const barData = recent.map(c => c.valor_total || 0);
                const barCtx = document.getElementById('barChart');
                if (barCtx) {
                    barChart = new Chart(barCtx.getContext('2d'), { type: 'bar', data: { labels: barLabels, datasets: [{ label: 'Valor', data: barData, backgroundColor: '#3b82f6' }] }, options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } } });
                }

                // Pie chart: natureza
                const naturezaMap = new Map();
                compras.forEach(c => { const k = c.natureza_compra || 'Outros'; naturezaMap.set(k, (naturezaMap.get(k) || 0) + (c.valor_total || 0)); });
                const pieLabels = Array.from(naturezaMap.keys());
                const pieDataArr = Array.from(naturezaMap.values());
                const pieCtx = document.getElementById('pieChart');
                if (pieCtx) {
                    pieChart = new Chart(pieCtx.getContext('2d'), { type: 'doughnut', data: { labels: pieLabels, datasets: [{ data: pieDataArr, backgroundColor: ['#10b981','#f59e0b','#ef4444','#8b5cf6'] }] }, options: { responsive: true, plugins: { legend: { position: 'bottom' } } } });
                }

                // Donut chart: centros de custo
                const ccMap = new Map(state.cache.centrosCusto.map(cc => [cc.id, cc.nome]));
                const centros = new Map();
                compras.forEach(c => { const k = c.centroCustoId || 'N/D'; centros.set(k, (centros.get(k) || 0) + (c.valor_total || 0)); });
                const donutLabels = Array.from(centros.keys()).map(k => ccMap.get(k) || 'N/D');
                const donutDataArr = Array.from(centros.values());
                const donutCtx = document.getElementById('donutChart');
                if (donutCtx) {
                    donutChart = new Chart(donutCtx.getContext('2d'), { type: 'pie', data: { labels: donutLabels, datasets: [{ data: donutDataArr, backgroundColor: donutLabels.map((_,i) => ['#ef4444','#f97316','#f59e0b','#10b981','#3b82f6','#6366f1'][i%6]) }] }, options: { responsive: true, plugins: { legend: { position: 'right' } } } });
                }

            } catch (err) {
                console.error('Erro ao renderizar compras da obra:', err);
            }
        });
    },

    // (Item 1): Esta função agora renderiza a tabela em DOIS lugares
    renderObrasPage: () => {
        const podeEditar = state.currentUser?.role === 'diretor' || state.currentUser?.role === 'comprador' || state.currentUser?.role === 'obra';
        const podeExcluir = state.currentUser?.role === 'diretor';

        const obras = state.cache.obras;
        
        const tableHTML = obras.length === 0 
            ? `<tr><td colspan="5" class="p-4 text-center text-[var(--text-secondary)]">Nenhuma obra cadastrada.</td></tr>`
            : obras.map(o => {
                const statusOptions = ['Não Iniciada', 'Em Andamento', 'Finalizada'].map(s => `<option value="${s}" ${s === o.status ? 'selected' : ''}>${s}</option>`).join('');
                
                const editButton = podeEditar 
                    ? `<button data-action="edit-obra" data-id="${o.id}" class="btn-secondary btn-small">Editar</button>` 
                    : `<button class="btn-secondary btn-small opacity-50 cursor-not-allowed" disabled>Editar</button>`;
                const deleteButton = podeExcluir
                    ? `<button data-action="delete-obra" data-id="${o.id}" class="btn-danger btn-small">Excluir</button>`
                    : ``; 

                return `
                    <tr class="text-sm">
                        <td class="px-4 py-2 font-medium">${Utils.escapeHtml(o.nome_obra)}</td>
                        <td class="px-4 py-2">${Utils.escapeHtml(o.numero_os)}</td>
                        <td class="px-4 py-2">${Utils.escapeHtml(o.cliente) || 'N/D'}</td>
                        <td class="px-4 py-2"><select data-action="change-obra-status" data-id="${o.id}" class="input !py-1 !px-2" ${!podeEditar ? 'disabled' : ''}>${statusOptions}</select></td>
                        <td class="px-4 py-2 space-x-2">${editButton}${deleteButton}</td>
                    </tr>`;
            }).join('');
        
        const fullTable = `
            <table class="min-w-full divide-y divide-[var(--border-color)]">
                <thead class="bg-gray-50"><tr>
                    <th class="px-4 py-2 text-left text-xs font-medium text-[var(--text-secondary)] uppercase">Nome da Obra</th>
                    <th class="px-4 py-2 text-left text-xs font-medium text-[var(--text-secondary)] uppercase">Número O.S.</th>
                    <th class="px-4 py-2 text-left text-xs font-medium text-[var(--text-secondary)] uppercase">Cliente</th>
                    <th class="px-4 py-2 text-left text-xs font-medium text-[var(--text-secondary)] uppercase">Status</th>
                    <th class="px-4 py-2 text-left text-xs font-medium text-[var(--text-secondary)] uppercase">Ações</th>
                </tr></thead>
                <tbody class="divide-y divide-[var(--border-color)]">${tableHTML}</tbody>
            </table>`;
        
        // Renderiza na página antiga (se ela existir)
        const oldTableBody = $('obras-table-body');
        if (oldTableBody) oldTableBody.innerHTML = tableHTML;
        
        // Renderiza na nova página de cadastro (se ela existir)
        const newTableWrapper = $('obras-table-wrapper');
        if (newTableWrapper) newTableWrapper.innerHTML = fullTable;
    },

    renderDashboardGeral: async () => {
        try {
            const geralData = await Data.getDashboardGeralData();

            // KPIs
            const kpiObras = $('kpi-geral-obras');
            const kpiOrc = $('kpi-geral-orcamento');
            const kpiGasto = $('kpi-geral-gasto');
            const kpiPercent = $('kpi-geral-percent');
            if (kpiObras) kpiObras.textContent = geralData.kpis.obrasAtivas || 0;
            if (kpiOrc) kpiOrc.textContent = Utils.formatCurrency(geralData.kpis.orcamentoTotal || 0);
            if (kpiGasto) kpiGasto.textContent = Utils.formatCurrency(geralData.kpis.comprometidoTotal || 0);
            if (kpiPercent) kpiPercent.textContent = `${(geralData.kpis.percentMedioUso || 0).toFixed(1)}%`;

            // Charts: destruir se existirem
            if (barChartGeral) { try { barChartGeral.destroy(); } catch(e){} barChartGeral = null; }
            if (pieChartGeral) { try { pieChartGeral.destroy(); } catch(e){} pieChartGeral = null; }
            if (lineChartGeral) { try { lineChartGeral.destroy(); } catch(e){} lineChartGeral = null; }

            // Bar chart (Obras percentuais)
            const barCtx = document.getElementById('barChartGeral');
            if (barCtx && geralData.obrasChart.labels.length) {
                barChartGeral = new Chart(barCtx.getContext('2d'), {
                    type: 'bar',
                    data: {
                        labels: geralData.obrasChart.labels,
                        datasets: [{ label: '% Orçamento', data: geralData.obrasChart.data.map(v => Number(v.toFixed ? v.toFixed(2) : v)), backgroundColor: '#3b82f6' }]
                    },
                    options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, ticks: { callback: v => v + '%' } } } }
                });
            }

            // Pie / Donut chart (natureza)
            const pieCtx = document.getElementById('pieChartGeral');
            if (pieCtx) {
                pieChartGeral = new Chart(pieCtx.getContext('2d'), {
                    type: 'doughnut',
                    data: { labels: geralData.naturezaChart.labels, datasets: [{ data: geralData.naturezaChart.data, backgroundColor: ['#10b981','#f59e0b','#ef4444'] }] },
                    options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
                });
            }

            // Line chart (meses)
            const lineCtx = document.getElementById('lineChartGeral');
            if (lineCtx && geralData.mesesChart.labels.length) {
                lineChartGeral = new Chart(lineCtx.getContext('2d'), {
                    type: 'line',
                    data: { labels: geralData.mesesChart.labels, datasets: [{ label: 'Gastos', data: geralData.mesesChart.data, borderColor: '#6366f1', backgroundColor: 'rgba(99,102,241,0.1)', fill: true }] },
                    options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
                });
            }
        } catch (err) {
            console.error('[UI] Erro ao renderizar Dashboard Geral:', err);
            UI.showToast('Erro ao carregar Dashboard Geral. Veja o console.', true);
        }
    },

    renderRelatorioComprasPage: () => {
        const renderMultiSelect = (elId, data, formatter) => { $(elId).innerHTML = data.map(formatter).join(''); };
        renderMultiSelect('report-filter-obra', state.cache.obras, o => `<option value="${o.id}">${Utils.escapeHtml(o.nome_obra)}</option>`);
        renderMultiSelect('report-filter-fornecedor', state.cache.fornecedores, f => `<option value="${f.id}">${Utils.escapeHtml(f.nome)}</option>`);
        renderMultiSelect('report-filter-comprador', state.cache.compradores, c => `<option value="${c.id}">${Utils.escapeHtml(c.nome)}</option>`);
        $('report-table-body').innerHTML = `<tr><td colspan="9" class="p-4 text-center text-[var(--text-secondary)]">Use os filtros e clique em "Buscar Compras".</td></tr>`;
    },

    renderRelatoriosFornecedorPage: () => {
        const select = $('relatorio-fornecedor-select');
        if (!select) return;
        const current = select.value;
        select.innerHTML = `<option value="">Selecione um fornecedor</option>` +
            state.cache.fornecedores
                .map(f => `<option value="${f.id}">${Utils.escapeHtml(f.nome)}</option>`)
                .join('');
        select.value = current && state.cache.fornecedores.some(f => f.id === current) ? current : '';
        $('relatorio-fornecedor-content').classList.add('hidden');
        $('relatorio-fornecedor-table-body').innerHTML = '';
    },

    renderRegistroPage: () => {
        UI.refreshFormDropdowns('form-compra');
        UI.updateRegistroObraList();
        $('registro-orcamento-resumo').classList.add('hidden');
        $('registro-justificativa-wrapper').classList.add('hidden');
        $('form-compra').justificativa_estouro_orcamento.required = false;
        const form = $('form-compra');
        if (form?.elements['retirada_estoque']) {
            form.elements['retirada_estoque'].checked = false;
        }
    },

    toggleEstoqueMode: (form, isChecked) => {
        const formElements = form.elements;
        const fornecedorEstoque = state.cache.fornecedores.find(f => f.nome.toLowerCase() === "estoque axel");

        if (isChecked && !fornecedorEstoque) {
            UI.showToast("Fornecedor 'Estoque Axel' nao encontrado! Cadastre-o primeiro.", true);
            form.elements['retirada_estoque'].checked = false;
            return;
        }

        const camposParaDesativar = ['previsao_entrega', 'pdf_nf', 'pdf_cte'];

        if (isChecked) {
            formElements['status_compra'].value = 'Recebido';
            if (formElements['fornecedorId'] && fornecedorEstoque) {
                formElements['fornecedorId'].value = fornecedorEstoque.id;
            }

            const hoje = new Date().toISOString().split('T')[0];
            const solicitacao = formElements['data_solicitacao']?.value || hoje;
            if (formElements['data_solicitacao'] && !formElements['data_solicitacao'].value) {
                formElements['data_solicitacao'].value = hoje;
            }
            if (formElements['data_recebimento']) {
                formElements['data_recebimento'].value = solicitacao;
            }
            if (formElements['data_emissao'] && !formElements['data_emissao'].value) {
                formElements['data_emissao'].value = solicitacao;
            }

            camposParaDesativar.forEach(nome => {
                if (formElements[nome]) {
                    formElements[nome].value = '';
                    formElements[nome].disabled = true;
                    formElements[nome].classList.add("bg-gray-200", ":root.dark:bg-gray-700");
                }
            });

            // Mantém o campo 'numero_nf' visível e habilitado, mas não obrigatório
            if (formElements['numero_nf']) {
                formElements['numero_nf'].value = '';
                formElements['numero_nf'].disabled = false;
                formElements['numero_nf'].classList.remove("bg-gray-200", ":root.dark:bg-gray-700");
                formElements['numero_nf'].required = false;
                // atualiza o rótulo para indicar opcionalidade
                try {
                    const nfInput = formElements['numero_nf'];
                    const labelEl = nfInput?.closest('div')?.querySelector('label');
                    if (labelEl) {
                        if (!nfInput.dataset.origLabel) nfInput.dataset.origLabel = labelEl.textContent || 'Numero NF-e';
                        labelEl.textContent = `${nfInput.dataset.origLabel} (opcional)`;
                    }
                } catch (e) { /* ignore */ }
            }
        } else {
            formElements['status_compra'].value = 'Nao iniciado';
            camposParaDesativar.forEach(nome => {
                if (formElements[nome]) {
                    formElements[nome].disabled = false;
                    formElements[nome].classList.remove("bg-gray-200", ":root.dark:bg-gray-700");
                }
            });
            if (formElements['numero_nf']) {
                formElements['numero_nf'].required = true;
                // restaura rótulo original se alterado
                try {
                    const nfInput = formElements['numero_nf'];
                    const labelEl = nfInput?.closest('div')?.querySelector('label');
                    if (labelEl && nfInput.dataset.origLabel) {
                        labelEl.textContent = nfInput.dataset.origLabel;
                        delete nfInput.dataset.origLabel;
                    }
                } catch (e) { /* ignore */ }
            }
        }
    },

    renderRelatorioFornecedor: async (fornecedorId) => {
        if (!fornecedorId) {
            $('relatorio-fornecedor-content').classList.add('hidden');
            return;
        }
        
        const fornecedor = state.cache.fornecedores.find(f => f.id === fornecedorId);
        if (!fornecedor) return;

        $('rel-forn-nome').textContent = Utils.escapeHtml(fornecedor.nome);
        
        const compras = await Data.getComprasByFornecedor(fornecedorId);
        
        const totalGasto = compras.reduce((sum, c) => sum + (c.valor_total || 0), 0);
        $('rel-forn-total').textContent = Utils.formatCurrency(totalGasto);

        const tableBody = $('relatorio-fornecedor-table-body');
        const obraMap = new Map(state.cache.obras.map(o => [o.id, `${o.nome_obra} (${o.numero_os})`]));
        
        tableBody.innerHTML = compras.length > 0 
            ? compras.map(c => `
                <tr class="text-sm">
                    <td class="px-4 py-2">${Utils.escapeHtml(obraMap.get(c.obraId)) || 'Obra N/D'}</td>
                    <td class="px-4 py-2">${Utils.fmtBR(c.data_emissao)}</td>
                    <td class="px-4 py-2 font-medium">${Utils.escapeHtml(c.numero_nf)}</td>
                    <td class="px-4 py-2">${Utils.formatCurrency(c.valor_total)}</td>
                    <td class="px-4 py-2">
                        ${c.pdf_nf_path ? `<button data-action="view-pdf" data-path="${c.pdf_nf_path}" class="text-blue-600 hover:underline">NF-e</button>` : ''}
                        ${c.pdf_cte_path ? `<button data-action="view-pdf" data-path="${c.pdf_cte_path}" class="text-blue-600 hover:underline ml-2">CT-e</button>` : ''}
                    </td>
                </tr>`).join('')
            : `<tr><td colspan="5" class="p-4 text-center text-gray-500">Nenhuma compra encontrada.</td></tr>`;

        $('relatorio-fornecedor-content').classList.remove('hidden');
    },

    // 
    // / / / / / / / / / / / / / / / / / / / / / /
    // / /   AQUI ESTÃO AS NOVAS FUNÇÕES (NÍVEL 2)  / /
    // / / / / / / / / / / / / / / / / / / / / / /
    //
    
    showReportTableLoading: (isLoading) => {
        const tableBody = $('report-table-body');
        if (isLoading) {
           tableBody.innerHTML = `<tr><td colspan="9" class="p-4 text-center text-gray-500">Buscando...</td></tr>`;
        }
    },

    renderReportTable: (compras) => {
        const tableBody = $('report-table-body');
        
        if (compras.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="9" class="p-4 text-center text-gray-500">Nenhum resultado encontrado.</td></tr>`;
            return;
        }

        const obraMap = new Map(state.cache.obras.map(o => [o.id, `${o.nome_obra} (${o.numero_os})`]));
        const compradorMap = new Map(state.cache.compradores.map(c => [c.id, c.nome]));
        
        tableBody.innerHTML = compras.map(c => `
            <tr class="text-sm">
                <td class="px-4 py-2">${Utils.escapeHtml(obraMap.get(c.obraId)) || 'N/D'}</td>
                <td class="px-4 py-2 font-medium">${Utils.escapeHtml(c.numero_nf)}</td>
                <td class="px-4 py-2">${Utils.renderStatusBadge(c.status_compra, c.previsao_entrega)}</td>
                <td class="px-4 py-2">${Utils.fmtBR(c.data_recebimento)}</td>
                <td class="px-4 py-2">${Utils.fmtBR(c.data_emissao)}</td>
                <td class="px-4 py-2">${Utils.escapeHtml(compradorMap.get(c.compradorId)) || 'N/D'}</td>
                <td class="px-4 py-2">${Utils.formatCurrency(c.valor_total)}</td>
                <td class="px-4 py-2">
                    ${c.pdf_nf_path ? `<button data-action="view-pdf" data-path="${c.pdf_nf_path}" class="text-blue-600 hover:underline">NF-e</button>` : ''}
                    ${c.pdf_cte_path ? `<button data-action="view-pdf" data-path="${c.pdf_cte_path}" class="text-blue-600 hover:underline ml-2">CT-e</button>` : ''}
                </td>
                <td class="px-4 py-2 space-x-2">
                    <button data-action="edit-compra" data-id="${c.id}" class="btn-secondary btn-small">Editar</button>
                    <button data-action="delete-compra" data-id="${c.id}" class="btn-danger btn-small">Excluir</button>
                </td>
            </tr>
        `).join('');
    },

    // / / / / / / / FIM DAS NOVAS FUNÇÕES / / / / / / /
    
    updateOrcamentoResumo: async (formType, obraId, compraIdParaExcluir = null) => {
        const wrapperId = `${formType}-orcamento-resumo`;
        const wrapper = $(wrapperId);
        if (!wrapper) return;
        
        if (!obraId) {
            wrapper.classList.add('hidden');
            state.currentOrcamentoResumo = null;
            return;
        }

        try {
            const resumo = await Data.getResumoOrcamento(obraId, compraIdParaExcluir);
            state.currentOrcamentoResumo = resumo; 
            
            const balanco = resumo.limite_real - resumo.comprometido;
            const balancoColor = balanco < 0 ? 'text-red-600' : 'text-green-600';
            
            wrapper.innerHTML = `
                <div class="orcamento-resumo-item"><span class="label">Orçado</span><span class="value">${Utils.formatCurrency(resumo.orcado)}</span></div>
                <div class="orcamento-resumo-item"><span class="label">Tolerância (${resumo.tolerancia_percentual}%)</span><span class="value">${Utils.formatCurrency(resumo.tolerancia_valor)}</span></div>
                <div class="orcamento-resumo-item"><span class="label">Limite Real</span><span class="value text-blue-600">${Utils.formatCurrency(resumo.limite_real)}</span></div>
                <div class="orcamento-resumo-item"><span class="label">Comprometido</span><span class="value text-red-600">${Utils.formatCurrency(resumo.comprometido)}</span></div>
                <div class="orcamento-resumo-item"><span class="label">Em Cotação</span><span class="value text-yellow-600">${Utils.formatCurrency(resumo.em_cotacao)}</span></div>
                <div class="orcamento-resumo-item"><span class="label">Balanço Atual</span><span class="value ${balancoColor}">${Utils.formatCurrency(balanco)}</span></div>
            `;
            wrapper.classList.remove('hidden');
        } catch (err) { 
            console.error("Erro ao buscar resumo:", err);
            wrapper.innerHTML = `<p class="text-red-500 text-sm">Erro ao carregar resumo.</p>`;
            wrapper.classList.remove('hidden');
            state.currentOrcamentoResumo = null;
        }
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
            try { confirmModal.close(); } catch (e) {}
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
    },

    showAuditModal: async (userId) => {
        const modal = $('auditModal');
        if (!modal) return;
        const list = $('audit-list');
        list.innerHTML = '<li class="text-sm text-gray-500">Carregando...</li>';
        try {
            const snaps = await Data.getUserAuditLog(userId, 100);
            if (!snaps || snaps.length === 0) {
                list.innerHTML = '<li class="text-sm text-gray-500">Nenhum registro encontrado.</li>';
            } else {
                list.innerHTML = snaps.map(s => {
                    const time = s.timestamp ? new Date(s.timestamp.toDate()).toLocaleString() : '';
                    return `<li class="py-2 border-b"><div class="text-sm font-medium">${s.acao} - ${s.detalhes?.colecao || ''}</div><div class="text-xs text-gray-500">${time} • ${s.userEmail || ''}</div><div class="text-sm">${JSON.stringify(s.detalhes)}</div></li>`;
                }).join('');
            }
            try { modal.showModal(); } catch (e) {}
        } catch (err) {
            NotificationManager.show(`Erro ao carregar histórico: ${err.message}`, 'error', 5000);
        }
    },
    
    showPdfModal: async (storagePath) => {
        const pdfTitle = $('pdfTitle'), pdfContainer = $('pdfContainer'), pdfLoader = $('pdfLoader');
        pdfTitle.textContent = `Carregando PDF...`;
        pdfContainer.innerHTML = ''; pdfContainer.appendChild(pdfLoader);
        pdfModal.showModal();
        
        try {
            const pdfUrl = await Data.getPdfUrl(storagePath);
            const fileRefName = storagePath.split('/').pop();
            pdfTitle.textContent = fileRefName || 'PDF';
            
            const btnDownload = $('btnDownloadPdf');
            btnDownload.href = pdfUrl;
            btnDownload.download = fileRefName;

            const loadingTask = pdfjsLib.getDocument(pdfUrl);
            const pdf = await loadingTask.promise;
            pdfLoader.remove();
            
            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const viewport = page.getViewport({ scale: 1.5 });
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.width = viewport.width; canvas.height = viewport.height;
                canvas.style.marginBottom = '10px';
                pdfContainer.appendChild(canvas);
                
                await page.render({ canvasContext: context, viewport: viewport }).promise;
            }
        } catch (err) { 
            console.error("Erro ao carregar PDF:", err); 
            pdfContainer.innerHTML = `<p class="p-4 text-red-500">Erro ao carregar PDF: ${err.message}</p>`; 
        }
    },
    
    showLoginModal: (view = 'login') => {
        $('auth-login-view').classList.add('hidden');
        $('auth-signup-view').classList.add('hidden');
        $('auth-forgot-view').classList.add('hidden');
        $('login-error').classList.add('hidden');
        $('signup-error').classList.add('hidden');
        $('forgot-error').classList.add('hidden');
        $('forgot-success').classList.add('hidden');

        if (view === 'login') {
            const rememberedEmail = localStorage.getItem('rememberedEmail');
            const emailInput = document.querySelector('#form-login input[name="email"]');
            const rememberCheck = $('check-remember-me');
            if (rememberedEmail) {
                emailInput.value = rememberedEmail;
                rememberCheck.checked = true;
            } else {
                rememberCheck.checked = false;
            }
            $('auth-login-view').classList.remove('hidden');
        } else if (view === 'signup') {
            $('auth-signup-view').classList.remove('hidden');
        } else if (view === 'forgot') {
            $('auth-forgot-view').classList.remove('hidden');
        }
        
        authModal.showModal();
    },
    
    hideLoginModal: () => {
        authModal.close();
    },

    showObraEditModal: (obraId) => {
        const obra = state.cache.obras.find(o => o.id === obraId);
        if (!obra) { UI.showToast("Obra não encontrada.", true); return; }
        const form = $('form-edit-obra');
        const assignValue = (field, value = '') => {
            if (!field) return;
            field.value = value;
        };

        assignValue(form.id, obra.id);
        assignValue(form.nome_obra, obra.nome_obra);
        assignValue(form.numero_os, obra.numero_os);
        assignValue(form.empresa, obra.empresa || '');
        assignValue(form.cliente, obra.cliente || '');
        assignValue(form.descricao_obra, obra.descricao_obra || '');
        assignValue(form.local_realizacao, obra.local_realizacao || '');
        assignValue(form.horas_previstas, obra.horas_previstas || '');
        assignValue(form.data_prevista_inicio, obra.data_prevista_inicio || '');
        assignValue(form.data_prevista_fim, obra.data_prevista_fim || '');

        assignValue(form.valor_orcado, Utils.formatCurrencyInput(obra.valor_orcado || 0, true));
        assignValue(
            form.tolerancia_percentual,
            obra.tolerancia_percentual ? obra.tolerancia_percentual * 100 : ''
        );

        const isDiretor = state.currentUser?.role === 'diretor';
        if (form.valor_orcado) form.valor_orcado.disabled = !isDiretor;
        if (form.tolerancia_percentual) form.tolerancia_percentual.disabled = !isDiretor;
        
        obraEditModal.showModal();
    },
    
    showCompraEditModal: async (compraId) => {
        const compra = await Data.getDocById("compras", compraId);
        if (!compra) { UI.showToast("Compra não encontrada.", true); return; }
        
        const form = $('form-edit-compra');
        await UI.refreshFormDropdowns('form-edit-compra'); 
        form.obraId.innerHTML = state.cache.obras.map(o => `<option value="${o.id}">${Utils.escapeHtml(o.nome_obra)} (${Utils.escapeHtml(o.numero_os)})</option>`).join('');
        
        form.id.value = compraId;
        form.obraId.value = compra.obraId;
        form.centroCustoId.value = compra.centroCustoId;
        form.fornecedorId.value = compra.fornecedorId;
        form.compradorId.value = compra.compradorId;
        form.numero_nf.value = compra.numero_nf;
        form.data_emissao.value = compra.data_emissao;
        form.valor_total.value = Utils.formatCurrencyInput(compra.valor_total || 0, true);
        form.natureza_compra.value = compra.natureza_compra;
        form.previsao_entrega.value = compra.previsao_entrega || '';
        form.status_compra.value = compra.status_compra || 'Não iniciado';
        form.data_recebimento.value = compra.data_recebimento || '';
        form.solicitante.value = compra.solicitante || '';
        
        form.status_aprovacao.value = compra.status_aprovacao || 'Aprovado';
        const isDiretor = state.currentUser?.role === 'diretor';
        form.status_aprovacao.disabled = !isDiretor;

        const justificativaWrapper = $('edit-justificativa-wrapper');
        const justificativaInput = form.justificativa_estouro_orcamento;
        if (compra.estouro_orcamento) {
            justificativaInput.value = compra.justificativa_estouro_orcamento || '';
            justificativaWrapper.classList.remove('hidden');
            justificativaInput.required = true;
        } else {
            justificativaInput.value = '';
            justificativaWrapper.classList.add('hidden');
            justificativaInput.required = false;
        }
        
        const checkConferida = $('edit-nf_conferida');
        const inputConferidaPor = $('edit-nf_conferida_por');
        const inputConferidaEm = $('edit-nf_conferida_em');
        
        if (compra.nf_conferida) {
            checkConferida.checked = true;
            inputConferidaPor.value = compra.nf_conferida_por || 'N/D';
            inputConferidaEm.value = compra.nf_conferida_em ? new Date(compra.nf_conferida_em.seconds * 1000).toLocaleString('pt-BR') : 'N/D';
        } else {
            checkConferida.checked = false;
            inputConferidaPor.value = '';
            inputConferidaEm.value = '';
        }

        compraEditModal.showModal();
        await UI.updateOrcamentoResumo('edit', compra.obraId, compraId);
    },
    
    showCompradorEditModal: (id) => {
        const item = state.cache.compradores.find(i => i.id === id); if (!item) return;
        const form = $('form-edit-comprador');
        form.id.value = item.id; 
        form.nome.value = item.nome; 
        form.email.value = item.email || '';
        compradorEditModal.showModal();
    },
    
    showFornecedorEditModal: (id) => {
        const item = state.cache.fornecedores.find(i => i.id === id); if (!item) return;
        const form = $('form-edit-fornecedor');
        form.id.value = item.id; 
        form.nome.value = item.nome; 
        form.cnpj.value = Utils.formatCnpjInput(item.cnpj || '');
        fornecedorEditModal.showModal();
    },
    
    showCentroCustoEditModal: (id) => {
        const item = state.cache.centrosCusto.find(i => i.id === id); if (!item) return;
        const form = $('form-edit-centro-custo');
        form.id.value = item.id; 
        form.nome.value = item.nome; 
        form.codigo.value = item.codigo || '';
        centroCustoEditModal.showModal();
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
            <td class="px-3 py-2">${Utils.escapeHtml(c.obraId || '')}</td>
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
