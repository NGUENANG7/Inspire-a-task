import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './layouts/Main';
import { TaskPage, FrontPage } from '../src/pages';
import { Auth0Provider } from '@auth0/auth0-react';
import { useAuth0 } from '@auth0/auth0-react';

// import { Photo } from './pages/Photo';
import './App.css';

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <Auth0Provider
      domain="jasdjames.us.auth0.com"
      clientId="UqgYtjVrcuf0gT52SKYMyu9jIU4c6Ril"
      redirectUri={window.location.origin}
    >
      {console.log(
        'authenticated IN RETURN!!!',
        isAuthenticated,
        'is loading!!!',
        isLoading
      )}
      <BrowserRouter>
        <Routes>
          <Route element={<Main />}>
            <Route path="/" element={<FrontPage />} />

            <Route path="/TaskPage" element={<TaskPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;
