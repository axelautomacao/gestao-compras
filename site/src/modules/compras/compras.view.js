import { Components } from '../../ui/components.js';

export const ComprasView = {
    renderForm: ({ obras = [], fornecedores = [], centros = [], compradores = [], compra = null } = {}) => {
        const isEdit = !!compra;
        const statusOptions = ['Pendente', 'Em Cotação', 'Aprovado', 'Comprado', 'Entregue', 'Recebido', 'Cancelado'];
        const aprovOptions = ['Aprovado', 'Pendente', 'Reprovado'];
        const naturezaOptions = ['Lista de Material inicial', 'Compra emergencial', 'Serviço', 'Transporte', 'Outros'];
        const prioridadeOptions = ['Normal', 'Alta', 'Crítica'];

        const formatDate = (val) => {
            if (!val) return '';
            const parsed = val?.toDate ? val.toDate() : new Date(val);
            return Number.isNaN(parsed.getTime()) ? '' : parsed.toISOString().split('T')[0];
        };

        const safeVal = (val) => String(val ?? '').replace(/"/g, '&quot;');
        const ensureOption = (arr, value) => (!value ? arr : (arr.includes(value) ? arr : [value, ...arr]));

        const naturaList = ensureOption(naturezaOptions, compra?.natureza_compra);
        const aprovList = ensureOption(aprovOptions, compra?.status_aprovacao);
        const statusList = ensureOption(statusOptions, compra?.status_compra);

        return `
            <div class="max-w-5xl mx-auto space-y-6">
                <div class="flex items-center justify-between">
                    <h2 class="text-2xl font-display text-text tracking-wide">${isEdit ? 'Editar Compra' : 'Nova Compra'}</h2>
                    <button class="btn-secondary" onclick="window.history.back()">Voltar</button>
                </div>

                <div class="flex items-center gap-2 text-sm font-display uppercase tracking-wide text-text-muted">
                    <div class="step-indicator" data-step="1">1. Dados Gerais</div>
                    <div class="step-indicator" data-step="2">2. Itens e Datas</div>
                    <div class="step-indicator" data-step="3">3. Anexos</div>
                </div>

                <form id="form-compra" class="space-y-6">
                    <div class="wizard-step" data-step="1">
                        <div class="card space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Obra</label>
                                    <select id="obraId" name="obraId" class="input" required>
                                        <option value="">Selecione...</option>
                                        ${obras.map(o => `
                                            <option value="${o.id}" ${compra?.obraId === o.id ? 'selected' : ''}>${o.nome_obra || o.apelido_obra || o.id}</option>
                                        `).join('')}
                                    </select>
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Status</label>
                                    <select id="status_compra" name="status_compra" class="input">
                                        ${statusList.map(s => `<option value="${s}" ${compra?.status_compra === s ? 'selected' : ''}>${s}</option>`).join('')}
                                    </select>
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Prioridade</label>
                                    <select id="prioridade" name="prioridade" class="input">
                                        ${prioridadeOptions.map(p => `<option value="${p}" ${compra?.prioridade === p ? 'selected' : ''}>${p}</option>`).join('')}
                                    </select>
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Natureza</label>
                                    <select id="natureza_compra" name="natureza_compra" class="input">
                                        ${naturaList.map(n => `<option value="${n}" ${compra?.natureza_compra === n ? 'selected' : ''}>${n}</option>`).join('')}
                                    </select>
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Status de Aprovação</label>
                                    <select id="status_aprovacao" name="status_aprovacao" class="input">
                                        ${aprovList.map(s => `<option value="${s}" ${compra?.status_aprovacao === s ? 'selected' : ''}>${s}</option>`).join('')}
                                    </select>
                                </div>
                                <div class="flex items-center gap-3 pt-6">
                                    <label class="flex items-center gap-2 text-sm text-text cursor-pointer">
                                        <input type="checkbox" id="retirada_estoque" name="retirada_estoque" class="rounded border-border text-primary focus:ring-primary" ${compra?.retirada_estoque ? 'checked' : ''}>
                                        <span class="font-display uppercase tracking-wide">Retirada de estoque</span>
                                    </label>
                                    <label class="flex items-center gap-2 text-sm text-text cursor-pointer">
                                        <input type="checkbox" id="nf_conferida" name="nf_conferida" class="rounded border-border text-primary focus:ring-primary" ${compra?.nf_conferida ? 'checked' : ''}>
                                        <span class="font-display uppercase tracking-wide">NF Conferida</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="wizard-step hidden" data-step="2">
                        <div class="card space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Descrição</label>
                                    <input id="descricao_compra" name="descricao_compra" class="input" placeholder="Descreva a compra" value="${safeVal(compra?.descricao_compra || compra?.descricao || '')}" required />
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Valor Total (R$)</label>
                                    <input id="valor_total" name="valor_total" type="text" inputmode="decimal" class="input" value="${compra ? (compra.valor_total ?? '').toString().replace('.', ',') : ''}" required />
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Fornecedor</label>
                                    <select id="fornecedorId" name="fornecedorId" class="input">
                                        <option value="">Selecione...</option>
                                        ${fornecedores.map(f => `
                                            <option value="${f.id}" data-name="${f.nome || f.empresa || ''}" ${compra?.fornecedorId === f.id ? 'selected' : ''}>${f.nome || f.empresa || f.id}</option>
                                        `).join('')}
                                    </select>
                                    <input id="cnpj_fornecedor" name="cnpj_fornecedor" class="input mt-2" placeholder="CNPJ (opcional)" value="${safeVal(compra?.cnpj_fornecedor || '')}" />
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Data de Emissão</label>
                                    <input id="data_emissao" name="data_emissao" type="date" class="input" value="${formatDate(compra?.data_emissao)}" />
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Previsão de Entrega</label>
                                    <input id="previsao_entrega" name="previsao_entrega" type="date" class="input" value="${formatDate(compra?.previsao_entrega || compra?.data_entrega_prevista)}" />
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Data de Recebimento</label>
                                    <input id="data_recebimento" name="data_recebimento" type="date" class="input" value="${formatDate(compra?.data_recebimento)}" />
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Centro de Custo</label>
                                    <select id="centroCustoId" name="centroCustoId" class="input">
                                        <option value="">Selecione...</option>
                                        ${centros.map(c => `
                                            <option value="${c.id}" ${compra?.centroCustoId === c.id ? 'selected' : ''}>${c.nome || c.codigo || c.id}</option>
                                        `).join('')}
                                    </select>
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Comprador</label>
                                    <select id="compradorId" name="compradorId" class="input">
                                        <option value="">Selecione...</option>
                                        ${compradores.map(c => `
                                            <option value="${c.id}" ${compra?.compradorId === c.id ? 'selected' : ''}>${c.nome || c.email || c.id}</option>
                                        `).join('')}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="card space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Solicitante</label>
                                    <input id="solicitante" name="solicitante" class="input" placeholder="Quem solicitou" value="${safeVal(compra?.solicitante || '')}" />
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Número NF-e</label>
                                    <input id="numero_nf" name="numero_nf" class="input" placeholder="Ex: 123456" value="${safeVal(compra?.numero_nf || '')}" />
                                </div>
                            </div>

                            <div id="justificativa-container" class="${compra?.justificativa_estouro_orcamento ? '' : 'hidden'}">
                                <label class="text-xs font-display text-text-muted uppercase tracking-wide">Justificativa (estouro de orçamento)</label>
                                <textarea id="justificativa" name="justificativa" class="input h-24" placeholder="Explique o motivo...">${safeVal(compra?.justificativa_estouro_orcamento || '')}</textarea>
                            </div>
                        </div>
                    </div>

                    <div class="wizard-step hidden" data-step="3">
                        <div class="card space-y-4">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h3 class="text-lg font-display text-text">Anexos</h3>
                                    <p class="text-sm text-text-muted">Envie NF, CTE e comprovante/RC.</p>
                                </div>
                                <input id="file-upload" type="file" class="hidden" multiple />
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                                <div class="flex flex-col gap-2">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">NF-e (PDF)</label>
                                    <input id="nf-upload" type="file" accept="application/pdf,image/*" class="input file:mr-2 file:px-3 file:py-2 file:border-0 file:bg-primary file:text-canvas">
                                    <p id="nf-upload-label" class="text-xs text-text-muted truncate"></p>
                                </div>
                                <div class="flex flex-col gap-2">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">CT-e (PDF)</label>
                                    <input id="cte-upload" type="file" accept="application/pdf,image/*" class="input file:mr-2 file:px-3 file:py-2 file:border-0 file:bg-primary file:text-canvas">
                                    <p id="cte-upload-label" class="text-xs text-text-muted truncate"></p>
                                </div>
                                <div class="flex flex-col gap-2">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Comprovante / RC</label>
                                    <input id="rc-upload" type="file" accept="application/pdf,image/*" class="input file:mr-2 file:px-3 file:py-2 file:border-0 file:bg-primary file:text-canvas">
                                    <p id="rc-upload-label" class="text-xs text-text-muted truncate"></p>
                                </div>
                            </div>
                            <div id="drop-zone" class="border-2 border-dashed border-border rounded p-6 text-center cursor-pointer hover:border-primary transition-colors">
                                <p class="text-text-muted">Arquivos adicionais (clique ou arraste)</p>
                            </div>
                            <div id="file-list" class="space-y-2"></div>
                        </div>
                    </div>

                    <div class="flex justify-between gap-2">
                        ${Components.createButton({ id: 'btn-prev', text: 'Voltar', type: 'button', variant: 'secondary', className: 'hidden' })}
                        <div class="flex-1"></div>
                        ${Components.createButton({ id: 'btn-next', text: 'Próximo', type: 'button', variant: 'secondary' })}
                        ${Components.createButton({ id: 'btn-submit', text: isEdit ? 'Salvar Alterações' : 'Registrar Solicitação', type: 'submit', className: 'hidden' })}
                        ${Components.createButton({ id: 'btn-cancel', text: 'Cancelar', variant: 'secondary', onClick: "window.history.back()" })}
                    </div>
                </form>
            </div>
        `;
    }
};
