import {
  createDirectory,
  createRandomJsonFiles,
  deleteFiles,
} from "../problem1.js";

let dirPath = "random_json_files";

try {
  createDirectory(dirPath)
    .then((res) => createRandomJsonFiles(res))
    .then((res) => {
      setTimeout(() => deleteFiles(res), 5000);
    })
    .catch((error) => console.log("error is " + error.message));
} catch (error) {
  console.log(error.message);
}
