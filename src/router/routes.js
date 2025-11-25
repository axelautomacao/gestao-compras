import { HomePage } from "../pages/Home.js";
import { NotFoundPage } from "../pages/NotFound.js";

export const routes = {
  "/": HomePage,
  "*": NotFoundPage,
};
