import { Layout } from '../../ui/layout.js';
import { CompradoresView } from './compradores.view.js';
import { CompradoresService } from './compradores.service.js';

export const CompradoresController = {
    init: async () => {
        const lista = await CompradoresService.list();
        Layout.render(CompradoresView.render(lista));
        CompradoresController.bind();
    },

    bind: () => {
        const form = document.getElementById('comprador-form');
        const btnNovo = document.getElementById('btn-novo-comprador');
        const btnSalvar = document.getElementById('btn-salvar-comprador');
        const btnCancelar = document.getElementById('btn-cancelar-comprador');
        const table = document.getElementById('compr-table');
        let editingId = null;

        btnNovo?.addEventListener('click', () => form?.classList.remove('hidden'));
        btnCancelar?.addEventListener('click', () => form?.classList.add('hidden'));
        btnSalvar?.addEventListener('click', async () => {
            const payload = {
                nome: document.getElementById('compr-nome').value,
                email: document.getElementById('compr-email').value,
            };
            if (editingId) {
                await CompradoresService.update(editingId, payload);
            } else {
                await CompradoresService.create(payload);
            }
            CompradoresController.init();
        });

        table?.addEventListener('click', (e) => {
            const row = e.target.closest('tr[data-id]');
            if (row) {
                editingId = row.dataset.id;
                document.getElementById('compr-nome').value = row.dataset.nome || '';
                document.getElementById('compr-email').value = row.dataset.email || '';
                form?.classList.remove('hidden');
            }
        });
    }
};
