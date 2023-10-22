import styled from '@emotion/styled';
import { PALETTE } from 'helpers/palette';
import { Link, NavLink } from 'react-router-dom';

export const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;

  width: 200px;
  height: 100vh;
  padding: 12px 16px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  border-right: 1px dashed ${PALETTE.accentColor};
  background-color: ${PALETTE.bgMainColor};
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Logo = styled(Link)`
  font-family: 'Manrope';
  font-size: 28px;
  font-weight: 600;

  text-align: center;
  text-decoration: none;

  color: ${PALETTE.accentColor};
`;

export const StyledLink = styled(NavLink)`
  padding: 16px 20px;

  font-family: 'Manrope';
  font-size: 16px;
  font-weight: 600;

  border-radius: 8px;

  text-decoration: none;

  color: ${PALETTE.textSecondaryColor};

  transition: color 250ms ease-in-out;

  &:hover,
  &:focus {
    color: ${PALETTE.accentColor};
  }

  &.active {
    cursor: default;

    color: ${PALETTE.accentColor};
    background-color: ${PALETTE.activeBgColor};
  }
`;
