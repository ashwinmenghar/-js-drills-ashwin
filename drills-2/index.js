const validation = (inventory) => Array.isArray(inventory);

const getCarDetails = (inventory, id) => {
  if (!validation(inventory) || typeof id !== "number") {
    return "Invalid Data";
  }

  const data = inventory.find((car) => car.id === id);
  return data == undefined
    ? `No car found at ${id}`
    : `Car ${id} is a ${data.car_year}, ${data.car_make}, and ${data.car_model}`;
};

const getLastCar = (inventory) => {
  if (!validation(inventory)) {
    console.log("Invalid Data");
  }

  if (inventory.length == 0) {
    console.log("Empty inventory");
    return;
  }

  let car = inventory[inventory.length - 1];
  console.log(`Last car is a ${car.car_make}, ${car.car_model}`);
};

const getAllCarModelsSorted = (inventory) => {
  if (!validation(inventory)) {
    return "Invalid Data";
  }

  if (inventory.length == 0) {
    return "Empty inventory";
  }

  const cars = inventory.slice().sort(function (a, b) {
    return a.car_model.localeCompare(b.car_model);
  });

  return cars.map((car) => car.car_model);
};

const getCarYears = (inventory) => {
  if (!validation(inventory)) {
    return "Invalid Data";
  }

  if (inventory.length == 0) {
    return "Empty inventory";
  }

  return inventory.map((car) => car.car_year);
};

// getCarYears();

const getOldCars = (carYears, year) => {
  if (!validation(carYears) || typeof year !== "number") {
    return "Invalid Data";
  }

  if (carYears.length == 0) {
    return "Empty inventory";
  }

  return carYears.filter((carYear) => carYear < year);
};

// getOldCars();

const getAllBMWAndAudiCars = (inventory) => {
  if (!validation(inventory)) {
    return "Invalid Data";
  }

  if (inventory.length == 0) {
    return "Empty inventory";
  }
  const bmwAndAudiCars = inventory.filter(
    (cars) => cars.car_make == "Audi" || cars.car_make == "BMW"
  );
  return JSON.stringify(bmwAndAudiCars);
};

export {
  getAllBMWAndAudiCars,
  getAllCarModelsSorted,
  getCarYears,
  getCarDetails,
  getOldCars,
  getLastCar,
};
