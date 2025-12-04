import { Store } from './store.js';

export const Router = {
    routes: {},
    currentRoute: null,

    init() {
        window.addEventListener('hashchange', () => this.handleRoute());
        window.addEventListener('load', () => this.handleRoute());
    },

    on(route, handler) {
        this.routes[route] = handler;
    },

    navigate(route) {
        window.location.hash = route;
    },

    matchRoute(path) {
        if (this.routes[path]) return { handler: this.routes[path], params: {} };

        const pathParts = path.split('/').filter(Boolean);

        for (const [route, handler] of Object.entries(this.routes)) {
            const routeParts = route.split('/').filter(Boolean);
            if (routeParts.length !== pathParts.length) continue;

            const params = {};
            let matched = true;

            for (let i = 0; i < routeParts.length; i++) {
                const rp = routeParts[i];
                const pp = pathParts[i];

                if (rp.startsWith(':')) {
                    params[rp.slice(1)] = decodeURIComponent(pp);
                } else if (rp !== pp) {
                    matched = false;
                    break;
                }
            }

            if (matched) return { handler, params };
        }

        return null;
    },

    async handleRoute() {
        const hash = window.location.hash.slice(1) || '/';

        // Auth Guard
        if (!Store.state.currentUser && hash !== '/login' && hash !== '/forgot-password') {
            this.navigate('/login');
            return;
        }

        if (Store.state.currentUser && (hash === '/login' || hash === '/forgot-password')) {
            this.navigate('/');
            return;
        }

        const match = this.matchRoute(hash);
        const handler = match?.handler || this.routes['/404'] || (() => console.warn('Rota não encontrada:', hash));
        const params = match?.params || {};

        this.currentRoute = hash;

        await handler(params);
    }
};
