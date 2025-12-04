import { Layout } from '../../ui/layout.js';
import { CentrosView } from './centros.view.js';
import { CentrosService } from './centros.service.js';

export const CentrosController = {
    init: async () => {
        const lista = await CentrosService.list();
        Layout.render(CentrosView.render(lista));
        CentrosController.bind();
    },

    bind: () => {
        const form = document.getElementById('cc-form');
        const btnNovo = document.getElementById('btn-novo-cc');
        const btnSalvar = document.getElementById('btn-salvar-cc');
        const btnCancelar = document.getElementById('btn-cancelar-cc');
        const table = document.getElementById('cc-table');
        let editingId = null;

        btnNovo?.addEventListener('click', () => form?.classList.remove('hidden'));
        btnCancelar?.addEventListener('click', () => form?.classList.add('hidden'));
        btnSalvar?.addEventListener('click', async () => {
            const payload = {
                nome: document.getElementById('cc-nome').value,
                codigo: document.getElementById('cc-codigo').value,
            };
            if (editingId) {
                await CentrosService.update(editingId, payload);
            } else {
                await CentrosService.create(payload);
            }
            CentrosController.init();
        });

        table?.addEventListener('click', (e) => {
            const row = e.target.closest('tr[data-id]');
            if (row) {
                editingId = row.dataset.id;
                document.getElementById('cc-nome').value = row.dataset.nome || '';
                document.getElementById('cc-codigo').value = row.dataset.codigo || '';
                form?.classList.remove('hidden');
            }
        });
    }
};
