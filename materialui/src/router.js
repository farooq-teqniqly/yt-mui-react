import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Authentication } from "./pages/Authentication/Authentication";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "authentication",
    element: <Authentication></Authentication>,
  },
]);
