import { createRoot } from "react-dom/client";

import App from "./App";
import AppThemeProvider from "./components/ThemeProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";

const container = document.getElementById("root");
const root = createRoot(container!);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search/:q",
    element: <App />,
  },
]);

root.render(
  <AppThemeProvider>
    <RouterProvider router={router} />
  </AppThemeProvider>
);
