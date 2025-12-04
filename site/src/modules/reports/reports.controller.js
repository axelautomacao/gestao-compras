import { ReportsService } from './reports.service.js';
import { ReportsView } from './reports.view.js';
import { Layout } from '../../ui/layout.js';
import { Components } from '../../ui/components.js';
import { ObrasService } from '../obras/obras.service.js';
import { Icons } from '../../ui/icons.js';
import { FornecedoresService } from '../cadastros/fornecedores.service.js';
import { CompradoresService } from '../cadastros/compradores.service.js';
import { CentrosService } from '../cadastros/centros.service.js';
import { Utils } from '../../utils/formatters.js';
import { NotificationManager } from '../notifications/notification.manager.js';

export const ReportsController = {
    currentView: 'table',
    compras: [],
    filters: {},
    obras: [],
    fornecedores: [],
    compradores: [],
    centros: [],
    obraMap: new Map(),
    fornecedorMap: new Map(),
    compradorMap: new Map(),
    centroMap: new Map(),

    init: async () => {
        await ReportsController.load();
        await ReportsController.render();
    },

    decorateCompras: () => {
        ReportsController.obraMap = new Map(ReportsController.obras.map(o => [o.id, o.nome_obra || o.apelido_obra || o.id]));
        ReportsController.fornecedorMap = new Map(ReportsController.fornecedores.map(f => [f.id, f.nome || f.empresa || f.id]));
        ReportsController.compradorMap = new Map(ReportsController.compradores.map(c => [c.id, c.nome || c.email || c.id]));
        ReportsController.centroMap = new Map(ReportsController.centros.map(c => [c.id, c.nome || c.codigo || c.id]));

        ReportsController.compras = ReportsController.compras.map(c => {
            const valor = Utils.parseCurrency(c.valor_total ?? c.valor_estimado ?? 0);
            return {
                ...c,
                valor_total: valor,
                obraNome: ReportsController.obraMap.get(c.obraId) || c.obraId || '-',
                fornecedorNome: ReportsController.fornecedorMap.get(c.fornecedorId) || c.fornecedor || '',
                compradorNome: ReportsController.compradorMap.get(c.compradorId) || c.comprador || '',
                centroCustoNome: ReportsController.centroMap.get(c.centroCustoId) || c.centro_custo || c.centroCustoId || '',
                pdf_nf_path: c.pdf_nf_path || null,
                pdf_cte_path: c.pdf_cte_path || null,
                comprovante_rc_path: c.comprovante_rc_path || null,
                anexos: c.anexos || []
            };
        });
    },

    load: async () => {
        const [compras, obras, fornecedores, compradores, centros] = await Promise.all([
            ReportsService.getCompras(),
            ObrasService.getObras(),
            FornecedoresService.list(),
            CompradoresService.list(),
            CentrosService.list()
        ]);
        ReportsController.compras = compras;
        ReportsController.obras = obras;
        ReportsController.fornecedores = fornecedores;
        ReportsController.compradores = compradores;
        ReportsController.centros = centros;
        ReportsController.decorateCompras();
    },

    render: async () => {
        const container = document.createElement('div');
        container.innerHTML = ReportsView.renderControls(ReportsController.currentView, ReportsController.obras);

        const contentDiv = document.createElement('div');
        contentDiv.id = 'reports-content';
        contentDiv.innerHTML = ReportsController.currentView === 'table'
            ? ReportsView.renderTable(ReportsController.compras, ReportsController.obraMap)
            : ReportsView.renderKanban(ReportsController.compras, ReportsController.obraMap);

        container.appendChild(contentDiv);
        Layout.render(container.innerHTML);

        ReportsController.bindEvents();
    },

    applyFilters: async () => {
        const search = document.getElementById('filter-search')?.value.toLowerCase() || '';
        const status = document.getElementById('filter-status')?.value || '';
        const obra = document.getElementById('filter-obra')?.value || '';
        const prioridade = document.getElementById('filter-prioridade')?.value || '';
        const natureza = document.getElementById('filter-natureza')?.value || '';
        const cc = document.getElementById('filter-cc')?.value || '';
        const fornecedor = document.getElementById('filter-fornecedor')?.value || '';
        const comprador = document.getElementById('filter-comprador')?.value || '';
        const statusAprov = document.getElementById('filter-status-aprov')?.value || '';
        const nfConferida = document.getElementById('filter-nf-conferida')?.checked || false;
        const nf = document.getElementById('filter-nf')?.value || '';
        const dateStart = document.getElementById('filter-date-start')?.value || '';
        const dateEnd = document.getElementById('filter-date-end')?.value || '';
        const onlyDelayed = document.getElementById('filter-only-delayed')?.checked || false;

        ReportsController.filters = { search, status, obra, prioridade, natureza, cc, fornecedor, comprador, statusAprov, nfConferida, nf, dateStart, dateEnd, onlyDelayed };
        ReportsController.compras = await ReportsService.getCompras(ReportsController.filters);
        ReportsController.decorateCompras();
        ReportsController.render();
    },

    bindEvents: () => {
        // Restaura filtros selecionados após re-render
        const setValue = (id, value) => {
            const el = document.getElementById(id);
            if (el) el.value = value ?? '';
        };
        setValue('filter-search', ReportsController.filters.search || '');
        setValue('filter-status', ReportsController.filters.status || '');
        setValue('filter-obra', ReportsController.filters.obra || '');
        setValue('filter-prioridade', ReportsController.filters.prioridade || '');
        setValue('filter-natureza', ReportsController.filters.natureza || '');
        setValue('filter-cc', ReportsController.filters.cc || '');
        setValue('filter-fornecedor', ReportsController.filters.fornecedor || '');
        setValue('filter-comprador', ReportsController.filters.comprador || '');
        setValue('filter-status-aprov', ReportsController.filters.statusAprov || '');
        setValue('filter-nf', ReportsController.filters.nf || '');
        setValue('filter-date-start', ReportsController.filters.dateStart || '');
        setValue('filter-date-end', ReportsController.filters.dateEnd || '');
        const delayed = document.getElementById('filter-only-delayed');
        if (delayed) delayed.checked = !!ReportsController.filters.onlyDelayed;
        const nfConf = document.getElementById('filter-nf-conferida');
        if (nfConf) nfConf.checked = !!ReportsController.filters.nfConferida;

        document.getElementById('view-table')?.addEventListener('click', () => {
            ReportsController.currentView = 'table';
            ReportsController.render();
        });

        document.getElementById('view-kanban')?.addEventListener('click', () => {
            ReportsController.currentView = 'kanban';
            ReportsController.render();
        });

        // Populate dynamic filter options for natureza/cc
        const natSelect = document.getElementById('filter-natureza');
        const ccSelect = document.getElementById('filter-cc');
        const fornSelect = document.getElementById('filter-fornecedor');
        const compSelect = document.getElementById('filter-comprador');
        if (natSelect) {
            const nats = Array.from(new Set(ReportsController.compras.map(c => (c.natureza_compra || 'Outros').trim())));
            natSelect.innerHTML = `<option value="">Todas Naturezas</option>` + nats.map(n => `<option value="${n}">${n}</option>`).join('');
        }
        if (ccSelect) {
            ccSelect.innerHTML = `<option value="">Todos Centros de Custo</option>` + ReportsController.centros.map(c => `<option value="${c.id}">${c.nome || c.codigo || c.id}</option>`).join('');
        }
        if (fornSelect) {
            fornSelect.innerHTML = `<option value="">Todos Fornecedores</option>` + ReportsController.fornecedores.map(f => `<option value="${f.id}">${f.nome || f.empresa || f.id}</option>`).join('');
        }
        if (compSelect) {
            compSelect.innerHTML = `<option value="">Todos Compradores</option>` + ReportsController.compradores.map(c => `<option value="${c.id}">${c.nome || c.id}</option>`).join('');
        }
        setValue('filter-natureza', ReportsController.filters.natureza || '');
        setValue('filter-cc', ReportsController.filters.cc || '');
        setValue('filter-fornecedor', ReportsController.filters.fornecedor || '');
        setValue('filter-comprador', ReportsController.filters.comprador || '');
        setValue('filter-status-aprov', ReportsController.filters.statusAprov || '');

        document.getElementById('btn-apply-filters')?.addEventListener('click', () => {
            ReportsController.applyFilters();
        });

        document.getElementById('btn-clear-filters')?.addEventListener('click', () => {
            document.getElementById('filter-search').value = '';
            document.getElementById('filter-status').value = '';
            document.getElementById('filter-obra').value = '';
            document.getElementById('filter-prioridade').value = '';
            document.getElementById('filter-natureza').value = '';
            document.getElementById('filter-cc').value = '';
            const forn = document.getElementById('filter-fornecedor');
            const comp = document.getElementById('filter-comprador');
            const nf = document.getElementById('filter-nf');
            const aprov = document.getElementById('filter-status-aprov');
            if (forn) forn.value = '';
            if (comp) comp.value = '';
            if (nf) nf.value = '';
            if (aprov) aprov.value = '';
            document.getElementById('filter-date-start').value = '';
            document.getElementById('filter-date-end').value = '';
            document.getElementById('filter-only-delayed').checked = false;
            const nfConf = document.getElementById('filter-nf-conferida');
            if (nfConf) nfConf.checked = false;
            ReportsController.applyFilters();
        });

        document.getElementById('btn-export-csv')?.addEventListener('click', () => {
            try {
                ReportsController.exportCsv();
            } catch (err) {
                Components.createToast('Erro ao exportar: ' + err.message, 'error');
            }
        });
        document.getElementById('btn-export-obra')?.addEventListener('click', () => {
            try {
                ReportsController.exportGrouped('obra');
            } catch (err) {
                Components.createToast('Erro ao exportar: ' + err.message, 'error');
            }
        });
        document.getElementById('btn-export-fornecedor')?.addEventListener('click', () => {
            try {
                ReportsController.exportGrouped('fornecedor');
            } catch (err) {
                Components.createToast('Erro ao exportar: ' + err.message, 'error');
            }
        });

        // Modal handlers for view/edit
        document.querySelectorAll('[data-action="view"]').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;
                const compra = ReportsController.compras.find(c => c.id === id);
                if (!compra) return alert('Compra não encontrada.');
                ReportsController.showModal(compra, false);
            });
        });

        document.querySelectorAll('[data-action="edit"]').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;
                const compra = ReportsController.compras.find(c => c.id === id);
                if (!compra) return alert('Compra não encontrada.');
                ReportsController.showModal(compra, true);
            });
        });

        document.querySelectorAll('[data-action="delete"]').forEach(btn => {
            btn.addEventListener('click', async () => {
                const id = btn.dataset.id;
                const ok = await NotificationManager.confirm({ message: 'Confirmar exclusão da compra?' });
                if (!ok) return;
                try {
                    await ReportsService.deleteCompra(id);
                    Components.createToast('Compra excluída.');
                    await ReportsController.load();
                    ReportsController.render();
                } catch (err) {
                    Components.createToast('Erro ao excluir: ' + err.message, 'error');
                }
            });
        });

        document.addEventListener('kanban-move-next', async (e) => {
            const { id, current } = e.detail;
            const flow = ['Pendente', 'Em Cotação', 'Aprovado', 'Comprado', 'Entregue'];
            const nextIdx = flow.indexOf(current) + 1;

            if (nextIdx < flow.length) {
                const nextStatus = flow[nextIdx];
                try {
                    await ReportsService.updateStatus(id, nextStatus);
                    Components.createToast(`Movido para ${nextStatus}`);
                    await ReportsController.load();
                    ReportsController.render();
                } catch (err) {
                    Components.createToast('Erro ao mover: ' + err.message, 'error');
                }
            }
        });
    },

    showModal: (compra, editable = false) => {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4';
        const lastUpdate = Utils.formatLastUpdate(compra);

        const selectOptions = (items = [], selected, formatter = (i) => i.label) => items.map(item => {
            const val = item.value ?? item.id;
            const label = formatter(item);
            return `<option value="${val}" ${selected === val ? 'selected' : ''}>${label}</option>`;
        }).join('');

        const section = (label, content) => `
            <div>
                <label class="text-xs heading-muted uppercase">${label}</label>
                ${content}
            </div>
        `;

        modal.innerHTML = `
            <div class="bg-surface border border-border rounded shadow-heavy w-full max-w-4xl">
                <div class="flex justify-between items-center px-4 py-3 border-b border-border">
                    <h3 class="text-lg font-display text-text">${editable ? 'Editar Compra' : 'Detalhes da Compra'}</h3>
                    <button id="modal-close" class="text-text-muted hover:text-text">${Icons.close}</button>
                </div>
                <div class="p-4 space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${section('Obra', editable
            ? `<select id="modal-obra" class="input">
                                    ${selectOptions(ReportsController.obras, compra.obraId, (o) => o.nome_obra || o.apelido_obra || o.id)}
                                </select>`
            : `<p class="text-text">${compra.obraNome || compra.obraId || '-'}</p>`)}
                        ${section('Status', editable
            ? `<select id="modal-status" class="input">${['Pendente','Em Cotação','Aprovado','Comprado','Entregue','Recebido','Cancelado'].map(s=>`<option value="${s}" ${compra.status_compra===s?'selected':''}>${s}</option>`).join('')}</select>`
            : `<p class="text-text">${compra.status_compra || '-'}</p>`)}
                        ${section('Descrição', editable
            ? `<input id="modal-desc" class="input" value="${(compra.descricao_compra || compra.descricao || '').replace(/"/g,'&quot;')}">`
            : `<p class="text-text">${compra.descricao_compra || compra.descricao || '-'}</p>`)}
                        ${section('Valor', editable
            ? `<input id="modal-valor" type="number" step="0.01" class="input" value="${compra.valor_total ?? compra.valor_estimado ?? 0}">`
            : `<p class="text-text">${Utils.formatCurrency(compra.valor_total ?? compra.valor_estimado ?? 0)}</p>`)}
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${section('Fornecedor', editable
            ? `<select id="modal-fornecedor" class="input"><option value="">Selecione...</option>${selectOptions(ReportsController.fornecedores, compra.fornecedorId, (f)=>f.nome || f.empresa || f.id)}</select>`
            : `<p class="text-text">${compra.fornecedorNome || compra.fornecedor || '-'}</p>`)}
                        ${section('Comprador', editable
            ? `<select id="modal-comprador" class="input"><option value="">Selecione...</option>${selectOptions(ReportsController.compradores, compra.compradorId, (c)=>c.nome || c.email || c.id)}</select>`
            : `<p class="text-text">${compra.compradorNome || compra.comprador || '-'}</p>`)}
                        ${section('Centro de Custo', editable
            ? `<select id="modal-cc" class="input"><option value="">Selecione...</option>${selectOptions(ReportsController.centros, compra.centroCustoId, (c)=>c.nome || c.codigo || c.id)}</select>`
            : `<p class="text-text">${compra.centroCustoNome || '-'}</p>`)}
                        ${section('Natureza', editable
            ? `<input id="modal-natureza" class="input" value="${(compra.natureza_compra || '').replace(/"/g,'&quot;')}" />`
            : `<p class="text-text">${compra.natureza_compra || '-'}</p>`)}
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        ${section('NF-e', compra.pdf_nf_path ? `<a href="${compra.pdf_nf_path}" target="_blank" class="text-primary underline break-all">Abrir NF</a>` : '-')}
                        ${section('CT-e', compra.pdf_cte_path ? `<a href="${compra.pdf_cte_path}" target="_blank" class="text-primary underline break-all">Abrir CT-e</a>` : '-')}
                        ${section('Comprovante/RC', compra.comprovante_rc_path ? `<a href="${compra.comprovante_rc_path}" target="_blank" class="text-primary underline break-all">Abrir RC</a>` : '-')}
                    </div>
                    ${compra.anexos?.length ? `
                        <div class="space-y-2">
                            <label class="text-xs heading-muted uppercase">Anexos</label>
                            <ul class="list-disc list-inside text-sm text-text">
                                ${compra.anexos.map(a => `<li><a class="text-primary underline break-all" target="_blank" href="${a.url}">${a.nome || 'Arquivo'}</a></li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        ${section('Data Emissão', editable
            ? `<input id="modal-emissao" type="date" class="input" value="${(compra.data_emissao || '').split('T')[0]}">`
            : `<p class="text-text">${Utils.formatDate(compra.data_emissao)}</p>`)}
                        ${section('Prev. Entrega', editable
            ? `<input id="modal-prev" type="date" class="input" value="${(compra.previsao_entrega || compra.data_entrega_prevista || '').split('T')[0]}">`
            : `<p class="text-text">${Utils.formatDate(compra.previsao_entrega || compra.data_entrega_prevista)}</p>`)}
                        ${section('Recebimento', editable
            ? `<input id="modal-receb" type="date" class="input" value="${(compra.data_recebimento || '').split('T')[0]}">`
            : `<p class="text-text">${Utils.formatDate(compra.data_recebimento)}</p>`)}
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${section('Última modificação', `<p class="text-text">${lastUpdate}</p>`)}
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${section('Número NF-e', editable
            ? `<input id="modal-nf" class="input" value="${(compra.numero_nf || '').replace(/"/g,'&quot;')}">`
            : `<p class="text-text">${compra.numero_nf || '-'}</p>`)}
                        ${section('CNPJ Fornecedor', editable
            ? `<input id="modal-cnpj" class="input" value="${(compra.cnpj_fornecedor || '').replace(/"/g,'&quot;')}" />`
            : `<p class="text-text">${compra.cnpj_fornecedor || '-'}</p>`)}
                        ${section('Status Aprovação', editable
            ? `<select id="modal-aprov" class="input">${['Aprovado','Pendente','Reprovado'].map(s=>`<option value="${s}" ${compra.status_aprovacao===s?'selected':''}>${s}</option>`).join('')}</select>`
            : `<p class="text-text">${compra.status_aprovacao || '-'}</p>`)}
                    </div>

                    ${editable ? `
                        <label class="inline-flex items-center gap-2 text-sm text-text cursor-pointer">
                            <input id="modal-nf-conferida" type="checkbox" class="rounded border-border text-primary focus:ring-primary" ${compra.nf_conferida ? 'checked' : ''}>
                            <span class="font-display uppercase tracking-wide">NF Conferida</span>
                        </label>
                    ` : ''}

                    <div class="flex justify-end gap-2">
                        ${editable ? `<button id="modal-save" class="btn">Salvar</button>` : ''}
                        <button id="modal-close-2" class="btn-secondary">Fechar</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        const close = () => modal.remove();
        modal.querySelector('#modal-close')?.addEventListener('click', close);
        modal.querySelector('#modal-close-2')?.addEventListener('click', close);

        if (editable) {
            modal.querySelector('#modal-save')?.addEventListener('click', async () => {
                const updates = {
                    obraId: modal.querySelector('#modal-obra')?.value || compra.obraId,
                    status_compra: modal.querySelector('#modal-status')?.value || compra.status_compra,
                    descricao_compra: modal.querySelector('#modal-desc')?.value || '',
                    valor_total: Number(modal.querySelector('#modal-valor')?.value || 0),
                    fornecedorId: modal.querySelector('#modal-fornecedor')?.value || '',
                    compradorId: modal.querySelector('#modal-comprador')?.value || '',
                    centroCustoId: modal.querySelector('#modal-cc')?.value || '',
                    natureza_compra: modal.querySelector('#modal-natureza')?.value || '',
                    numero_nf: modal.querySelector('#modal-nf')?.value || '',
                    cnpj_fornecedor: modal.querySelector('#modal-cnpj')?.value || '',
                    status_aprovacao: modal.querySelector('#modal-aprov')?.value || compra.status_aprovacao,
                    data_emissao: modal.querySelector('#modal-emissao')?.value || '',
                    previsao_entrega: modal.querySelector('#modal-prev')?.value || '',
                    data_recebimento: modal.querySelector('#modal-receb')?.value || '',
                    nf_conferida: modal.querySelector('#modal-nf-conferida')?.checked || false,
                };
                ['data_emissao', 'previsao_entrega', 'data_recebimento'].forEach(f => {
                    if (updates[f] === '') delete updates[f];
                });

                try {
                    if (updates.cnpj_fornecedor && !Utils.validateCNPJ(updates.cnpj_fornecedor)) {
                        alert('CNPJ inválido.');
                        return;
                    }
                    await ReportsService.updateCompra(compra.id, updates);
                    close();
                    await ReportsController.load();
                    ReportsController.render();
                    Components.createToast('Compra atualizada.');
                } catch (err) {
                    alert('Erro ao salvar: ' + err.message);
                }
            });
        }
    },

    exportCsv: () => {
        if (!ReportsController.compras.length) {
            Components.createToast('Sem dados para exportar.', 'warning');
            return;
        }
        const obraMap = new Map(ReportsController.obras.map(o => [o.id, o.nome_obra || o.apelido_obra || o.id]));
        const fornMap = new Map(ReportsController.fornecedores.map(f => [f.id, f.nome || f.empresa || f.id]));
        const compMap = new Map(ReportsController.compradores.map(c => [c.id, c.nome || c.id]));
        const ccMap = new Map(ReportsController.centros.map(c => [c.id, c.nome || c.codigo || c.id]));

        const header = [
            'Obra',
            'NF-e',
            'Valor',
            'Data Emissão',
            'Status',
            'Data Recebimento',
            'Prev. Entrega',
            'Natureza',
            'Centro Custo',
            'Comprador',
            'Fornecedor',
            'CNPJ Fornecedor',
            'Justificativa Estouro',
            'Status Aprovação'
        ];
        const rows = ReportsController.compras.map((c) => ([
            `"${obraMap.get(c.obraId) || c.obraId || ''}"`,
            `"${c.numero_nf || ''}"`,
            String(c.valor_total || c.valor_estimado || 0).replace('.', ','),
            c.data_emissao || '',
            c.status_compra || '',
            c.data_recebimento || '',
            c.previsao_entrega || c.data_entrega_prevista || '',
            c.natureza_compra || '',
            ccMap.get(c.centroCustoId) || c.centroCustoNome || c.centro_custo || c.centroCustoId || '',
            compMap.get(c.compradorId) || c.comprador || '',
            fornMap.get(c.fornecedorId) || c.fornecedor || '',
            c.cnpj_fornecedor || '',
            (c.justificativa_estouro_orcamento || '').replace(/"/g, "'"),
            c.status_aprovacao || ''
        ]));

        let csv = '\ufeff' + header.join(';') + '\n';
        csv += rows.map(r => r.join(';')).join('\n');

        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `compras_${new Date().toISOString().slice(0,10)}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    },

    exportGrouped: (type = 'obra') => {
        const compras = ReportsController.compras || [];
        if (!compras.length) {
            Components.createToast('Sem dados para exportar.', 'warning');
            return;
        }
        const isObra = type === 'obra';
        const header = isObra
            ? ['Obra', 'Qtd', 'Total (R$)']
            : ['Fornecedor', 'Qtd', 'Total (R$)'];
        const map = new Map();
        compras.forEach(c => {
            const key = isObra
                ? (ReportsController.obraMap.get(c.obraId) || c.obraId || 'N/D')
                : (ReportsController.fornecedorMap.get(c.fornecedorId) || c.fornecedor || 'N/D');
            const atual = map.get(key) || { qtd: 0, total: 0 };
            atual.qtd += 1;
            atual.total += Number(c.valor_total ?? c.valor_estimado ?? 0);
            map.set(key, atual);
        });
        const rows = Array.from(map.entries()).map(([k, v]) => [
            `"${k}"`,
            v.qtd,
            v.total.toFixed(2).replace('.', ',')
        ]);
        let csv = '\ufeff' + header.join(';') + '\n';
        csv += rows.map(r => r.join(';')).join('\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `compras_${type}_${new Date().toISOString().slice(0,10)}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
};
