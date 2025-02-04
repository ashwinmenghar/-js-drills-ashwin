const validateInventory = (inventory) => Array.isArray(inventory);

const getCarDetails = (inventory, id) => {
  if (!validateInventory(inventory) || typeof id !== "number") {
    return "Invalid Data";
  }
  const car = inventory.find((car) => car.id === id);

  return car
    ? `Car ${id} is a ${car.car_year}, ${car.car_make}, and ${car.car_model}`
    : `No car found at ${id}`;
};

const getLastCar = (inventory) => {
  if (!validateInventory(inventory)) {
    console.log("Invalid Data");
    return;
  }

  if (inventory.length === 0) {
    console.log("Empty inventory");
    return;
  }

  const lastCar = inventory[inventory.length - 1];
  console.log(`Last car is a ${lastCar.car_make}, ${lastCar.car_model}`);
};

const getAllCarModelsSorted = (inventory) => {
  if (!validateInventory(inventory)) {
    return "Invalid Data";
  }

  if (inventory.length === 0) {
    return "Empty inventory";
  }

  return inventory
    .map(({ car_model }) => car_model)
    .sort((a, b) => a.localeCompare(b));
};

const getCarYears = (inventory) => {
  if (!validateInventory(inventory)) {
    return "Invalid Data";
  }

  if (inventory.length === 0) {
    return "Empty inventory";
  }

  return inventory.map(({ car_year }) => car_year);
};

const getOldCars = (carYears, year) => {
  if (!validateInventory(carYears) || typeof year !== "number") {
    return "Invalid Data";
  }

  if (carYears.length === 0) {
    return "Empty inventory";
  }

  return carYears.filter((carYear) => carYear < year);
};

const getAllBMWAndAudiCars = (inventory) => {
  if (!validateInventory(inventory)) {
    return "Invalid Data";
  }

  if (inventory.length === 0) {
    return "Empty inventory";
  }

  return JSON.stringify(
    inventory.filter((car) => car.car_make === "Audi" || car.car_make === "BMW")
  );
};

export {
  getAllBMWAndAudiCars,
  getAllCarModelsSorted,
  getCarYears,
  getCarDetails,
  getOldCars,
  getLastCar,
};
