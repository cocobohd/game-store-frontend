import { lazy } from "react";

// Layouts
export const MainLayout = lazy(() => import("../layouts/main.layout"));

// Pages
export const HomePage = lazy(() => import("../pages/home.page"));
export const ErrorPage = lazy(() => import("../pages/error.page"));
export const LoginPage = lazy(() => import("../pages/login.page"));
export const RegisterPage = lazy(() => import("../pages/register.page"));
