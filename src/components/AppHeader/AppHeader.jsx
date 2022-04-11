import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, Header, Autocomplete, Group, ActionIcon, MediaQuery } from '@mantine/core';
import { Logout, MoonStars, Notification, Search, Sun } from 'tabler-icons-react';
import Logo from '../Logo/Logo';

import useStore from '../../store';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },
}));

export default function AppHeader() {
  const toggleDark = useStore(state => state.toggleDark);
  const toggleSidebar = useStore(state => state.toggleSidebarCollapsed);
  const isDark = useStore(state => state.isDark);
  const colorScheme = isDark ? 'dark' : 'default';

  const callToggleDark = () => {
    toggleDark();
  }
  const callLogout = () => {
    // logout and destroy session
  }
  const callShowNotification = () => {
    // toggle aside panel
    toggleSidebar();
  }
  const { classes } = useStyles();

  return (
    <Header height={56} className={classes.header} mb={0}>
      <div className={classes.inner}>
        <Group>
          <BurgerMenu size="sm" />
          <Logo variant={colorScheme} height={36} />
        </Group>

        <Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            radius='xl'
            icon={<Search size={16} />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
          />

          <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
            <ActionIcon
              variant="outline"
              color={isDark ? 'yellow' : 'blue'}
              radius='xl'
              onClick={() => callShowNotification()}
              title="Show Notification"
            >
              <Notification size={18} />
            </ActionIcon>
          </MediaQuery>

          <ActionIcon
            variant="outline"
            color={isDark ? 'yellow' : 'blue'}
            radius='xl'
            onClick={() => callToggleDark()}
            title="Toggle color scheme"
          >
            {isDark ? <Sun size={18} /> : <MoonStars size={18} />}
          </ActionIcon>

          <ActionIcon
            variant="outline"
            color={isDark ? 'yellow' : 'blue'}
            radius='xl'
            onClick={() => callLogout()}
            title="Logout"
          >
            <Logout size={18} />
          </ActionIcon>
        </Group>
      </div>
    </Header>
  );
}

AppHeader.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({ link: PropTypes.string, label: PropTypes.string }))
}