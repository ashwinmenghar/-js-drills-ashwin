import { appendFile, readFile, unlink, writeFile } from "fs/promises";

const readFileData = (fileName) => {
  return readFile(fileName)
    .then((content) => content.toString())
    .catch((error) => {
      throw error;
    });
};

const writeFileData = (content, fileListPath, fileName) => {
  return writeFile(fileName, content)
    .then(() => appendFile(fileListPath, `${fileName}\n`))
    .then(() => fileName)
    .catch((error) => {
      throw error;
    });
};

const convertToLowerCase = (inputFile, fileListPath, outputFile) => {
  return readFileData(inputFile)
    .then((content) => {
      const data = content.toLowerCase();
      return writeFileData(data, fileListPath, outputFile);
    })
    .then((res) => res)
    .catch((error) => {
      throw error;
    });
};

const sortFileContent = (inputFile, fileListPath, outputFile) => {
  return readFileData(inputFile)
    .then((content) => {
      const sortedContent = content
        .split(".")
        .map((sentence) => sentence.trim())
        .sort()
        .join("\n");

      return writeFileData(sortedContent, fileListPath, outputFile);
    })
    .then((res) => res)
    .catch((error) => {
      return Promise.reject(`Error: ${error.message}`);
    });
};

const deleteFilesFromList = (fileListPath) => {
  return readFileData(fileListPath)
    .then((content) => {
      const fileNames = content
        .split("\n")
        .map((sentence) => sentence.trim())
        .filter((sentence) => sentence.length > 0)
        .concat(fileListPath);

      let deleteFileArr = [];

      fileNames.forEach((fileName) => {
        deleteFileArr.push(unlink(fileName));
      });

      return Promise.all(deleteFileArr);
    })
    .then(() => console.log("All files deleted successfully."))
    .catch((error) => {
      console.error("Error in deleting files : ", error);
    });
};

export {
  readFileData,
  writeFileData,
  convertToLowerCase,
  sortFileContent,
  deleteFilesFromList,
};
