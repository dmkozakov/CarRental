import styled from '@emotion/styled';
import { Button } from 'components/Button/Button';
import { PALETTE } from 'helpers/palette';

export const ListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;

  width: 274px;
`;

export const ImageBox = styled.div`
  width: 274px;
  height: 268px;

  border-radius: 14px;
  overflow: hidden;

  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FavoriteBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  border: none;

  cursor: pointer;

  transition: color 250ms ease-in-out;

  color: ${({ active }) =>
    active ? PALETTE.accentColor : PALETTE.favoriteBtnBorder};
  background-color: transparent;

  & svg {
    transition: fill 250ms ease-in-out;

    fill: ${({ active }) => (active ? PALETTE.accentColor : 'transparent')};
  }

  &:hover,
  &:focus {
    color: ${PALETTE.accentColor};
  }

  &:hover svg,
  &:focus svg {
    fill: ${PALETTE.accentColor};
  }
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;

  margin-top: 14px;

  font-family: 'Manrope';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

  color: ${PALETTE.textPrimaryColor};
`;

export const Title = styled.div`
  width: 80%;
`;

export const Model = styled.span`
  color: ${PALETTE.accentColor};
`;

export const TagsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  margin-top: 8px;
`;

export const TagsLine = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  padding: 0 6px;

  font-family: 'Manrope';
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  color: ${PALETTE.textSecondaryColor};

  &:not(:last-child) {
    border-right: 1px solid ${PALETTE.borderSecondaryColor};
  }

  &:first-of-type {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`;

export const ModalBtn = styled(Button)`
  margin-top: auto;
`;
