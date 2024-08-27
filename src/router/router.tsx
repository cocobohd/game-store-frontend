import { RouteObject } from "react-router-dom";

import { HomePage, MainLayout, ErrorPage, LoginPage, RegisterPage } from "./lazy-components";
import { PublicRoutes } from "../enums";

interface RoutesItem {
  path: string;
  element: JSX.Element;
  children?: RoutesItem[];
}

const routesElements: RoutesItem[] = [
  {
    path: PublicRoutes.HOME,
    element: <HomePage />,
  },
  {
    path: PublicRoutes.LOGIN,
    element: <LoginPage />,
  },
  {
    path: PublicRoutes.REGISTER,
    element: <RegisterPage />,
  },
];

const renderRoute = ({ path, element, children }: RoutesItem): RouteObject => ({
  path,
  element,
  children: children?.map(renderRoute),
});

export const router: RouteObject[] = [
  {
    path: PublicRoutes.HOME,
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: routesElements.map(renderRoute),
  },
];
