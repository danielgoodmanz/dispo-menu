import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';

import './index.css';
import App from './App.tsx';
import AddDealForm from '@/components/AddDealForm.tsx';
import ErrorPage from '@/components/ErrorPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='dealform' element={<AddDealForm />} />
        </Route>
        // TODO: add a landing page
        <Route path='landing' />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
