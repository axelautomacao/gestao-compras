import { createHeader } from "../components/Header.js";
import { Dashboard } from "../components/Dashboard.js";
import { NotificationCenter } from "../components/NotificationCenter.js";

export function HomePage() {
  const page = document.createElement("section");
  page.className = "page page-home";

  const header = createHeader({ title: "Gestão de Compras" });
  const dashboard = Dashboard();
  const notificationCenter = NotificationCenter();

  page.append(header, dashboard, notificationCenter);
  return page;
}