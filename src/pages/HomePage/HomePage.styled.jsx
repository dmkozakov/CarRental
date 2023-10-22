import styled from '@emotion/styled';

import heroBg from '../../assets/images/maserati.jpg';
import { PALETTE } from 'helpers/palette';
import { Button } from 'components/Button/Button';
import { Link } from 'react-router-dom';

export const BgImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  width: 100vw;
  height: 100vh;

  background-image: url(${heroBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const HeroBox = styled.div`
  transform: translateY(-100px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const Title = styled.h1`
  font-family: 'Manrope';
  font-size: 78px;
  -webkit-text-stroke: 1px ${PALETTE.textSecondaryColor};

  color: ${PALETTE.bgMainColor};
`;

export const HeroBtn = styled(Button)`
  width: 300px;
  font-size: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Header = styled.header`
  position: absolute;
  top: 20px;
  right: 40px;

  display: flex;
  justify-content: end;
  gap: 40px;

  width: 100%;
`;

export const HeaderLink = styled(Link)`
  display: block;

  padding: 6px 12px;

  border-radius: 8px;
  border: 1px solid ${PALETTE.bgMainColor};

  font-size: 24px;

  text-decoration: none;

  color: ${PALETTE.bgMainColor};

  transition: color 250ms ease-in-out, border-color 250ms ease-in-out;

  &:hover,
  &:focus {
    color: ${PALETTE.textSecondaryColor};
    border-color: ${PALETTE.textSecondaryColor};
  }
`;
