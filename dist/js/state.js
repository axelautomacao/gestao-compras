// js/state.js
export const state = {
    currentPage: 'dashboard-geral',
    previousPage: null,
    currentObraId: null,
    currentContext: '*', // '*' = todas as obras
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
    reportSort: { col: 'emissao', dir: 'desc' },
    dashboardSort: { col: 'data_recebimento', dir: 'asc' },
    reportCompras: [],
    dashboardAlertCount: 0,
    notificationPrefs: null,
    usersCache: []
};
