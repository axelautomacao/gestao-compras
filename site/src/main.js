import './style.css';
import { initializeFirebase } from './config/firebase.js';
import { Auth } from './modules/auth/auth.service.js';
import { Router } from './core/router.js';
import { Store } from './core/store.js';

// Controllers
import { AuthController } from './modules/auth/auth.controller.js';
import { DashboardController } from './modules/dashboard/dashboard.controller.js';
import { ComprasController } from './modules/compras/compras.controller.js';
import { ReportsController } from './modules/reports/reports.controller.js';
import { SettingsController } from './modules/settings/settings.controller.js';
import { ObrasController } from './modules/obras/obras.controller.js';
import { CadastrosController } from './modules/cadastros/cadastros.controller.js';
import { FornecedoresController } from './modules/cadastros/fornecedores.controller.js';
import { CentrosController } from './modules/cadastros/centros.controller.js';
import { CompradoresController } from './modules/cadastros/compradores.controller.js';
import { NotificationsController } from './modules/notifications/notifications.controller.js';

console.log('[Main] Inicializando aplicação...');

const init = async () => {
    try {
        await initializeFirebase();
        console.log('[Main] Firebase inicializado.');

        // Tema padrão (industrial dark) com fallback para light se preferido
        Store.applyTheme(Store.state.currentTheme || 'dark');

        // Check Auth State
        await Auth.init();

        // Initialize Notifications
        if (Store.state.currentUser) {
            await NotificationsController.init();
        }

        // Setup Routes
        Router.init();

        Router.on('/', DashboardController.init);
        Router.on('/login', AuthController.initLogin);
        Router.on('/forgot-password', AuthController.initForgotPassword);
        Router.on('/compras', ComprasController.init);
        Router.on('/compras/nova', ComprasController.init);
        Router.on('/relatorios', ReportsController.init);
        Router.on('/configuracoes', SettingsController.init);
        Router.on('/compras/:id', ({ id }) => ComprasController.initEdit(id));
        Router.on('/compras/:id/editar', ({ id }) => ComprasController.initEdit(id));
        Router.on('/cadastros', CadastrosController.init);
        Router.on('/cadastros/centros-custo', CentrosController.init);
        Router.on('/cadastros/fornecedores', FornecedoresController.init);
        Router.on('/cadastros/compradores', CompradoresController.init);

        // Obras routes (lista, criar, detalhe/dashboard, editar)
        Router.on('/obras', ObrasController.initList);
        Router.on('/obras/nova', () => ObrasController.initForm());
        Router.on('/obras/:id', ({ id }) => ObrasController.initDashboard(id));
        Router.on('/obras/:id/dashboard', ({ id }) => ObrasController.initDashboard(id));
        Router.on('/obras/:id/editar', ({ id }) => ObrasController.initForm(id));

        // Trigger initial route
        Router.handleRoute();

        // Remove loader
        const loader = document.getElementById('loader');
        if (loader) loader.remove();

    } catch (error) {
        console.error('[Main] Erro fatal:', error);
        document.body.innerHTML = `<div class="p-10 text-red-600">Erro fatal: ${error.message}</div>`;
    }
};

init();
