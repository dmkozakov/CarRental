export const filterCars = (
  cars = [],
  make = '',
  price = 10000,
  mileageFrom = 0,
  mileageTo = 1000000
) => {
  return cars.filter(car => {
    const carPrice = parseInt(car.rentalPrice.match(/\d+/));
    const filerPrice = parseInt(price.match(/\d+/));

    return (
      car.make.toLowerCase() === make.toLowerCase() &&
      carPrice <= filerPrice &&
      car.mileage >= mileageFrom &&
      car.mileage <= mileageTo
    );
  });
};
