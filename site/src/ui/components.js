export const Components = {
    createInput: ({ type = 'text', id, label, placeholder = '', value = '', required = false, className = '' }) => {
        return `
            <div class="flex flex-col gap-1 ${className}">
                ${label ? `<label for="${id}" class="text-xs font-display tracking-wide text-text-muted uppercase">${label}</label>` : ''}
                <input 
                    type="${type}" 
                    id="${id}" 
                    name="${id}" 
                    placeholder="${placeholder}" 
                    value="${value}"
                    ${required ? 'required' : ''}
                    class="input"
                />
            </div>
        `;
    },

    createButton: ({ id, text, type = 'button', variant = 'primary', icon = '', onClick = '', className = '' }) => {
        const baseClass = variant === 'primary' ? 'btn' : 'btn-secondary';
        return `
            <button 
                id="${id}" 
                type="${type}" 
                class="${baseClass} ${className}"
                ${onClick ? `onclick="${onClick}"` : ''}
            >
                ${icon}
                <span>${text}</span>
            </button>
        `;
    },

    createCard: ({ title, content, footer = '', className = '', tooltip = '' }) => {
        const tooltipAttr = tooltip || title || '';
        return `
            <div class="card ${className}" ${tooltipAttr ? `title="${tooltipAttr}"` : ''}>
                ${title ? `<h3 class="text-lg font-display text-text mb-4">${title}</h3>` : ''}
                <div class="text-text">
                    ${content}
                </div>
                ${footer ? `<div class="mt-4 pt-4 border-t border-border">${footer}</div>` : ''}
            </div>
        `;
    },

    createToast: (message, type = 'success') => {
        const toast = document.createElement('div');
        const colors = type === 'success' ? 'bg-primary' : type === 'error' ? 'bg-alert' : 'bg-primary';
        toast.className = `fixed top-4 right-4 ${colors} text-canvas px-6 py-3 rounded shadow-heavy transform transition-all duration-300 translate-y-[-100%] z-50 flex items-center gap-2 font-display uppercase tracking-wide`;
        toast.innerHTML = `<span>${message}</span>`;

        document.body.appendChild(toast);

        // Animate in
        requestAnimationFrame(() => {
            toast.classList.remove('translate-y-[-100%]');
        });

        // Remove after 3s
        setTimeout(() => {
            toast.classList.add('opacity-0', 'translate-y-[-100%]');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    },

    createLoader: () => {
        return `
            <div class="fixed inset-0 flex items-center justify-center bg-canvas/80 backdrop-blur-sm z-50">
                <div class="flex flex-col items-center justify-center p-6 space-y-4 bg-surface/80 rounded shadow-heavy border border-border">
                    <img src="/images/logo_axel__principal.png" alt="" class="h-12 w-auto object-contain" />
                    <div class="w-48 h-2 bg-border rounded overflow-hidden">
                        <div class="h-full bg-primary animate-pulse" style="width: 65%"></div>
                    </div>
                    <p class="text-xs text-text-muted uppercase tracking-wide">Carregando...</p>
                </div>
            </div>
        `;
    },

    /**
     * Loading spinner simples para seções
     */
    createLoadingSpinner: (message = 'Carregando...') => {
        return `
            <div class="flex flex-col items-center justify-center py-10 text-center">
                <div class="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                <p class="mt-3 text-sm text-text-muted">${message}</p>
            </div>
        `;
    },

    /**
     * Empty state genérico
     */
    createEmptyState: (message = 'Sem dados disponíveis', icon = 'ℹ️') => {
        return `
            <div class="flex flex-col items-center justify-center py-10 text-center text-text-muted">
                <div class="text-5xl mb-2">${icon}</div>
                <p class="text-sm">${message}</p>
            </div>
        `;
    }
};
