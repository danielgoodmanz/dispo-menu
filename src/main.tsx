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
import { KindeProvider } from '@kinde-oss/kinde-auth-react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <KindeProvider
        clientId='dcdbeb38cb4248fc8bd368f9d482d147'
        domain='https://danprojects.kinde.com'
        redirectUri='http://localhost:5173/'
        logoutUri='http://localhost:5173'
        // allow redirecting to any URL after login
        onRedirectCallback={(user, app_state) => {
          if (user && app_state?.redirectTo) {
            window.location = app_state.redirectTo.replace(
              ':user',
              user?.given_name
            );
          }
        }}
      >
        <AppContextProvider>
          <Routes>
            <Route caseSensitive={false} path='/' element={<App />} />
            <Route path='/landing' element={<LandingPage />} />
            <Route caseSensitive={false} path='/:agent' element={<App />}>
              <Route path='dealform' element={<AddDealForm />} />
              <Route path='interest/:dealNumber' element={<InterestForm />} />
            </Route>

            <Route path='/interest/:dealNumber' element={<InterestForm />} />

            {/* render a single deal */}
            <Route path='/:id' element={<App />} />
            {/* error route */}
            <Route path='/*' element={<ErrorPage />} />
          </Routes>
        </AppContextProvider>
      </KindeProvider>
    </BrowserRouter>
  </StrictMode>
);
