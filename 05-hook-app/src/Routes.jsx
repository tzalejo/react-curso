import { createBrowserRouter } from "react-router-dom";
import { AboutPage, HomePage, LoginPage, MainApp } from "./09-useContext";
export const getRoutes = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <MainApp />,
      errorElement: <h2>Error</h2>,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
      ],
    },
  ]);
