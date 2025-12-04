import { state } from './state.js';
import { Utils } from './utils.js';
import { Data } from './data.js';
import { Icons } from './icons.js';

const $ = (id) => document.getElementById(id);
const VIEW_ICON = `<svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" /></svg>`;
const STATUS_FLOW = ['Nao iniciado', 'Em cotacao', 'Aprovado', 'Comprado', 'Recebido'];
const ITEMS_PER_PAGE = 50;
const paginationState = { page: 1, items: [] };
const normalizeStatus = (s = '') => {
    const map = {
        'Não iniciado': 'Nao iniciado',
        'Nao iniciado': 'Nao iniciado',
        'Em cotação': 'Em cotacao',
        'Em cotacao': 'Em cotacao'
    };
    return map[s] || s;
};

export const UIReports = {
    renderRelatorioComprasPage: () => {
        const renderMultiSelect = (elId, data, formatter) => {
            const el = $(elId);
            if (el) el.innerHTML = data.map(formatter).join('');
        };
        const renderSingleSelect = (elId, data, formatter) => {
            const el = $(elId);
            if (el) el.innerHTML = '<option value="">-- Todos --</option>' + data.map(formatter).join('');
        };

        // Filtros inferiores (Multi-select)
        renderMultiSelect('report-filter-obra', state.cache.obras, o => `<option value="${o.id}">${Utils.escapeHtml(o.nome_obra)}</option>`);
        renderMultiSelect('report-filter-fornecedor', state.cache.fornecedores, f => `<option value="${f.id}">${Utils.escapeHtml(f.nome)}</option>`);
        renderMultiSelect('report-filter-comprador', state.cache.compradores, c => `<option value="${c.id}">${Utils.escapeHtml(c.nome)}</option>`);

        // Filtros superiores (Single-select / Novos IDs)
        renderSingleSelect('report-filter-obra', state.cache.obras, o => `<option value="${o.id}">${Utils.escapeHtml(o.nome_obra)}</option>`);
        renderSingleSelect('report-filter-fornecedor-top', state.cache.fornecedores, f => `<option value="${f.id}">${Utils.escapeHtml(f.nome)}</option>`);
        renderSingleSelect('report-filter-comprador-top', state.cache.compradores, c => `<option value="${c.id}">${Utils.escapeHtml(c.nome)}</option>`);
        renderSingleSelect('report-filter-centrocusto-top', state.cache.centrosCusto || [], c => `<option value="${c.id}">${Utils.escapeHtml(c.nome)}</option>`);

        $('report-table-body').innerHTML = `<tr><td colspan="8" class="p-4 text-center text-[var(--text-secondary)]">Use os filtros e clique em "Buscar Compras".</td></tr>`;
        UIReports.toggleReportView('table');

        // Garantir binding do botão de busca (fallback caso listener global falhe)
        const btnBuscar = $('btn-report-buscar');
        if (btnBuscar && !btnBuscar.dataset.bound) {
            btnBuscar.dataset.bound = '1';
            btnBuscar.addEventListener('click', async () => {
                UIReports.showReportTableLoading(true);
                const getSelected = (id) => {
                    const select = $(id);
                    return select ? Array.from(select.selectedOptions).map(o => o.value) : [];
                };
                const safeValue = (id) => {
                    const input = $(id);
                    return input ? input.value : '';
                };
                const pushUnique = (arr, val) => {
                    if (val && !arr.includes(val)) arr.push(val);
                };

                try {
                    const filters = {
                        dateStart: $('report-filter-date-start')?.value || '',
                        dateEnd: $('report-filter-date-end')?.value || '',
                        status: safeValue('report-filter-status'),
                        natureza: safeValue('report-filter-natureza'),
                        obras: getSelected('report-filter-obra'),
                        fornecedores: getSelected('report-filter-fornecedor'),
                        compradores: getSelected('report-filter-comprador'),
                        centroCusto: safeValue('report-filter-centrocusto-top'),
                        numeroNf: safeValue('report-filter-numero'),
                        descricao: safeValue('report-filter-descricao').toLowerCase(),
                        searchText: safeValue('report-search-text').toLowerCase(),
                        sortCol: state.reportSort.col,
                        sortDir: state.reportSort.dir
                    };
                    pushUnique(filters.fornecedores, safeValue('report-filter-fornecedor-top'));
                    pushUnique(filters.compradores, safeValue('report-filter-comprador-top'));
                    const compras = await Data.findCompras(filters);
                    UIReports.renderReportTable(compras);
                } catch (err) {
                    console.error('Erro ao buscar compras:', err);
                    UIReports.renderReportTable([]);
                }
            });
        }
    },

    renderRelatoriosFornecedorPage: () => {
        const select = $('relatorio-fornecedor-select');
        if (!select) return;
        const current = select.value;
        select.innerHTML = `<option value="">Selecione um fornecedor</option>` +
            state.cache.fornecedores
                .map(f => `<option value="${f.id}">${Utils.escapeHtml(f.nome)}</option>`)
                .join('');
        select.value = current && state.cache.fornecedores.some(f => f.id === current) ? current : '';
        $('relatorio-fornecedor-content').classList.add('hidden');
        $('relatorio-fornecedor-table-body').innerHTML = '';
    },

    renderRelatorioFornecedor: async (fornecedorId) => {
        if (!fornecedorId) {
            $('relatorio-fornecedor-content').classList.add('hidden');
            return;
        }

        const fornecedor = state.cache.fornecedores.find(f => f.id === fornecedorId);
        if (!fornecedor) return;

        $('rel-forn-nome').textContent = Utils.escapeHtml(fornecedor.nome);

        const compras = await Data.getComprasByFornecedor(fornecedorId);

        const totalGasto = compras.reduce((sum, c) => sum + (c.valor_total || 0), 0);
        $('rel-forn-total').textContent = Utils.formatCurrency(totalGasto);

        const tableBody = $('relatorio-fornecedor-table-body');
        const obraMap = new Map(state.cache.obras.map(o => [o.id, `${o.nome_obra}${o.numero_os ? ` (${o.numero_os})` : ''}`]));

        tableBody.innerHTML = compras.length > 0
            ? compras.map(c => `
                <tr class="text-sm">
                    <td class="px-4 py-2">${Utils.escapeHtml(obraMap.get(c.obraId)) || 'Obra N/D'}</td>
                    <td class="px-4 py-2">${Utils.fmtBR(c.data_emissao)}</td>
                    <td class="px-4 py-2 font-medium">${Utils.escapeHtml(c.numero_nf)}</td>
                    <td class="px-4 py-2">${Utils.formatCurrency(c.valor_total)}</td>
                    <td class="px-4 py-2">
                        ${c.pdf_nf_path ? `<button data-action="view-pdf" data-path="${c.pdf_nf_path}" class="text-blue-600 hover:underline">NF-e</button>` : ''}
                        ${c.pdf_cte_path ? `<button data-action="view-pdf" data-path="${c.pdf_cte_path}" class="text-blue-600 hover:underline ml-2">CT-e</button>` : ''}
                    </td>
                </tr>`).join('')
            : `<tr><td colspan="5" class="p-4 text-center text-gray-500">Nenhuma compra encontrada.</td></tr>`;

        $('relatorio-fornecedor-content').classList.remove('hidden');
    },

    showReportTableLoading: (isLoading) => {
        const tableBody = $('report-table-body');
        if (isLoading) {
            tableBody.innerHTML = `<tr><td colspan="8" class="p-4 text-center text-gray-500">Buscando...</td></tr>`;
        }
    },

    renderReportTable: (compras) => {
        const tableBody = $('report-table-body');

        state.reportCompras = compras;
        paginationState.items = compras || [];
        paginationState.page = 1;
        UIReports.renderKanban(compras);

        const obraMap = new Map(state.cache.obras.map(o => [o.id, `${o.nome_obra}${o.numero_os ? ` (${o.numero_os})` : ''}`]));
        const compradorMap = new Map(state.cache.compradores.map(c => [c.id, c.nome]));

        const renderPage = () => {
            const totalItems = paginationState.items.length;
            const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
            paginationState.page = Math.min(Math.max(paginationState.page, 1), totalPages);
            const start = (paginationState.page - 1) * ITEMS_PER_PAGE;
            const slice = paginationState.items.slice(start, start + ITEMS_PER_PAGE);

            if (slice.length === 0) {
                tableBody.innerHTML = `<tr><td colspan="8" class="p-4 text-center text-gray-500">Nenhum resultado encontrado.</td></tr>`;
            } else {
                tableBody.innerHTML = slice.map(c => `
                    <tr class="text-sm">
                        <td class="px-4 py-2 whitespace-nowrap max-w-xs truncate">${Utils.escapeHtml(obraMap.get(c.obraId)) || 'N/D'}</td>
                        <td class="px-4 py-2 whitespace-nowrap">${Utils.escapeHtml(c.numero_nf)}</td>
                        <td class="px-4 py-2 whitespace-nowrap">${Utils.renderStatusBadge(c.status_compra, c.previsao_entrega)}</td>
                        <td class="px-4 py-2 whitespace-nowrap">${Utils.fmtBR(c.data_recebimento)}</td>
                        <td class="px-4 py-2 whitespace-nowrap">${Utils.fmtBR(c.data_emissao)}</td>
                        <td class="px-4 py-2 whitespace-nowrap max-w-xs truncate">${Utils.escapeHtml(compradorMap.get(c.compradorId)) || 'N/D'}</td>
                        <td class="px-4 py-2 whitespace-nowrap">${Utils.formatCurrency(c.valor_total)}</td>
                        <td class="px-4 py-2 flex items-center gap-2 whitespace-nowrap">
                            <button data-action="view-compra" data-id="${c.id}" class="btn-secondary btn-small" title="Visualizar">${Icons.eye}</button>
                            <button data-action="edit-compra" data-id="${c.id}" class="btn-secondary btn-small" title="Editar">${Icons.pencil}</button>
                            <button data-action="delete-compra" data-id="${c.id}" class="btn-danger btn-small" title="Excluir">${Icons.trash}</button>
                        </td>
                    </tr>
                `).join('');
            }

            const wrapper = $('report-table-wrapper');
            let pager = document.getElementById('report-pagination');
            if (!pager && wrapper) {
                pager = document.createElement('div');
                pager.id = 'report-pagination';
                wrapper.appendChild(pager);
            }
            if (pager) {
                pager.innerHTML = `
                    <div class="flex items-center justify-end gap-2 mt-3 text-sm text-[var(--text-secondary)]">
                        <button class="btn-secondary btn-small" data-page-action="prev" ${paginationState.page <= 1 ? 'disabled' : ''}>Anterior</button>
                        <span>Página ${paginationState.page} de ${totalPages}</span>
                        <button class="btn-secondary btn-small" data-page-action="next" ${paginationState.page >= totalPages ? 'disabled' : ''}>Próximo</button>
                    </div>`;
                pager.onclick = (e) => {
                    const btn = e.target.closest('[data-page-action]');
                    if (!btn) return;
                    const action = btn.dataset.pageAction;
                    if (action === 'prev' && paginationState.page > 1) paginationState.page -= 1;
                    if (action === 'next' && paginationState.page < totalPages) paginationState.page += 1;
                    renderPage();
                };
            }
        };

        renderPage();
    },

    renderKanban: (compras) => {
        const obraMap = new Map(state.cache.obras.map(o => [o.id, `${o.nome_obra}${o.numero_os ? ` (${o.numero_os})` : ''}`]));
        const colIds = {
            'Nao iniciado': 'kanban-col-nao-iniciado',
            'Em cotacao': 'kanban-col-em-cotacao',
            'Aprovado': 'kanban-col-aprovado',
            'Comprado': 'kanban-col-comprado',
            'Recebido': 'kanban-col-recebido'
        };
        STATUS_FLOW.forEach(status => {
            const col = $(colIds[status]);
            const countEl = document.querySelector(`[data-kanban-count="${status}"]`);
            const items = compras.filter(c => normalizeStatus(c.status_compra || 'Nao iniciado') === status);
            if (countEl) countEl.textContent = items.length;
            if (!col) return;
            col.innerHTML = items.length === 0 ? `<div class="text-xs text-[var(--text-secondary)]">Sem itens</div>` :
                items.map(c => `
                    <div class="border border-[var(--border-color)] rounded-lg p-3 bg-[var(--bg-secondary)] shadow-sm space-y-2">
                        <div class="flex justify-between items-center">
                            <div class="font-semibold text-sm">${Utils.escapeHtml(c.numero_nf || 'Sem NF')}</div>
                            <span class="text-xs text-[var(--text-secondary)]">${Utils.fmtBR(c.data_emissao)}</span>
                        </div>
                        <div class="text-xs text-[var(--text-secondary)]">${Utils.escapeHtml(obraMap.get(c.obraId) || 'Obra N/D')}</div>
                        <div class="text-sm font-semibold">${Utils.formatCurrency(c.valor_total || 0)}</div>
                        <div class="flex gap-2 flex-wrap">
                            <button class="btn-secondary btn-small" data-action="view-compra" data-id="${c.id}">Detalhes</button>
                            ${status !== 'Recebido' ? `<button class="btn btn-small" data-action="kanban-next" data-id="${c.id}" data-current="${status}">Mover</button>` : ''}
                        </div>
                    </div>
                `).join('');
        });
    },

    toggleReportView: (mode) => {
        const isKanban = mode === 'kanban';
        const board = $('kanban-board');
        const tableWrapper = $('report-table-wrapper');
        const tableBtn = $('view-table-toggle');
        const kanbanBtn = $('view-kanban-toggle');
        if (board) board.classList.toggle('hidden', !isKanban);
        if (tableWrapper) tableWrapper.classList.toggle('hidden', isKanban);
        if (tableBtn) {
            tableBtn.classList.toggle('btn', !isKanban);
            tableBtn.classList.toggle('btn-secondary', isKanban);
        }
        if (kanbanBtn) {
            kanbanBtn.classList.toggle('btn-secondary', !isKanban);
            kanbanBtn.classList.toggle('btn', isKanban);
        }
        if (isKanban && state.reportCompras?.length) {
            UIReports.renderKanban(state.reportCompras);
        }
    },

    getNextStatus: (current) => {
        const idx = STATUS_FLOW.indexOf(current);
        return idx >= 0 && idx < STATUS_FLOW.length - 1 ? STATUS_FLOW[idx + 1] : current;
    }
};
