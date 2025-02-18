import {
  createDirectory,
  createRandomJsonFiles,
  deleteFiles,
} from "../problem1.js";
let dirPath = "random_json_files";

// createRandomJSONFiles(dirPath, (err) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   console.log("files created successfully");

//   setTimeout(() => {
//     deleteFiles(dirPath, (err) => {
//       if (err) {
//         console.log(err.message);
//         return;
//       }
//       console.log("files deleted successfully");
//       return;
//     });
//   }, 2000);
// });

createDirectory("../random_json_files", (directoryName) => {
  createRandomJsonFiles(directoryName, () => {
    setTimeout(() => {
      deleteFiles(directoryName);
    }, 5000);
  });
});
