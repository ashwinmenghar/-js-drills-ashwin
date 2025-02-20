import {
  createDirectory,
  createRandomJsonFiles,
  deleteFiles,
} from "../problem1.js";

let dirPath = "random_json_files";
createDirectory(dirPath)
  .then((res) => createRandomJsonFiles(res))
  .then((res) => deleteFiles(res))
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
