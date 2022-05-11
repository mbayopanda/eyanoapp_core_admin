import React, { useEffect } from 'react';
import { HashRouter, Routes, Route  } from "react-router-dom";
import JWTDecode from "jwt-decode";
import Cookies from 'js-cookie';
import { MantineProvider } from '@mantine/core';
import AppShell from './components/AppShell/AppShell';
import useStore from './store';
import HomePage from './pages/HomePage';
import UserProfilePage from './pages/UserProfilePage';
import UserDashboardPage from './pages/UserDashboardPage';
import NoMatchPage from './pages/NoMatchPage';
import UsersPage from './pages/UsersPage';
import AppsPage from './pages/AppsPage';
import AppProfilePage from './pages/AppProfilePage';
import AppsDashboardPage from './pages/AppsDashboardPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  const isDark = useStore(state => state.isDark);
  const setSsoServer = useStore(state => state.setSsoServer);
  const setUserEmail = useStore(state => state.setUserEmail);
  const setUserName = useStore(state => state.setUserName);
  const setUserIsAdmin = useStore(state => state.setUserIsAdmin);
  const colorScheme = isDark ? 'dark' : 'default';

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const ssoToken = searchParams.get('ssoToken');
    if (ssoToken) {
      // replace the url on the first loading
      // for removing the query string contained in the url
      window.location.replace('/')
    }
  }, []);

  // decoded but not verified
  // already verified by the app server
  try {
    const ssoToken = Cookies.get('ssoToken');
    const decoded = JWTDecode(ssoToken);
    setSsoServer(decoded.sso_server);
    setUserEmail(decoded.email);
    setUserName(decoded.display_name);
    setUserIsAdmin(decoded.is_admin);
  } catch (error) {
    window.location.replace('/login')
  }

  const theme = {
    colorScheme,
  }

  return (
    <MantineProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<AppShell />}>
            <Route index element={<HomePage />} />

            {/* Dashboard routes */}
            <Route path="dashboard">
              <Route path="users" element={<UserDashboardPage />} />
              <Route path="apps" element={<AppsDashboardPage />} />
            </Route>

            {/* Users routes */}
            <Route path="users" element={<UsersPage />}>
              <Route path="profile" element={<UserProfilePage />} />
            </Route>

            {/* Apps routes */}
            <Route path="apps" element={<AppsPage />}>
              <Route path="profile" element={<AppProfilePage />} />
            </Route>
            
            {/* Settings Page */}
            <Route path='settings' element={<SettingsPage />} />

            {/* Using path="*"" means "match anything", so this route
                  acts like a catch-all for URLs that we don't have explicit
                  routes for. */}
            <Route path="*" element={<NoMatchPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </MantineProvider>
  );
}

export default App;
