import styled from '@emotion/styled';
import { PALETTE } from 'helpers/palette';

export const Title = styled.h2`
  align-self: flex-start;

  margin-bottom: 32px;
  margin-left: 40px;

  font-family: Manrope;
  font-size: 32px;
  font-weight: 700;

  color: ${PALETTE.textPrimaryColor};
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
`;

export const Message = styled.p`
  transform: translateY(200px);
  font-family: 'Manrope';
  font-size: 24px;

  color: ${PALETTE.textSecondaryColor};
`;
