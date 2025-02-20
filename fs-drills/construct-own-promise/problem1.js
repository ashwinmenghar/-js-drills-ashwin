import fs from "fs";
import path from "path";

const validation = (directoryName) => {
  return (
    directoryName == null ||
    directoryName == undefined ||
    typeof directoryName != "string" ||
    directoryName == ""
  );
};

const createDirectory = (directoryName) => {
  if (validation(directoryName)) {
    return Promise.reject("Invalid directory name");
  }

  return new Promise((resolve, rejects) => {
    fs.mkdir(directoryName, { recursive: true }, (error) => {
      if (error) {
        rejects(`Error Occured In Directory:  ${error}`);
        return;
      }

      resolve(directoryName);
    });
  });
};

const createRandomJsonFiles = (directoryName, totalFiles = 5) => {
  if (validation(directoryName)) {
    return Promise.reject("Invalid directory name");
  }

  return new Promise((resolve, reject) => {
    for (let index = 1; index <= totalFiles; index++) {
      let filePath = path.join(directoryName, `file_${index}.json`);
      let data = {
        id: index,
        values: `file_${index}.json`,
      };

      fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
        if (err) {
          reject(err);
        }
        if (index === totalFiles) {
          console.log("All files successfully created");
          resolve(directoryName);
        }
      });
    }
  });
};

const deleteFiles = (directoryName, totalFiles = 5) => {
  if (validation(directoryName)) {
    return Promise.reject("Invalid directory name");
  }

  return new Promise((resolve, reject) => {
    for (let index = 1; index <= totalFiles; index++) {
      fs.unlink(`${directoryName}/file_${index}.json`, (error) => {
        if (error) {
          reject(`Error Occured In Unlink: ${error}`);
        } else {
          if (index === totalFiles) {
            resolve("All files deleted successfully.");
          }
        }
      });
    }
  });
};

export { createDirectory, createRandomJsonFiles, deleteFiles };
