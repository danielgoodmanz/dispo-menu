import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import './index.css';
import App from './App.tsx';
import AddDealForm from '@/components/AddDealForm.tsx';
import ErrorPage from '@/components/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/dealform',
        element: <AddDealForm />,
      },
    ],
  },
  // TODO: create a landing page
  {
    path: '/landing',
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
