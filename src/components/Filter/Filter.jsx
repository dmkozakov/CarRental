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
import { filterCars } from 'helpers/filterCars';

export function Filter({ filter }) {
  const [selectCarsOptions, setSelectCarsOptions] = useState([]);
  const [selectPriceOptions, setSelectPriceOptions] = useState(0);

  const [allCars, setAllCars] = useState([]);

  const [make, setMake] = useState('');
  const [price, setPrice] = useState('');
  const [mileageFrom, setMileageFrom] = useState(null);
  const [mileageTo, setMileageTo] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const cars = await fetchAllCars();
        setAllCars(cars);

        setSelectCarsOptions(makeSelectOptions(cars));
        setSelectPriceOptions(getRentalPrices(cars));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const onFilter = () => {
    const result = filterCars(
      allCars,
      make || '',
      price || '10000',
      mileageFrom || 0,
      mileageTo || 10000000
    );
    console.log(result);
    filter(result);
  };

  return (
    <FilterBox>
      <FilterWrapper>
        <InputLabel>Car brand</InputLabel>
        <CustomSelect
          name="cars"
          options={selectCarsOptions}
          placeholder="Enter the text"
          onChange={data => setMake(data.value)}
        />
      </FilterWrapper>

      <FilterPriceWrapper>
        <InputLabel>Price/ 1 hour</InputLabel>
        <CustomSelect
          name="price"
          options={selectPriceOptions}
          placeholder="$"
          onChange={data => setPrice(data.value)}
        />
        <SelectText>To</SelectText>
      </FilterPriceWrapper>

      <FilterWrapper>
        <InputLabel>Сar mileage / km</InputLabel>
        <MileageBox>
          <Label>
            <MileageFromText>From</MileageFromText>
            <MileageFrom
              type="number"
              onChange={e => setMileageFrom(e.target.value)}
            />
          </Label>
          <Label>
            <MileageToText>To</MileageToText>
            <MileageTo
              type="number"
              onChange={e => setMileageTo(e.target.value)}
            />
          </Label>
        </MileageBox>
      </FilterWrapper>

      <FilterBtn type="button" onClick={onFilter}>
        Search
      </FilterBtn>
    </FilterBox>
  );
}
