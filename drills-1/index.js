/**
 * Validation check
 */
const validation = (data) => Array.isArray(data);

/**
 * Get all emails
 */
const getEmails = (arrayOfObjects) => {
  if (!validation(arrayOfObjects)) {
    return "Invalid Data.";
  }

  return arrayOfObjects.map((person) => person.email ?? "No Email");
};

/**
 * Get hobbies by age
 */
const getHobbiesByAge = (arrayOfObjects, age) => {
  if (!validation(arrayOfObjects) || typeof age !== "number") {
    return "Invalid Data";
  }
  return arrayOfObjects
    .filter((arr) => arr.age == age)
    .map((arr) => arr.hobbies);
};

/**
 * Get students in Australia
 */
const getStudentsInAustralia = (arrayOfObjects) => {
  if (!validation(arrayOfObjects)) {
    return "Invalid Data";
  }

  return arrayOfObjects
    .filter((arr) => arr.isStudent == true && arr.country == "Australia")
    .map((arr) => arr.name);
};

/**
 * Get name and city at a given index
 */
const getNameAndCityAtIndex = (arrayOfObjects, index) => {
  if (!validation(arrayOfObjects) || typeof index !== "number") {
    return "Invalid Data";
  }

  if (index < 0 || index >= arrayOfObjects.length) {
    return null;
  }

  const data = arrayOfObjects[index];
  if (data == null) {
    return null;
  }
  return { Name: data.name, City: data.city };
};

/**
 * Print age of each person
 */
const printAgeOfEachPerson = (arrayOfObjects) => {
  if (!validation(arrayOfObjects)) {
    console.log("Invalid Data");
    return;
  }
  arrayOfObjects.forEach((arr) => console.log(arr.age));
};

/**
 * Get first hobby of each persion
 */
const getFirstHobbyOfEachPerson = (arrayOfObjects) => {
  if (!validation(arrayOfObjects)) {
    return "Invalid Data";
  }
  return arrayOfObjects.map((arr) => arr.hobbies[0]);
};

/**
 * Get names and emails by there age
 */
const getNamesAndEmailsByAge = (arrayOfObjects, age) => {
  if (!validation(arrayOfObjects) || typeof age !== "number") {
    return "Invalid Data";
  }

  return arrayOfObjects
    .filter((arr) => arr.age == age)
    .map((arr) => {
      return { Name: arr.name, Email: arr.email };
    });
};

/**
 * Print all cities and countries
 */
const printCityAndCountry = (arrayOfObjects) => {
  if (!validation(arrayOfObjects)) {
    console.log("Invalid Data");
    return;
  }

  arrayOfObjects.forEach((person) =>
    console.log(`City: ${person.city}, Country: ${person.country}`)
  );
};

export {
  getEmails,
  getHobbiesByAge,
  getStudentsInAustralia,
  getFirstHobbyOfEachPerson,
  getNameAndCityAtIndex,
  getNamesAndEmailsByAge,
  printAgeOfEachPerson,
  printCityAndCountry,
};
