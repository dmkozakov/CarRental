export const makeSelectOptions = cars =>
  cars.reduce((array, item) => {
    array.push({ value: item.make.toLowerCase(), label: item.make });
    return array;
  }, []);
