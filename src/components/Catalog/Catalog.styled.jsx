import styled from '@emotion/styled';
import { PALETTE } from 'helpers/palette';

export const CatalogWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 1184px;
`;

export const Button = styled.button`
  align-self: center;
  margin-top: 100px;

  font-family: 'Manrope';

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

  text-decoration-line: underline;
  text-align: center;

  border: none;
  background-color: transparent;

  cursor: pointer;

  transition: color 250ms ease-in-out;

  color: ${PALETTE.accentColor};

  &:hover,
  &:focus {
    color: ${PALETTE.btnHoverColor};
  }
`;
