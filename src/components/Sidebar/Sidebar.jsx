import React from 'react';
import { NavLink } from 'react-router-dom';
import { Aside, Nav } from './Sidebar.styled';

export function Sidebar() {
  return (
    <Aside>
      <Nav>
        <NavLink to="/">Homepage</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </Nav>
    </Aside>
  );
}
