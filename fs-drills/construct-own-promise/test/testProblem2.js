import {
  deleteFilesFromList,
  readFileData,
  sortFileContent,
  convertToLowerCase,
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
    .then(() => convertToLowerCase(upperCaseFile, fileListPath, lowerCaseFile))
    .then(() => sortFileContent(inputFile, fileListPath, sortedFile))
    .then(() => setTimeout(() => deleteFilesFromList(fileListPath), 3000))
    .catch(console.error);
};

processFile("lipsu1m.txt", "filenames.txt");
