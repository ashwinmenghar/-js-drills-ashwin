import users from "./users.js";
import {
  getAllUsersPlayingVideoGames,
  getUsersStayInGermany,
  getUsersWithMasters,
  groupUsersBasedOnProgrammingLang,
} from "./index.js";

// Test valid case
console.log(
  "Find all users based on interest with all args:",
  getAllUsersPlayingVideoGames(users, "Video Games")
);

// Test without users
console.log(
  "Find all users based on interest without users:",
  getAllUsersPlayingVideoGames(null, "Video Games")
);

// Test without user intereset
console.log(
  "Find all users based on interest without interest:",
  getAllUsersPlayingVideoGames(users)
);

// Test with valid case
console.log(
  "Find all users staying in Germany",
  getUsersStayInGermany(users, "Germany")
);

// Test without users
console.log(
  "Find all users staying in Germany without users:",
  getUsersStayInGermany("Germany")
);

// Test without country
console.log(
  "Find all users staying in Germany without country:",
  getUsersStayInGermany(users)
);

// Test with all args
console.log(
  "Find all users with masters Degree:",
  getUsersWithMasters(users, "Masters")
);

// Test without users
console.log(
  "Find all users with masters Degree without users:",
  getUsersWithMasters("Masters")
);

// Test without degree
console.log(
  "Find all users with masters Degree without degree:",
  getUsersWithMasters(users)
);

// Test with all args
console.log(
  "Group users based on their Programming language:",
  groupUsersBasedOnProgrammingLang(users)
);

// Test without args
console.log(
  "Group users based on their Programming language without users",
  groupUsersBasedOnProgrammingLang()
);
