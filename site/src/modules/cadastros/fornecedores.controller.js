import { Layout } from '../../ui/layout.js';
import { FornecedoresView } from './fornecedores.view.js';
import { FornecedoresService } from './fornecedores.service.js';

export const FornecedoresController = {
    init: async () => {
        const lista = await FornecedoresService.list();
        Layout.render(FornecedoresView.render(lista));
        FornecedoresController.bind();
    },

    bind: () => {
        const form = document.getElementById('fornecedor-form');
        const btnNovo = document.getElementById('btn-novo-fornecedor');
        const btnSalvar = document.getElementById('btn-salvar-fornecedor');
        const btnCancelar = document.getElementById('btn-cancelar-fornecedor');
        const table = document.querySelector('#fornecedor-table');

        btnNovo?.addEventListener('click', () => form?.classList.remove('hidden'));
        btnCancelar?.addEventListener('click', () => form?.classList.add('hidden'));
        let editingId = null;
        table?.addEventListener('click', (e) => {
            const row = e.target.closest('tr[data-id]');
            if (row) {
                editingId = row.dataset.id;
                document.getElementById('forn-nome').value = row.dataset.nome || '';
                document.getElementById('forn-email').value = row.dataset.email || '';
                document.getElementById('forn-telefone').value = row.dataset.telefone || '';
                document.getElementById('forn-cnpj').value = row.dataset.cnpj || '';
                form?.classList.remove('hidden');
            }
        });

        btnSalvar?.addEventListener('click', async () => {
            const payload = {
                nome: document.getElementById('forn-nome').value,
                email: document.getElementById('forn-email').value,
                telefone: document.getElementById('forn-telefone').value,
                cnpj: document.getElementById('forn-cnpj').value,
            };
            if (editingId) {
                await FornecedoresService.update(editingId, payload);
            } else {
                await FornecedoresService.create(payload);
            }
            FornecedoresController.init();
        });
    }
};
