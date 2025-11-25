import { createRouter } from "./router/index.js";
import "./styles/global.css";

const rootElement = document.getElementById("app-root");
const router = createRouter({ root: rootElement });

router.navigate(window.location.pathname);

window.addEventListener("popstate", () => {
  router.navigate(window.location.pathname);
});

window.addEventListener('navigate', (event) => {
  router.navigate(event.detail);
});