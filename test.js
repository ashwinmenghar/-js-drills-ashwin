import arrayOfObjects from "./persons.js";
import {
  getFirstHobbyOfEachPerson,
  getEmails,
  printAgeOfEachPerson,
  printCityAndCountry,
  getHobbiesByAge,
  getStudentsInAustralia,
  getNameAndCityAtIndex,
  getNamesAndEmailsByAge,
} from "./index.js";

const data = {
  id: 1,
  name: "Alice",
  age: 30,
  email: "alice@example.com",
  city: "New York",
  country: "USA",
  hobbies: ["reading", "painting"],
  isStudent: false,
};

// Test getEmails with args
console.log("Emails:", getEmails());

// Test getEmails
console.log("Emails:", getEmails(arrayOfObjects));

// Test getHobbiesByAge with valid age
console.log("Hobbies of age 30:", getHobbiesByAge(arrayOfObjects, 30));

// Test getHobbiesByAge with unsupported age
console.log("Hobbies of age 100:", getHobbiesByAge(arrayOfObjects, 100));

// Test getHobbiesByAge with no args
console.log("Hobbies without args:", getHobbiesByAge(arrayOfObjects));

// Test getHobbiesByAge with null
console.log("Hobbies with null:", getHobbiesByAge(arrayOfObjects, null));

// Test getStudentsInAustralia
console.log("Students in Australia:", getStudentsInAustralia(arrayOfObjects));

// Test getNameAndCityAtIndex with valid index
console.log(
  "Name and city at index 3:",
  getNameAndCityAtIndex(arrayOfObjects, 3)
);

// Test getNameAndCityAtIndex with out-of-bounds index
console.log(
  "Name and city at index 100:",
  getNameAndCityAtIndex(arrayOfObjects, 100)
);

// Test getNameAndCityAtIndex with negative index
console.log(
  "Name and city at index -1:",
  getNameAndCityAtIndex(arrayOfObjects, -1)
);

// Test getNameAndCityAtIndex with no args
console.log(
  "Name and city without args:",
  getNameAndCityAtIndex(arrayOfObjects)
);

// Test printAgeOfEachPerson
console.log("Ages:");
printAgeOfEachPerson(arrayOfObjects);

// Test

console.log(
  "First hobby of each person:",
  getFirstHobbyOfEachPerson(arrayOfObjects)
);

// Test getNamesAndEmailsByAge with valid age
console.log(
  "Names and emails of age 25:",
  getNamesAndEmailsByAge(arrayOfObjects, 25)
);

// Test getNamesAndEmailsByAge with unsupported age
console.log(
  "Names and emails of age 100:",
  getNamesAndEmailsByAge(arrayOfObjects, 100)
);

// Test getNamesAndEmailsByAge with no args
console.log(
  "Names and emails without args:",
  getNamesAndEmailsByAge(arrayOfObjects)
);

// Test getNamesAndEmailsByAge with null
console.log(
  "Names and emails with null:",
  getNamesAndEmailsByAge(arrayOfObjects, null)
);

// Test printCityAndCountry
console.log("City and country: ");
printCityAndCountry(arrayOfObjects);
