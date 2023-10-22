export const getRentalPrices = cars => {
  const prices = cars.map(car => parseInt(car.rentalPrice.match(/\d+/)));

  const max = Math.max(...prices);

  const pricesForSelect = [];

  for (let i = 10; i <= max; i += 10) {
    pricesForSelect.push(i);
  }

  return pricesForSelect.reduce((array, item) => {
    array.push({ value: `${item}$`, label: `${item}$` });
    return array;
  }, []);
};
