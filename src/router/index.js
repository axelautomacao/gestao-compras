import { routes } from "./routes.js";

export function createRouter({ root }) {
  if (!root) {
    throw new Error("Elemento root não encontrado para inicializar o roteador");
  }

  const render = (path, { replace = false } = {}) => {
    const component = routes[path] ?? routes["*"];
    const view = component();

    root.replaceChildren(view);

    if (!replace) {
      window.history.pushState({}, "", path);
    }
  };

  return {
    navigate: (path, options) => render(path, options),
  };
}