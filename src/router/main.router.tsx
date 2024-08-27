import { createBrowserRouter } from "react-router-dom";

import { router } from "./router";
import { PublicRoutes } from "../enums";

export const appRoute = createBrowserRouter(router, {
  basename: PublicRoutes.HOME,
});
