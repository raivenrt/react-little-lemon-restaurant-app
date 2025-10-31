import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("./Layout"));
const HomePage = lazy(() => import("./HomePage"));
const BookingPage = lazy(() => import("./BookingPage"));
const MenuPage = lazy(() => import("./MenuPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <>About Page</> },
      { path: "menu", element: <MenuPage /> },
      { path: "reservations", element: <BookingPage /> },
      { path: "order-online", element: <>Order Online Page</> },
      { path: "login", element: <>Login Page</> },
    ],
  },
]);

export default router;
