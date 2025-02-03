const validation = (data) => Array.isArray(data);

const getEmails = (arrayOfObjects) => {
  if (!validation(arrayOfObjects)) {
    return "Invalid Data.";
  }

  return arrayOfObjects.map((person) => person.email);
};

const getHobbiesByAge = (arrayOfObjects, age) => {
  if (!validation(arrayOfObjects) || typeof age !== "number") {
    return "Invalid Data";
  }
  return arrayOfObjects
    .filter((arr) => arr.age == age)
    .map((arr) => arr.hobbies);
};

const getStudentsInAustralia = (arrayOfObjects) => {
  if (!validation(arrayOfObjects)) {
    return "Invalid Data";
  }

  return arrayOfObjects
    .filter((arr) => arr.isStudent == true && arr.country == "Australia")
    .map((arr) => arr.name);
};

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

const printAgeOfEachPerson = (arrayOfObjects) => {
  if (!validation(arrayOfObjects)) {
    console.log("Invalid Data");
    return;
  }
  arrayOfObjects.forEach((arr) => console.log(arr.age));
};

const getFirstHobbyOfEachPerson = (arrayOfObjects) => {
  if (!validation(arrayOfObjects)) {
    return "Invalid Data";
  }
  return arrayOfObjects.map((arr) => arr.hobbies[0]);
};

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
 *
 * @param {*} arrayOfObjects
 * @returns Error | void
 */
const printCityAndCountry = (arrayOfObjects) => {
  if (!validation(arrayOfObjects)) {
    console.log("Invalid Data");
    return;
  }

  arrayOfObjects.forEach((person) =>
    console.log(`${person.city}, ${person.country}`)
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
