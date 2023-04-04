import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { App, Home, Movies, TvSeries, Bookmarked } from './routes';
import ErrorPage from './error-page';
// import { getAllMedia } from './api';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        // loader: () => getAllMediaItems(),
        element: <Home />,
      },
      {
        path: '/movies',
        element: <Movies />,
      },
      {
        path: '/tv-series',
        element: <TvSeries />,
      },
      {
        path: '/bookmarked',
        element: <Bookmarked />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
