import React, { useEffect, useState } from 'react';
import { Navbar, ScrollArea, createStyles } from '@mantine/core';
import UserButton from '../../UserButton/UserButton';
import { LinksGroup } from '../NavbarLinksGroup/NavbarLinksGroup';
import { list as getMenuList } from '../../../api/menus';
import { buildMenuTree } from 'services/buildMenuTree';
import useStore from 'store';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.default,
    paddingBottom: 0,
    paddingTop: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export default function NavbarNested(props) {
  const ssoServer = useStore(state => state.ssoServer);
  const userEmail = useStore(state => state.userEmail);
  const userName = useStore(state => state.userName);
  const userAbbr = userName.substr(0, 1).toUpperCase();
  const { classes } = useStyles();
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    let mounted = true;
    getMenuList(ssoServer)
      .then(items => {
        if(mounted) {
          const tree = buildMenuTree(items);
          setMenus(tree)
        }
      });
    return () => mounted = false;
  }, []);

  const links = menus.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Navbar {...props} pt={0} className={classes.navbar}>
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <UserButton
          abbr={userAbbr}
          name={userName}
          email={userEmail}
        />
      </Navbar.Section>
    </Navbar>
  );
}