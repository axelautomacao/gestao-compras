import { Store } from '../core/store.js';
import { Router } from '../core/router.js';
import { Icons } from './icons.js';
import { Auth } from '../modules/auth/auth.service.js';

const navSections = [
    {
        label: 'ANÁLISE',
        items: [
            { route: '/', label: 'Visão Geral', icon: Icons.dashboard },
            { route: '/obras', label: 'Por Obra', icon: Icons.chart },
        ],
    },
    {
        label: 'OPERACIONAL',
        items: [
            { route: '/relatorios', label: 'Lista de Compras', icon: Icons.clipboard },
            { route: '/compras/nova', label: 'Registrar Compra', icon: Icons.shoppingCart }
        ],
    },
    {
        label: 'CADASTROS',
        items: [
            { route: '/cadastros/fornecedores', label: 'Fornecedores', icon: Icons.clipboard },
            { route: '/cadastros/centros-custo', label: 'Centros de Custo', icon: Icons.clipboard },
            { route: '/cadastros/compradores', label: 'Compradores', icon: Icons.clipboard },
        ],
    },
    {
        label: 'SISTEMA',
        items: [
            { route: '/configuracoes', label: 'Configurações', icon: Icons.settings },
        ],
    },
];

export const Layout = {
    render: (content) => {
        const app = document.getElementById('app');
        const user = Store.state.currentUser;

        if (!user) {
            app.innerHTML = content;
            return;
        }

        const sidebarCollapsed = Store.state.sidebarCollapsed;
        const theme = Store.state.currentTheme;

        app.innerHTML = `
            <div class="flex h-screen bg-canvas text-text transition-colors duration-200">
                <!-- Sidebar -->
                <aside id="sidebar" class="fixed inset-y-0 left-0 z-30 bg-surface border-r border-border flex flex-col transition-all duration-300 md:static md:h-screen shadow-heavy hidden md:flex ${sidebarCollapsed ? 'w-20' : 'w-64'}">
                    <div class="h-16 flex items-center justify-center border-b border-border shrink-0">
                        <span class="text-2xl font-display text-primary">AXEL</span>
                        <span id="sidebar-logo-text" class="${sidebarCollapsed ? 'hidden' : 'ml-2 text-text font-display tracking-wide'}">GESTÃO</span>
                    </div>

                    <nav class="flex-1 overflow-y-auto py-4 space-y-3 px-3">
                        ${navSections.map(section => Layout.renderNavSection(section.label, section.items, sidebarCollapsed)).join('')}
                    </nav>

                    <div class="p-4 border-t border-border shrink-0">
                        <button id="btn-logout" class="flex items-center gap-3 text-text-muted hover:text-alert w-full p-2 rounded transition-colors uppercase tracking-wide font-display justify-center md:justify-start">
                            ${Icons.logout}
                            <span class="sidebar-text ${sidebarCollapsed ? 'hidden' : ''}">Sair</span>
                        </button>
                    </div>
                </aside>

                <!-- Mobile Sidebar Backdrop -->
                <div id="sidebar-backdrop" class="fixed inset-0 bg-black/50 z-20 hidden backdrop-blur-sm transition-opacity"></div>

                <!-- Main Content -->
                <div class="flex-1 flex flex-col overflow-hidden w-full">
                    <!-- Header -->
                    <header class="h-16 bg-surface border-b border-border flex items-center justify-between px-4 md:px-6 z-10 shadow-heavy shrink-0">
                        <div class="flex items-center gap-4">
                            <button id="btn-toggle-sidebar" class="text-text-muted hover:text-primary focus:outline-none p-1 rounded hover:bg-canvas transition-colors">
                                ${Icons.menu}
                            </button>
                            
                            <!-- Global Search -->
                            <div class="relative hidden md:block w-96">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-text-muted">
                                    ${Icons.search}
                                </span>
                                <input 
                                    type="text" 
                                    id="global-search"
                                    placeholder="Buscar (Ctrl+K)..." 
                                    class="w-full pl-10 pr-4 py-2 bg-canvas border border-border rounded text-text text-sm focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-text-muted transition-all"
                                >
                            </div>
                        </div>

                        <div class="flex items-center gap-4">
                            <!-- Notifications -->
                            <div id="notifications-container" class="relative"></div>
                            
                            <button id="btn-theme-toggle" class="text-text-muted hover:text-primary transition-colors p-1 rounded hover:bg-canvas">
                                ${theme === 'dark' ? Icons.sun : Icons.moon}
                            </button>
                            
                            <div class="flex items-center gap-3 pl-4 border-l border-border">
                                <div class="text-right hidden sm:block">
                                    <p class="text-sm font-display text-text">${user.nome || user.email}</p>
                                    <p class="text-xs text-text-muted capitalize">${user.role || 'Usuário'}</p>
                                </div>
                                <div class="h-8 w-8 rounded bg-primary flex items-center justify-center text-canvas font-bold shadow-heavy">
                                    ${(user.nome || user.email || 'U').charAt(0).toUpperCase()}
                                </div>
                            </div>
                        </div>
                    </header>

                    <!-- Page Content -->
                    <main class="flex-1 overflow-auto p-4 md:p-6 relative bg-canvas w-full">
                        ${content}
                    </main>
                </div>
            </div>
        `;

        Layout.bindEvents();
        window.dispatchEvent(new CustomEvent('layout:rendered'));
    },

    renderNavSection: (title, items, collapsed) => {
        return `
            <div class="space-y-1">
                <p class="sidebar-section-title px-3 text-xs font-display tracking-wide text-text-muted uppercase ${collapsed ? 'hidden' : ''}">${title}</p>
                ${items.map(item => Layout.createNavItem(item.route, item.label, item.icon, collapsed)).join('')}
            </div>
        `;
    },

    createNavItem: (route, label, icon, collapsed) => {
        const isActive = Router.currentRoute === route || Router.currentRoute?.startsWith(`${route}/`);
        const activeClass = isActive
            ? 'text-primary bg-primary/10 border-l-2 border-primary shadow-heavy'
            : 'text-text-muted hover:text-text hover:bg-canvas';

        return `
            <a href="#${route}" class="flex items-center gap-3 px-3 py-2 rounded transition-colors mb-1 border border-transparent ${activeClass} justify-center md:justify-start" title="${label}">
                ${icon}
                <span class="sidebar-text ${collapsed ? 'hidden' : 'font-display tracking-wide'}">${label}</span>
            </a>
        `;
    },

    bindEvents: () => {
        const sidebar = document.getElementById('sidebar');
        const backdrop = document.getElementById('sidebar-backdrop');
        const btnToggle = document.getElementById('btn-toggle-sidebar');

        // Toggle Sidebar
        btnToggle?.addEventListener('click', () => {
            const isMobile = window.innerWidth < 768;

            if (isMobile) {
                // Mobile: Toggle visibility
                sidebar.classList.toggle('hidden');
                sidebar.classList.toggle('flex');
                backdrop.classList.toggle('hidden');
            } else {
                // Desktop: Toggle collapse state
                Store.toggleSidebar();
                const collapsed = Store.state.sidebarCollapsed;

                // Toggle width
                if (collapsed) {
                    sidebar.classList.remove('w-64');
                    sidebar.classList.add('w-20');
                } else {
                    sidebar.classList.remove('w-20');
                    sidebar.classList.add('w-64');
                }

                // Toggle text visibility
                const texts = sidebar.querySelectorAll('.sidebar-text, .sidebar-section-title, #sidebar-logo-text');
                texts.forEach(el => {
                    if (collapsed) {
                        el.classList.add('hidden');
                    } else {
                        el.classList.remove('hidden');
                    }
                });
            }
        });

        // Close sidebar on backdrop click (mobile)
        backdrop?.addEventListener('click', () => {
            sidebar.classList.add('hidden');
            sidebar.classList.remove('flex');
            backdrop.classList.add('hidden');
        });

        // Theme Toggle
        document.getElementById('btn-theme-toggle')?.addEventListener('click', () => {
            const current = Store.state.currentTheme;
            const next = current === 'dark' ? 'light' : 'dark';
            Store.setTheme(next);
            const btn = document.getElementById('btn-theme-toggle');
            btn.innerHTML = next === 'dark' ? Icons.sun : Icons.moon;
        });

        // Logout
        document.getElementById('btn-logout')?.addEventListener('click', async () => {
            try {
                await Auth.logout();
                Router.navigate('/login');
            } catch (error) {
                console.error(error);
            }
        });

        // Global Search Shortcut
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                document.getElementById('global-search')?.focus();
            }
        });
    }
};
