import { createRoot } from "react-dom/client";

import Search from "./routes/Search";
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
    path: "/search/:search",
    element: <Search />,
  },
]);

root.render(
  <AppThemeProvider>
    <RouterProvider router={router} />
  </AppThemeProvider>
);
