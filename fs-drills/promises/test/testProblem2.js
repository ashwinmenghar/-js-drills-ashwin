import {
  convertToLowerCase,
  deleteFilesFromList,
  readFileData,
  sortFileContent,
  writeFileData,
} from "../problem2.js";

const processFile = (inputFile, fileListPath) => {
  const upperCaseFile = "uppercase.txt";
  const lowerCaseFile = "lowercase.txt";
  const sortedFile = "sorted.txt";

  readFileData(inputFile)
    .then((content) =>
      writeFileData(content.toUpperCase(), fileListPath, upperCaseFile)
    )
    .then((fileName) =>
      convertToLowerCase(fileName, fileListPath, lowerCaseFile)
    )
    .then((fileName) => sortFileContent(fileName, fileListPath, sortedFile))
    .then(() => setTimeout(() => deleteFilesFromList(fileListPath), 3000))
    .catch((error) => console.log("error is " + error.message));
};

processFile("lipsum.txt", "filenames.txt");
