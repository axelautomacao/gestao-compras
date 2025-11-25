import { useFetch } from '../hooks/useFetch.js';
import { createElement } from '../utils/dom.js';

export function Dashboard() {
  const container = createElement('div', { className: 'dashboard-container' });
  container.textContent = 'Carregando...';

  useFetch('/obras').then(({ data: obras, error }) => {
    if (error) {
      container.textContent = 'Erro ao carregar as obras.';
      return;
    }

    if (!obras || obras.length === 0) {
      container.textContent = 'Nenhuma obra cadastrada.';
      return;
    }

    const list = createElement('ul', { className: 'obras-list' });

    const items = obras.map((obra) => {
      return createElement('li', { text: obra.nome });
    });

    list.append(...items);
    container.replaceChildren(list);
  });

  return container;
}