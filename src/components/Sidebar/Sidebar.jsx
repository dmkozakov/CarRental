import React from 'react';
import { Aside, Logo, Nav, StyledLink } from './Sidebar.styled';

export function Sidebar() {
  return (
    <Aside>
      <Logo to="/">CarRental</Logo>
      <Nav>
        <StyledLink to="/">Homepage</StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </Nav>
    </Aside>
  );
}
