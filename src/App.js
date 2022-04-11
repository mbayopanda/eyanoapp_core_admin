import React from 'react';

import { MantineProvider } from '@mantine/core';

import AppShell from './components/AppShell/AppShell';

import useStore from './store';

function App() {
  const isDark = useStore(state => state.isDark);
  const colorScheme = isDark ? 'dark' : 'default';

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
