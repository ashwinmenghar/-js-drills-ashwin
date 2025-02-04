const validation = (users) => {
  return typeof users === "object" && users !== null;
};

// Q1 Find all users who are interested in playing video games.
const getAllUsersPlayingVideoGames = (users, userInterest) => {
  if (!validation(users) || typeof userInterest !== "string") {
    return "Invalid input";
  }
  let result = [];
  for (const key in users) {
    users[key].interests.forEach((interest) => {
      if (interest.includes(userInterest)) {
        result[key] = { ...users[key] };
      }
    });
  }
  return result;
};

// Q2 Find all users staying in Germany.
const getUsersStayInGermany = (users, country) => {
  if (!validation(users) || typeof country !== "string") {
    return "Invalid input";
  }

  let result = [];
  for (const key in users) {
    if (users[key].nationality.includes(country)) {
      result.push(users[key]);
    }
  }

  return result;
};

// Q3 Find all users with masters Degree.
const getUsersWithMasters = (users, degree) => {
  if (!validation(users) || typeof degree !== "string") {
    return "Invalid input";
  }
  let result = [];
  for (const key in users) {
    if (users[key].qualification.includes(degree)) {
      result.push(users[key]);
    }
  }

  return result;
};

// Q4 Group users based on their Programming language mentioned in their designation.
const groupUsersBasedOnProgrammingLang = (users) => {
  if (!validation(users)) {
    return "Invalid input";
  }

  let result = {};
  for (const key in users) {
    users[key].desgination.split(" ").forEach((language) => {
      if (["Golang", "Javascript", "Python"].includes(language)) {
        if (!result[language]) {
          result[language] = {};
        }
        result[language][key] = users[key];
      }
    });
  }
  return result;
};

export {
  getAllUsersPlayingVideoGames,
  getUsersStayInGermany,
  getUsersWithMasters,
  groupUsersBasedOnProgrammingLang,
};
