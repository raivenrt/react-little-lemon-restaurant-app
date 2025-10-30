import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("./Layout"));
const HomePage = lazy(() => import("./HomePage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <>About Page</> },
      { path: "menu", element: <>Menu Page</> },
      { path: "reservations", element: <>Reservations Page</> },
      { path: "order-online", element: <>Order Online Page</> },
      { path: "login", element: <>Login Page</> },
    ],
  },
]);

export default router;
