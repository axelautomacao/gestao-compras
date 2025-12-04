import { Components } from '../../ui/components.js';
import { Utils } from '../../utils/formatters.js';
import { Icons } from '../../ui/icons.js';

export const ReportsView = {
    renderControls: (currentView = 'table', obras = []) => {
        return `
            <div class="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h2 class="text-2xl font-display text-text tracking-wide">Relatório de Compras</h2>
                <div class="flex items-center gap-3 flex-wrap">
                    <button id="btn-export-csv" class="btn-secondary text-sm px-4 py-2 font-display uppercase tracking-wide">Exportar CSV</button>
                    <button id="btn-export-obra" class="btn-secondary text-sm px-4 py-2 font-display uppercase tracking-wide">CSV por Obra</button>
                    <button id="btn-export-fornecedor" class="btn-secondary text-sm px-4 py-2 font-display uppercase tracking-wide">CSV por Fornecedor</button>
                    <div class="flex gap-2 bg-surface border border-border p-1 rounded shadow-heavy">
                        <button id="view-table" class="px-4 py-2 rounded text-sm font-display uppercase tracking-wide transition-colors ${currentView === 'table' ? 'bg-primary text-canvas' : 'text-text-muted hover:text-text'}">
                            Tabela
                        </button>
                        <button id="view-kanban" class="px-4 py-2 rounded text-sm font-display uppercase tracking-wide transition-colors ${currentView === 'kanban' ? 'bg-primary text-canvas' : 'text-text-muted hover:text-text'}">
                            Kanban
                        </button>
                    </div>
                </div>
            </div>

            <!-- Filters -->
            <div class="card mb-6">
                <h3 class="text-sm font-display text-text mb-4 uppercase tracking-wide">Filtros Avançados</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <input type="text" id="filter-search" placeholder="Buscar descrição..." class="input text-sm">
                    <select id="filter-status" class="input text-sm">
                        <option value="">Todos os Status</option>
                        <option value="Pendente">Pendente</option>
                        <option value="Em Cotação">Em Cotação</option>
                        <option value="Aprovado">Aprovado</option>
                        <option value="Comprado">Comprado</option>
                        <option value="Recebido">Recebido</option>
                        <option value="Entregue">Entregue</option>
                        <option value="Cancelado">Cancelado</option>
                    </select>
                    <select id="filter-obra" class="input text-sm">
                        <option value="">Todas as Obras</option>
                        ${obras.map(o => `<option value="${o.id}">${o.nome_obra || o.apelido_obra || o.id}</option>`).join('')}
                    </select>
                    <select id="filter-prioridade" class="input text-sm">
                        <option value="">Todas Prioridades</option>
                        <option value="Normal">Normal</option>
                        <option value="Alta">Alta</option>
                        <option value="Crítica">Crítica</option>
                    </select>
                    <select id="filter-status-aprov" class="input text-sm">
                        <option value="">Status Aprovação</option>
                        <option value="Aprovado">Aprovado</option>
                        <option value="Pendente">Pendente</option>
                        <option value="Reprovado">Reprovado</option>
                    </select>
                    <select id="filter-fornecedor" class="input text-sm">
                        <option value="">Todos Fornecedores</option>
                    </select>
                    <select id="filter-comprador" class="input text-sm">
                        <option value="">Todos Compradores</option>
                    </select>
                    <select id="filter-natureza" class="input text-sm">
                        <option value="">Todas Naturezas</option>
                    </select>
                    <select id="filter-cc" class="input text-sm">
                        <option value="">Todos Centros de Custo</option>
                    </select>
                    <div class="flex gap-2">
                        <button id="btn-apply-filters" class="btn text-sm flex-1">Aplicar</button>
                        <button id="btn-clear-filters" class="btn-secondary text-sm">Limpar</button>
                    </div>
                </div>
                
                <!-- Date Range -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-border">
                    <input type="date" id="filter-date-start" class="input text-sm" placeholder="Data Início">
                    <input type="date" id="filter-date-end" class="input text-sm" placeholder="Data Fim">
                    <div class="flex items-center gap-4 flex-wrap">
                        <label class="flex items-center gap-2 text-sm text-text cursor-pointer">
                            <input type="checkbox" id="filter-only-delayed" class="rounded border-border text-primary focus:ring-primary">
                            <span class="font-display uppercase tracking-wide">Apenas Atrasados</span>
                        </label>
                        <label class="flex items-center gap-2 text-sm text-text cursor-pointer">
                            <input type="checkbox" id="filter-nf-conferida" class="rounded border-border text-primary focus:ring-primary">
                            <span class="font-display uppercase tracking-wide">NF Conferida</span>
                        </label>
                        <input type="text" id="filter-nf" class="input text-sm flex-1" placeholder="Número NF-e">
                    </div>
                </div>
            </div>
        `;
    },

    renderTable: (compras, obraMap = new Map()) => {
        if (!compras.length) return `<div class="text-center py-10 heading-muted">Nenhum registro encontrado.</div>`;

        return `
            <div class="bg-surface rounded shadow-heavy border border-border overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-border">
                        <thead class="bg-canvas">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Data</th>
                                <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Obra</th>
                                <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Descrição</th>
                                <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Valor</th>
                                <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Status</th>
                                <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">NF/CTE/RC</th>
                                <th class="px-6 py-3 text-right text-xs font-display text-text-muted uppercase tracking-wide">Ações</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-border">
                            ${compras.map(c => `
                                <tr class="hover:bg-canvas transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">${Utils.formatDate(c.data_solicitacao || c.data_emissao)}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-display text-text">${obraMap.get(c.obraId) || c.obraId || '-'}</td>
                                    <td class="px-6 py-4 text-sm text-text max-w-xs truncate" title="${c.descricao_compra || c.descricao || ''}">${c.descricao_compra || c.descricao || '-'}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">${Utils.formatCurrency(c.valor_total ?? c.valor_estimado ?? 0)}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        ${Utils.renderStatusBadge(c.status_compra, c.previsao_entrega || c.data_entrega_prevista)}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">
                                        ${c.pdf_nf_path ? `<a href="${c.pdf_nf_path}" target="_blank" class="text-primary underline text-xs">NF</a>` : '-'}
                                        ${c.pdf_cte_path ? `<a href="${c.pdf_cte_path}" target="_blank" class="text-primary underline text-xs ml-2">CTE</a>` : ''}
                                        ${c.comprovante_rc_path ? `<a href="${c.comprovante_rc_path}" target="_blank" class="text-primary underline text-xs ml-2">RC</a>` : ''}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div class="inline-flex items-center justify-end gap-2">
                                            <button class="text-text-muted hover:text-text inline-flex items-center" data-action="view" data-id="${c.id}" title="Ver">${Icons.eye}</button>
                                            <button class="text-primary hover:text-primary-strong inline-flex items-center" data-action="edit" data-id="${c.id}" title="Editar">${Icons.pencil}</button>
                                            <button class="text-alert hover:text-alert/80 inline-flex items-center" data-action="delete" data-id="${c.id}" title="Excluir">${Icons.trash}</button>
                                        </div>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    },

    renderKanban: (compras, obraMap = new Map()) => {
        const columns = ['Pendente', 'Em Cotação', 'Aprovado', 'Comprado', 'Entregue'];

        return `
            <div class="flex overflow-x-auto gap-4 pb-4 h-[calc(100vh-250px)]">
                ${columns.map(status => {
            const items = compras.filter(c => c.status_compra === status);
            return `
                        <div class="min-w-[300px] w-[300px] flex flex-col bg-surface border border-border rounded p-3 shadow-heavy">
                            <div class="flex justify-between items-center mb-3 px-1">
                                <h3 class="font-display text-text">${status}</h3>
                                <span class="bg-canvas text-text-muted text-xs px-2 py-1 rounded border border-border font-display">${items.length}</span>
                            </div>
                            <div class="flex-1 overflow-y-auto space-y-3 custom-scrollbar" ondragover="event.preventDefault()" ondrop="document.dispatchEvent(new CustomEvent('kanban-drop', {detail: {status: '${status}'}}))">
                                ${items.map(c => `
                                    <div class="bg-surface p-4 rounded shadow-heavy border border-border cursor-move hover:border-primary transition-colors" draggable="true" data-id="${c.id}">
                                        <div class="flex justify-between items-start mb-2">
                                            <span class="text-xs font-display text-primary bg-canvas px-2 py-0.5 rounded border border-primary">${obraMap.get(c.obraId) || c.obraId}</span>
                                            <span class="text-xs text-text-muted">${Utils.formatDate(c.data_solicitacao)}</span>
                                        </div>
                                        <p class="text-sm font-display text-text mb-2 line-clamp-2">${c.descricao_compra || c.descricao || '-'}</p>
                                        <div class="flex justify-between items-center mt-3">
                                            <span class="text-sm font-display text-primary uppercase">${Utils.formatCurrency(c.valor_total ?? c.valor_estimado ?? 0)}</span>
                                            <div class="flex items-center gap-2">
                                                ${c.pdf_nf_path ? `<a href="${c.pdf_nf_path}" target="_blank" class="text-primary underline text-xs" title="NF">NF</a>` : ''}
                                                ${c.pdf_cte_path ? `<a href="${c.pdf_cte_path}" target="_blank" class="text-primary underline text-xs" title="CTE">CTE</a>` : ''}
                                                ${c.comprovante_rc_path ? `<a href="${c.comprovante_rc_path}" target="_blank" class="text-primary underline text-xs" title="RC">RC</a>` : ''}
                                                <button class="text-text-muted hover:text-primary" title="Mover Próximo" onclick="document.dispatchEvent(new CustomEvent('kanban-move-next', {detail: {id: '${c.id}', current: '${status}'}}))">
                                                    →
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
        }).join('')}
            </div>
        `;
    }
};
