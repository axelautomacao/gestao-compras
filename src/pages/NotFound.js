import { createHeader } from "../components/Header.js";

export function NotFoundPage() {
  const page = document.createElement("section");
  page.className = "page page-not-found";

  const header = createHeader({ title: "Página não encontrada" });
  const message = document.createElement("p");
  message.textContent =
    "Não encontramos o recurso solicitado. Verifique a URL ou volte ao início.";

  page.append(header, message);
  return page;
}