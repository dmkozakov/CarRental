import styled from '@emotion/styled';
import { Button } from 'components/Button/Button';
import { TitleBox } from 'components/CatalogItem/CatalogItem.styled';
import { PALETTE } from 'helpers/palette';

export const ModalWrapper = styled.div`
  position: relative;
  width: 542px;
  padding: 40px;

  font-family: 'Manrope';
  font-size: 14px;
  line-height: 1.42;

  border-radius: 24px;

  background-color: ${PALETTE.bgMainColor};
`;

export const IconClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  border: none;
  padding: 0;

  color: ${PALETTE.textPrimaryColor};
  background-color: transparent;

  transition: color 250ms ease-in-out;

  & svg {
    width: 24px;
    height: 24px;
    stroke: currentColor;
  }

  &:hover,
  &:focus {
    color: ${PALETTE.accentColor};
  }
`;

export const ImageBox = styled.div`
  width: 462px;
  height: 248px;

  overflow: hidden;
  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
`;

export const Image = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const DescriptionBox = styled(TitleBox)`
  font-size: 18px;

  line-height: 1.33;
`;

export const Description = styled.p`
  margin-top: 14px;

  color: ${PALETTE.textPrimaryColor};
`;

export const FunctionalitiesBox = styled.div`
  margin-top: 24px;

  font-weight: 500;

  color: ${PALETTE.textPrimaryColor};
`;

export const RentalBox = styled.div`
  margin-top: 24px;

  font-weight: 500;

  color: ${PALETTE.textPrimaryColor};
`;

export const ConditionBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;

  margin-top: 8px;

  font-size: 12px;

  color: ${PALETTE.textConditionColor};
`;

export const Condition = styled.p`
  display: flex;

  padding: 7px 14px;

  border-radius: 35px;

  background: ${PALETTE.bgConditionColor};
`;

export const Accent = styled.span`
  font-size: 600;

  color: ${PALETTE.accentColor};
`;

export const OrderBtn = styled(Button)`
  margin-top: 24px;
  width: 168px;
`;

export const CallLink = styled.a`
  text-decoration: none;
`;
