import React from 'react';

import jwt_decode from "jwt-decode";

import { MantineProvider } from '@mantine/core';

import AppShell from './components/AppShell/AppShell';

import useStore from './store';

function App() {
  const isDark = useStore(state => state.isDark);
  const setSsoServer = useStore(state => state.setSsoServer);
  const setUserEmail = useStore(state => state.setUserEmail);
  const setUserName = useStore(state => state.setUserName);
  const setUserIsAdmin = useStore(state => state.setUserIsAdmin);
  const colorScheme = isDark ? 'dark' : 'default';

  const searchParams = new URLSearchParams(window.location.search);
  const ssoToken = searchParams.get('ssoToken');
  // decoded but not verified
  // already verified by the app server
  const decoded = jwt_decode(ssoToken);
  setSsoServer(decoded.sso_server);
  setUserEmail(decoded.email);
  setUserName(decoded.display_name);
  setUserIsAdmin(decoded.is_admin);

  const theme = {
    colorScheme,
  }

  return (
    <MantineProvider theme={theme}>
      <AppShell />
    </MantineProvider>
  );
}

export default App;
