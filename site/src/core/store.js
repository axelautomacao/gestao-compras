export const Store = {
    state: {
        currentUser: null,
        currentTheme: localStorage.getItem('theme') || 'dark',
        currentObra: null,
        sidebarCollapsed: localStorage.getItem('sidebarCollapsed') === 'true',
    },
    listeners: [],

    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    },

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.notify();
    },

    notify() {
        this.listeners.forEach(listener => listener(this.state));
    },

    // Actions
    setUser(user) {
        this.setState({ currentUser: user });
    },

    setTheme(theme) {
        localStorage.setItem('theme', theme);
        this.applyTheme(theme);
    },

    applyTheme(theme) {
        this.setState({ currentTheme: theme });

        const root = document.documentElement;
        root.classList.remove('dark', 'theme-light');

        const useDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
        if (useDark) {
            root.classList.add('dark');
            root.setAttribute('data-theme', 'dark');
        } else {
            root.classList.add('theme-light');
            root.setAttribute('data-theme', 'light');
        }
    },

    toggleSidebar() {
        const collapsed = !this.state.sidebarCollapsed;
        localStorage.setItem('sidebarCollapsed', collapsed);
        this.setState({ sidebarCollapsed: collapsed });
    }
};
