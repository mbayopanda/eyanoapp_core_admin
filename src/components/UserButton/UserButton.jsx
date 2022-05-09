import React from 'react';
import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  createStyles,
} from '@mantine/core';
import { ChevronRight } from 'tabler-icons-react';
import PropTypes from 'prop-types';

const useStyles = createStyles((theme) => ({
  user: {
    display: 'block',
    width: '100%',
    padding: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    },
  },
}));

const UserButton = ({ abbr, name, email, icon, ...others }) =>  {
  const { classes } = useStyles();

  return (
    <UnstyledButton className={classes.user} {...others}>
      <Group>
        <Avatar color="blue" radius="xl">{abbr}</Avatar>

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {name}
          </Text>

          <Text color="dimmed" size="xs">
            {email}
          </Text>
        </div>

        {icon || <ChevronRight size={14} />}
      </Group>
    </UnstyledButton>
  );
}

UserButton.propTypes = {
  abbr: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  icon: PropTypes.node,
}

export default UserButton;
