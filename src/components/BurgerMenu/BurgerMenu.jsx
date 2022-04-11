import { ActionIcon } from '@mantine/core';
import React from 'react';
import { IndentDecrease, IndentIncrease } from 'tabler-icons-react';
import useStore from '../../store';



const BurgerMenu = () => {
  const isNavbarCollapsed = useStore(state => state.isNavbarCollapsed);
  const toggleNavbarCollapsed = useStore(state => state.toggleNavbarCollapsed);

  const toggleMenu = () => {
    toggleNavbarCollapsed();
  };

  return (
    <>
      {isNavbarCollapsed && <ActionIcon><IndentDecrease onClick={() => toggleMenu()} /></ActionIcon>}
      {!isNavbarCollapsed && <ActionIcon><IndentIncrease onClick={() => toggleMenu()} /></ActionIcon>}
    </>
  )
}

export default BurgerMenu