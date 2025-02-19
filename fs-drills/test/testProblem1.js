import {
  createDirectory,
  createRandomJsonFiles,
  deleteFiles,
} from "../problem1.js";
let dirPath = "random_json_files";

createDirectory(dirPath, (error, directoryName) => {
  if (error) {
    console.log(error.message);
    return;
  }
  createRandomJsonFiles(directoryName, (error) => {
    if (error) {
      console.log(error.message);
      return;
    }
    setTimeout(() => {
      deleteFiles(directoryName);
    }, 5000);
  });
});
