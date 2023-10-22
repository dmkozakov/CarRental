import styled from '@emotion/styled';
import { PALETTE } from 'helpers/palette';

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 12px 24px;

  font-family: 'Manrope';
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;

  border-radius: 12px;
  border: none;

  cursor: pointer;

  color: ${PALETTE.textInvertColor};
  background: ${PALETTE.accentColor};

  transition: background-color 250ms ease-in-out;

  &:hover,
  &:focus {
    background-color: ${PALETTE.btnHoverColor};
  }
`;
