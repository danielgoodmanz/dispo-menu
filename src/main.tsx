import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import AddDealForm from '@/components/AddDealForm.tsx';
import ErrorPage from '@/components/ErrorPage.tsx';
import LandingPage from '@/components/LandingPage.tsx';
import App from './App.tsx';
import AppContextProvider from './contexts/AppContextProvider.tsx';
import './index.css';
import { KindeProvider } from '@kinde-oss/kinde-auth-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import InterestDialog from '@/components/InterestDialog.tsx';

//creating the query client
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <KindeProvider
          clientId='dcdbeb38cb4248fc8bd368f9d482d147'
          domain='https://danprojects.kinde.com'
          redirectUri='https://dispo-menu.netlify.app/'
          logoutUri='https://dispo-menu.netlify.app/'
          // allow redirecting to any URL after login
          // onRedirectCallback={(user, app_state) => {
          //   if (user && app_state?.redirectTo) {
          //     // @ts-expect-error need to type .replace() method
          //     window.location.href = app_state.redirectTo.replace(
          //       ':user',
          //       user?.given_name
          //     );
          //   }
          // }}
        >
          <AppContextProvider>
            <Routes>
              <Route caseSensitive={false} path='/' element={<App />}>
                <Route path='/marksold/:id' element={<InterestDialog />} />
                <Route path='/dealform' element={<AddDealForm />} />
              </Route>
              <Route path='/landing' element={<LandingPage />} />

              {/* not needed in one-menu branch */}
              {/* <Route caseSensitive={false} path='/:agent' element={<App />}>
                <Route path='interest/:dealNumber' element={<InterestForm />} />
              </Route> */}

              {/* <Route path='/interest/:dealNumber' element={<InterestForm />} /> */}

              {/* render a single deal */}
              <Route path='/:id' element={<App />} />
              {/* error route */}
              <Route path='/*' element={<ErrorPage />} />
            </Routes>
          </AppContextProvider>
        </KindeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
