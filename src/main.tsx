import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App, Home, Movies, TvSeries, Bookmarked } from "./routes";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/movies",
        element: <Movies />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/tv-series",
        element: <TvSeries />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/bookmarked",
        element: <Bookmarked />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
