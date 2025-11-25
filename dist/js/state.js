// js/state.js
export const state = {
    currentPage: 'dashboard-geral',
    previousPage: null,
    currentObraId: null,
    currentUser: null, // Armazenará { uid, email, nome, role }
    cache: {
        obras: [],
        centrosCusto: [],
        fornecedores: [],
        compradores: []
    },
    listeners: { // Controla os "ouvintes" do Firestore
        dashboardCompras: null,
        obras: null,
        centrosCusto: null,
        fornecedores: null,
        compradores: null
    },
    currentOrcamentoResumo: null,
    reportSort: { col: 'emissao', dir: 'desc' }
};