export const CompradoresView = {
    render: (compradores = []) => `
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <h2 class="text-2xl font-display text-text tracking-wide">Compradores</h2>
                <button class="btn" id="btn-novo-comprador">Novo Comprador</button>
            </div>
            <div id="comprador-form" class="hidden card p-4 space-y-3">
                <h3 class="text-lg font-display text-text">Comprador</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input id="compr-nome" class="input" placeholder="Nome">
                    <input id="compr-email" class="input" placeholder="Email">
                </div>
                <div class="flex gap-2">
                    <button id="btn-salvar-comprador" class="btn">Salvar</button>
                    <button id="btn-cancelar-comprador" class="btn-secondary">Cancelar</button>
                </div>
            </div>
            <div class="card">
                <div class="overflow-x-auto">
                    <table id="compr-table" class="min-w-full divide-y divide-border">
                        <thead class="bg-canvas">
                            <tr>
                                <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase">Nome</th>
                                <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase">Email</th>
                                <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase">Ações</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-border">
                            ${compradores.map(c => `
                                <tr data-id="${c.id}" data-nome="${c.nome || ''}" data-email="${c.email || ''}">
                                    <td class="px-4 py-2 text-sm text-text">${c.nome || '-'}</td>
                                    <td class="px-4 py-2 text-sm text-text-muted">${c.email || '-'}</td>
                                    <td class="px-4 py-2 text-sm text-primary">Editar</td>
                                </tr>
                            `).join('') || '<tr><td colspan="3" class="px-4 py-4 text-center heading-muted">Nenhum comprador</td></tr>'}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `
};
