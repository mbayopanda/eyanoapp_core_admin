import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import {
  AppShell,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';

import AppHeader from '../AppHeader/AppHeader';
import NavbarNested from '../Navbar/NavbarNested/NavbarNested';
import useStore from '../../store';

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const isNavbarCollapsed = useStore(state => state.isNavbarCollapsed);
  const isSidebarCollapsed = useStore(state => state.isSidebarCollapsed);

  // App shell main styles
  const styles = {
    main: {
      background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    },
  };

  // left navigation bar
  const navbar = isNavbarCollapsed && <NavbarNested p="md" hiddenBreakpoint="lg" width={{ sm: 200, lg: 300 }} />;

  // aside component
  const asidePanel = <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
    <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
      <Text>Application sidebar</Text>
    </Aside>
  </MediaQuery>;

  // right aside panel
  const aside = isSidebarCollapsed && asidePanel;

  // app header
  const header = <>
    <AppHeader p="md">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
      </div>
    </AppHeader>
  </>;

  return (
    <AppShell
      fixed
      styles={styles}
      navbar={navbar}
      aside={aside}
      header={header}
    >
      <Outlet />
    </AppShell>
  );
}