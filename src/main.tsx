import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';

import './index.css';
import App from './App.tsx';
import AddDealForm from '@/components/AddDealForm.tsx';
import ErrorPage from '@/components/ErrorPage.tsx';
import AppContextProvider from './contexts/AppContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='dealform' element={<AddDealForm />} />
          </Route>
          {/* render a single deal */}
          <Route path='/:id' element={<App />} />
          {/* TODO: add a landing page */}
          <Route path='landing' />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </AppContextProvider>
    </BrowserRouter>
  </StrictMode>
);
