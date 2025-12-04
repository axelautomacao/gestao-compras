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

    createCard: ({ title, content, footer = '', className = '' }) => {
        return `
            <div class="card ${className}">
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
            <div class="flex justify-center items-center p-4">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
        `;
    }
};
