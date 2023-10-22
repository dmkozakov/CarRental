import { makeSelectOptions } from 'helpers/makeSelectOptions';
import { useEffect, useState } from 'react';

import { fetchAllCars } from 'services/carRentalApi';
import {
  FilterBox,
  FilterBtn,
  FilterPriceWrapper,
  FilterWrapper,
  InputLabel,
  Label,
  MileageBox,
  MileageFrom,
  MileageFromText,
  MileageTo,
  MileageToText,
  SelectText,
} from './Filter.styled';
import { CustomSelect } from 'components/CustomSelect/CustomSelect';
import { getRentalPrices } from 'helpers/getRentalPrices';

export function Filter() {
  const [selectCarsOptions, setSelectCarsOptions] = useState([]);
  const [selectPriceOptions, setSelectPriceOptions] = useState(0);

  useEffect(() => {
    (async () => {
      const cars = await fetchAllCars();
      setSelectCarsOptions(makeSelectOptions(cars));

      setSelectPriceOptions(getRentalPrices(cars));
    })();
  }, []);

  return (
    <FilterBox>
      <FilterWrapper>
        <InputLabel>Car brand</InputLabel>
        <CustomSelect
          name="cars"
          options={selectCarsOptions}
          placeholder="Enter the text"
          onChange={console.log}
        />
      </FilterWrapper>
      
      <FilterPriceWrapper>
        <InputLabel>Price/ 1 hour</InputLabel>
        <CustomSelect
          name="price"
          options={selectPriceOptions}
          placeholder="$"
          onChange={console.log}
        />
        <SelectText>To</SelectText>
      </FilterPriceWrapper>

      <FilterWrapper>
        <InputLabel>Сar mileage / km</InputLabel>
        <MileageBox>
          <Label>
            <MileageFromText>From</MileageFromText>
            <MileageFrom lang="de-DE" type="number" />
          </Label>
          <Label>
            <MileageToText>To</MileageToText>
            <MileageTo type="number" />
          </Label>
        </MileageBox>
      </FilterWrapper>

      <FilterBtn type="button">Search</FilterBtn>
    </FilterBox>
  );
}
