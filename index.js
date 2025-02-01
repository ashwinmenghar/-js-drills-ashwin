import {
  getFirstHobbyOfEachPerson,
  getEmails,
  printAgeOfEachPerson,
  printCityAndCountry,
  getHobbiesByAge,
  getStudentsInAustralia,
  getNameAndCityAtIndex,
  getNamesAndEmailsByAge,
} from "./solution.js";

//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.

//    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

//    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

//    Implement a loop to access and print the ages of all individuals in the dataset.

//    Create a function to retrieve and display the first hobby of each individual in the dataset.

//    Write a function that accesses and prints the names and email addresses of individuals aged 25.

//    Implement a loop to access and log the city and country of each individual in the dataset.

// Test getEmails
console.log("Emails:", getEmails());

// Test getHobbiesByAge with valid age
console.log("Hobbies of age 30:", getHobbiesByAge(30));

// Test getHobbiesByAge with unsupported age
console.log("Hobbies of age 100:", getHobbiesByAge(100));

// Test getHobbiesByAge with no args
console.log("Hobbies without args:", getHobbiesByAge());

// Test getHobbiesByAge with null
console.log("Hobbies with null:", getHobbiesByAge(null));

// Test getStudentsInAustralia
console.log("Students in Australia:", getStudentsInAustralia());

// Test getNameAndCityAtIndex with valid index
console.log("Name and city at index 3:", getNameAndCityAtIndex(3));

// Test getNameAndCityAtIndex with out-of-bounds index
console.log("Name and city at index 100:", getNameAndCityAtIndex(100));

// Test getNameAndCityAtIndex with negative index
console.log("Name and city at index -1:", getNameAndCityAtIndex(-1));

// Test getNameAndCityAtIndex with no args
console.log("Name and city without args:", getNameAndCityAtIndex());

// Test printAgeOfEachPerson
console.log("Ages:" + printAgeOfEachPerson());

// Test getFirstHobbyOfEachPerson
console.log("First hobby of each person:", getFirstHobbyOfEachPerson());

// Test getNamesAndEmailsByAge with valid age
console.log("Names and emails of age 25:", getNamesAndEmailsByAge(25));

// Test getNamesAndEmailsByAge with unsupported age
console.log("Names and emails of age 100:", getNamesAndEmailsByAge(100));

// Test getNamesAndEmailsByAge with no args
console.log("Names and emails without args:", getNamesAndEmailsByAge());

// Test getNamesAndEmailsByAge with null
console.log("Names and emails with null:", getNamesAndEmailsByAge(null));

// Test printCityAndCountry
console.log("City and country: " + printCityAndCountry());
