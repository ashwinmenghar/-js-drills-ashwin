import fs from "fs";

const validation = (fileName) => {
  return (
    fileName == null ||
    fileName == undefined ||
    typeof fileName != "string" ||
    fileName == ""
  );
};

const readFileData = (fileName) => {
  return new Promise((resolve, reject) => {
    if (validation(fileName)) {
      reject("Invalid file name");
    }

    fs.readFile(fileName, "utf-8", (error, content) => {
      if (error) {
        reject(error.message);
      }
      resolve(content);
    });
  });
};

const appendFile = (fileListPath, fileName) => {
  return new Promise((resolve, reject) => {
    if (validation(fileName)) {
      reject("Invalid file name");
    }

    fs.appendFile(fileListPath, `${fileName}\n`, (error) => {
      if (error) {
        reject(new Error(`Error appending to file list: ${error.message}`));
      }
      resolve();
    });
  });
};

const writeFileData = (content, fileListPath, fileName) => {
  return new Promise((resolve, reject) => {
    if (validation(fileName)) {
      reject("Invalid file name");
    }

    fs.writeFile(fileName, content, (error) => {
      if (error) {
        reject(error.message);
      }
      appendFile(fileListPath, fileName).then(resolve).catch(reject);
    });
  });
};

const convertToLowerCase = (inputFile, fileListPath, outputFile) => {
  return readFileData(inputFile)
    .then((content) =>
      writeFileData(content.toLowerCase(), fileListPath, outputFile)
    )
    .then(() => outputFile)
    .catch((error) => error.message);
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
    .then(() => outputFile)
    .catch((error) => error.message);
};

const deleteFile = (fileNames) => {
  return Promise.all(
    fileNames.map(
      (fileName) =>
        new Promise((resolve, reject) => {
          fs.unlink(fileName, (error) => {
            if (error) {
              reject(new Error(`Error deleting ${fileName}: ${error.message}`));
            }
            resolve();
          });
        })
    )
  ).then(() => "All files deleted successfully.");
};

const deleteFilesFromList = (fileListPath) => {
  return readFileData(fileListPath)
    .then((filesName) => {
      const fileNames = filesName.trim().split("\n").concat(fileListPath);
      return deleteFile(fileNames);
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      return `Some files could not be deleted. ${error.messsage}`;
    });
};

export {
  readFileData,
  writeFileData,
  convertToLowerCase,
  sortFileContent,
  deleteFilesFromList,
};
