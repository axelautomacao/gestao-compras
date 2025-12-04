let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

export const CalendarView = {
    setMonth: (month, year) => {
        currentMonth = month;
        currentYear = year;
    },

    changeMonth: (delta) => {
        currentMonth += delta;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear -= 1;
        }
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear += 1;
        }
    },

    render: (items = []) => {
        const today = new Date();

        // Agrupar eventos (compras/RDO) por data
        const porData = {};
        (items || []).forEach(c => {
            const entrega = c.date || c.previsao_entrega || c.data_entrega_prevista;
            if (!entrega) return;
            const date = new Date(entrega);
            if (Number.isNaN(date.getTime())) return;
            const key = date.toISOString().split('T')[0];
            if (!porData[key]) porData[key] = [];
            porData[key].push(c);
        });

        // Gerar calendário
        const firstDay = new Date(currentYear, currentMonth, 1);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        const legend = `
            <div class="flex items-center gap-3 text-xs text-text-muted mb-2">
                <span class="inline-flex items-center gap-1"><span class="w-3 h-3 inline-block bg-primary/30 border border-primary rounded"></span> Compras</span>
                <span class="inline-flex items-center gap-1"><span class="w-3 h-3 inline-block bg-blue-500/30 border border-blue-500 rounded"></span> RDO</span>
            </div>
        `;

        let calendarHTML = `
            <div class="card">
                <div class="flex justify-between items-center mb-4">
                    <button id="cal-prev" class="text-text-muted hover:text-text px-2 py-1 border border-border rounded">&larr;</button>
                    <h3 class="text-lg font-display text-text">Calendário de Entregas - ${monthNames[currentMonth]} ${currentYear}</h3>
                    <button id="cal-next" class="text-text-muted hover:text-text px-2 py-1 border border-border rounded">&rarr;</button>
                </div>
                ${legend}
                
                <div class="grid grid-cols-7 gap-2">
                    ${['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day =>
                        `<div class="text-center text-xs font-display text-text-muted uppercase tracking-wide py-2">${day}</div>`
                    ).join('')}
        `;

        // Empty cells before first day
        for (let i = 0; i < startingDayOfWeek; i++) {
            calendarHTML += `<div class="aspect-square"></div>`;
        }

        // Days of month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentYear, currentMonth, day);
            const dateKey = date.toISOString().split('T')[0];
            const eventosNoDia = porData[dateKey] || [];
            const isToday = day === today.getDate() && currentMonth === today.getMonth();
            const isPast = date < today && !isToday;

            calendarHTML += `
                <div class="aspect-square border border-border rounded p-1 ${isToday ? 'bg-primary/10 border-primary' : 'bg-surface'} ${isPast ? 'opacity-50' : ''} hover:bg-canvas transition-colors cursor-pointer">
                    <div class="text-xs font-display ${isToday ? 'text-primary font-bold' : 'text-text'}">${day}</div>
                    ${eventosNoDia.length > 0 ? `
                        <div class="mt-1 space-y-1">
                            ${eventosNoDia.slice(0, 2).map(ev => {
                                const isRdo = ev.type === 'rdo';
                                return `
                                <div class="text-[10px] ${isRdo ? 'bg-blue-500/20 border border-blue-500' : 'bg-primary/20 border border-primary'} rounded px-1 truncate" title="${ev.descricao_compra || ev.descricao || ev.label || (isRdo ? 'RDO' : 'Compra')}">
                                    ${(ev.descricao_compra || ev.descricao || ev.label || (isRdo ? 'RDO' : 'Compra')).substring(0, 15)}
                                </div>
                            `;
                            }).join('')}
                            ${eventosNoDia.length > 2 ? `<div class="text-[9px] text-text-muted">+${eventosNoDia.length - 2}</div>` : ''}
                        </div>
                    ` : ''}
                </div>
            `;
        }

        calendarHTML += `
                </div>
            </div>
        `;

        return calendarHTML;
    },

    renderTimeline: (compras = []) => {
        // Próximas 10 entregas
        const proximas = compras
            .filter(c => (c.previsao_entrega || c.data_entrega_prevista) && new Date(c.previsao_entrega || c.data_entrega_prevista) >= new Date())
            .sort((a, b) => new Date(a.previsao_entrega || a.data_entrega_prevista) - new Date(b.previsao_entrega || b.data_entrega_prevista))
            .slice(0, 10);

        return `
            <div class="card">
                <h3 class="text-lg font-display text-text mb-4">Próximas Entregas</h3>
                <div class="space-y-3">
                    ${proximas.length === 0 ? `
                        <p class="text-text-muted text-sm">Nenhuma entrega prevista</p>
                    ` : proximas.map(c => {
                        const date = new Date(c.previsao_entrega || c.data_entrega_prevista);
                        const daysUntil = Math.ceil((date - new Date()) / (1000 * 60 * 60 * 24));
                        const isUrgent = daysUntil <= 3;

                        return `
                            <div class="flex items-start gap-3 p-3 rounded border ${isUrgent ? 'border-alert bg-alert/5' : 'border-border bg-surface'} hover:bg-canvas transition-colors">
                                <div class="flex-shrink-0 w-12 text-center">
                                    <div class="text-xs font-display text-text-muted uppercase">${date.toLocaleDateString('pt-BR', { month: 'short' })}</div>
                                    <div class="text-2xl font-display ${isUrgent ? 'text-alert' : 'text-primary'}">${date.getDate()}</div>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-display text-text truncate">${c.descricao_compra || c.descricao || 'Compra'}</p>
                                    <p class="text-xs text-text-muted mt-1">
                                        ${(c.fornecedorNome || c.fornecedor || 'Fornecedor não definido')} • ${c.status_compra || ''}
                                    </p>
                                    ${isUrgent ? `<p class="text-xs text-alert mt-1 font-display uppercase">Entrega em ${daysUntil} dia(s)</p>` : ''}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }
};
