import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { appRoute } from "./router/main.router";

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={appRoute} />
    </Suspense>
  );
}
