import { CadastrosView } from './cadastros.view.js';
import { Layout } from '../../ui/layout.js';

export const CadastrosController = {
    init: async () => {
        Layout.render(CadastrosView.renderMenu());
    }
};
