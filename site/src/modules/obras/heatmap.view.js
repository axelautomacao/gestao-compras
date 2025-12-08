/**
 * Heatmap de Entregas (Calendario dos proximos 30 dias)
 * Sprint 5 - Opcional
 */
export const HeatmapView = {
    render: (compras = []) => {
        // Agrupa compras por data de previsao/entrega
        const dateMap = new Map();
        compras.forEach(c => {
            const rawDate = c.previsao_entrega || c.data_entrega_prevista || c.date || c.data;
            if (!rawDate) return;
            const dateKey = new Date(rawDate).toISOString().split('T')[0];
            if (!dateMap.has(dateKey)) {
                dateMap.set(dateKey, []);
            }
            dateMap.get(dateKey).push(c);
        });

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const days = [];
        for (let i = 0; i < 30; i++) {
            const d = new Date(today);
            d.setDate(today.getDate() + i);
            days.push(d);
        }

        const calendarHTML = days.map(day => {
            const dateKey = day.toISOString().split('T')[0];
            const comprasNoDia = dateMap.get(dateKey) || [];

            // Determina cor conforme status agregado
            let colorClass = 'bg-canvas';
            if (comprasNoDia.length > 0) {
                const atrasadas = comprasNoDia.filter(c => {
                    const status = (c.status_compra || '').toLowerCase();
                    const entregue = status.includes('receb') || status.includes('entreg');
                    return !entregue && new Date(c.previsao_entrega || c.data_entrega_prevista || day) < today;
                }).length;
                const pendentes = comprasNoDia.filter(c => {
                    const status = (c.status_compra || '').toLowerCase();
                    return !status.includes('receb') && !status.includes('entreg');
                }).length;
                const recebidas = comprasNoDia.filter(c => {
                    const status = (c.status_compra || '').toLowerCase();
                    return status.includes('receb') || status.includes('entreg');
                }).length;

                if (atrasadas > 0) colorClass = 'bg-red-500/40 border-red-500/40';
                else if (pendentes > 0) colorClass = 'bg-amber-500/30 border-amber-500/40';
                else if (recebidas > 0) colorClass = 'bg-green-500/30 border-green-500/40';
            }

            const label = day.toLocaleDateString('pt-BR', { weekday: 'short' });
            return `
                <div class="flex flex-col items-center p-2 border border-border rounded hover:shadow-md transition-shadow cursor-pointer ${colorClass}"
                     title="${comprasNoDia.length} entrega(s) em ${day.toLocaleDateString('pt-BR')}">
                    <span class="text-xs font-display text-text">${day.getDate()}</span>
                    <span class="text-[10px] text-text-muted">${label}</span>
                    ${comprasNoDia.length > 0 ? `<span class="text-[10px] font-bold mt-1">${comprasNoDia.length}</span>` : ''}
                </div>
            `;
        }).join('');

        return `
            <h3 class="text-lg font-display text-text mb-4">Heatmap de Entregas (30 dias)</h3>
            <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
                ${calendarHTML}
            </div>
            <div class="flex items-center gap-4 mt-4 text-xs text-text">
                <div class="flex items-center gap-2">
                    <div class="w-4 h-4 bg-green-500/50 border border-green-500/60 rounded"></div>
                    <span>Recebido</span>
                </div>
                <div class="flex items-center gap-2">
                    <div class="w-4 h-4 bg-amber-500/50 border border-amber-500/60 rounded"></div>
                    <span>Pendente</span>
                </div>
                <div class="flex items-center gap-2">
                    <div class="w-4 h-4 bg-red-500/50 border border-red-500/60 rounded"></div>
                    <span>Atrasado</span>
                </div>
                <div class="flex items-center gap-2">
                    <div class="w-4 h-4 bg-canvas border border-border rounded"></div>
                    <span>Sem entregas</span>
                </div>
            </div>
        `;
    }
};
