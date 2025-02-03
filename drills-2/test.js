import {
  getCarDetails,
  getLastCar,
  getAllCarModelsSorted,
  getCarYears,
  getOldCars,
  getAllBMWAndAudiCars,
} from "./index.js";
import inventory from "./cars.js";

// Test Cases for getCarDetails
console.log("Car details with valid ID:", getCarDetails(inventory, 33));
console.log("Car details with missing inventory:", getCarDetails(33));
console.log("Car details with empty inventory:", getCarDetails([], 33));
console.log("Car details with invalid ID:", getCarDetails(inventory, 100));

// Test Cases for getLastCar
console.log("Get last car in the inventory:", getLastCar(inventory));
console.log("Get last car with empty inventory:", getLastCar([]));

// Test Cases for getAllCarModelsSorted
console.log(
  "Get all car models list in alphabetical order:",
  getAllCarModelsSorted(inventory)
);
console.log(
  "Get all car models with missing argument:",
  getAllCarModelsSorted()
);
console.log(
  "Get all car models with empty inventory:",
  getAllCarModelsSorted([])
);

// Test Cases for getCarYears
const carYears = getCarYears(inventory);
console.log("Get all the years from every car:", carYears);
console.log("Get car years with empty inventory:", getCarYears([]));

// Test Cases for getOldCars
const olderCars = getOldCars(carYears, 2000);
if (typeof olderCars === "string") {
  console.log(olderCars);
} else {
  console.log(`Number of cars older than 2000: ${olderCars.length}`);
}
console.log("Get old cars with missing years array:", getOldCars([], 2000));
console.log(
  "Get old cars with invalid year threshold:",
  getOldCars(carYears, "year")
);

// Test Cases for getAllBMWAndAudiCars
console.log("Get only BMW and Audi cars:", getAllBMWAndAudiCars(inventory));
console.log("Get only BMW and Audi cars without args:", getAllBMWAndAudiCars());
console.log(
  "Get only BMW and Audi cars with empty inventory:",
  getAllBMWAndAudiCars([])
);
