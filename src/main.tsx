import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import AddDealForm from '@/components/AddDealForm.tsx';
import ErrorPage from '@/components/ErrorPage.tsx';
import InterestForm from '@/components/InterestForm.tsx';
import LandingPage from '@/components/LandingPage.tsx';
import App from './App.tsx';
import AppContextProvider from './contexts/AppContextProvider.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <Routes>
          <Route path='/landing' element={<LandingPage />} />
          <Route path='/' element={<App />}>
            <Route path='dealform' element={<AddDealForm />} />
            <Route path='interest/:dealNumber' element={<InterestForm />} />
          </Route>
          {/* render a single deal */}
          <Route path='/:id' element={<App />} />
          {/* TODO: add a landing page */}
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </AppContextProvider>
    </BrowserRouter>
  </StrictMode>
);
