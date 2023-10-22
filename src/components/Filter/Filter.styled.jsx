import styled from '@emotion/styled';
import { Button } from 'components/Button/Button';
import { PALETTE } from 'helpers/palette';

export const FilterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  margin-bottom: 50px;

  gap: 18px;
`;

export const FilterWrapper = styled.form`
  position: relative;

  & .react-select-container {
    position: relative;
    background-color: ${PALETTE.bgFilterColor};
    border: none;
    border-radius: 14px;
    box-sizing: border-box;
    color: ${PALETTE.textPrimaryColor};
    cursor: default;
    outline: none;
    padding: 14px 18px;

    transition: all 250ms ease-in-out;

    width: 224px;
    font-family: 'Manrope';
    font-size: 18px;
    font-weight: 500;
  }

  & .react-select__control {
    min-height: 0;
  }

  & .react-select__indicators {
    width: 20px;
    height: 20px;
    align-self: center;
  }

  & .react-select__menu {
    position: absolute;
    top: 62px;
    left: 0;

    padding: 14px 0px 14px 0px;

    font-family: 'Manrope';
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25; /* 125% */

    border-radius: 14px;
    border: 1px solid ${PALETTE.borderFilterColor};

    color: ${PALETTE.textFilterColor};
    background: ${PALETTE.bgMainColor};

    box-shadow: 0px 4px 36px 0px ${PALETTE.shadowFilterColor};
  }

  & .react-select__option {
    padding: 4px 8px 4px 18px;

    transition: color 150ms ease-in-out, background-color 150ms ease-in-out;

    &:hover,
    &:focus {
      color: ${PALETTE.textPrimaryColor};
      background-color: ${PALETTE.activeBgColor};
    }
  }
`;

export const SelectText = styled.p`
  position: absolute;
  bottom: 17px;
  left: 18px;

  font-family: 'Manrope';
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const InputLabel = styled.p`
  margin-bottom: 8px;

  font-family: 'Manrope';

  font-weight: 500;
  line-height: 1.28;

  color: #8a8a89;
`;

export const FilterPriceWrapper = styled(FilterWrapper)`
  & .react-select-container {
    padding-left: 43px;
  }
`;

export const MileageBox = styled.div`
  display: flex;
  align-items: baseline;
`;

export const MileageFrom = styled.input`
  width: 160px;
  padding: 14px 8px 14px 72px;
  height: 55px;

  border: none;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  font-family: Manrope;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  color: ${PALETTE.textPrimaryColor};
  background: ${PALETTE.bgFilterColor};
`;

export const MileageTo = styled.input`
  width: 160px;
  height: 55px;
  padding: 14px 8px 14px 50px;
  border: none;

  border-radius: 0px 14px 14px 0px;

  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  color: ${PALETTE.textPrimaryColor};
  background: ${PALETTE.bgFilterColor};
`;
export const Label = styled.label`
  position: relative;
`;

export const MileageFromText = styled(SelectText)``;

export const MileageToText = styled(SelectText)``;

export const FilterBtn = styled(Button)`
  width: 136px;
  height: 55px;
`;
