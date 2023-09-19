import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Authentication } from "./pages/Authentication/Authentication";
import { Database } from "./pages/Database/Database";
import { Storage } from "./pages/Storage/Storage";
import { Hosting } from "./pages/Hosting/Hosting";
import { Functions } from "./pages/Functions/Functions";
import { MachineLearning } from "./pages/MachineLearning/MachineLearning";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "authentication",
    element: <Authentication></Authentication>,
  },
  {
    path: "database",
    element: <Database></Database>,
  },
  {
    path: "storage",
    element: <Storage></Storage>,
  },
  {
    path: "hosting",
    element: <Hosting></Hosting>,
  },
  {
    path: "functions",
    element: <Functions></Functions>,
  },
  {
    path: "machine-learning",
    element: <MachineLearning></MachineLearning>,
  },
]);
