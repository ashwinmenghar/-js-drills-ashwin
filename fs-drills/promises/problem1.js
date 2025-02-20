import { mkdir, unlink, writeFile } from "fs/promises";
import path from "path";

const validation = (directoryName) => {
  return (
    directoryName == null ||
    directoryName == undefined ||
    typeof directoryName != "string"
  );
};

const createDirectory = (directoryName) => {
  if (validation(directoryName)) {
    throw new Error("Invalid directory name");
  }

  return mkdir(directoryName, { recursive: true })
    .then(() => {
      console.log(`Directory '${directoryName}' created successfully.`);
      return directoryName;
    })
    .catch((error) => {
      throw new Error(`Error creating directory: ${error.message}`);
    });
};

const createRandomJsonFiles = (directoryName, totalFiles = 5) => {
  if (validation(directoryName)) {
    throw new Error("Invalid directory name");
  }

  const writeFileArr = [];

  for (let index = 1; index <= totalFiles; index++) {
    let filePath = path.join(directoryName, `file_${index}.json`);
    let data = {
      id: index,
      values: `file_${index}.json`,
    };

    writeFileArr.push(writeFile(filePath, JSON.stringify(data, null, 2)));
  }
  return Promise.all(writeFileArr)
    .then(() => {
      console.log("All files created successfully.");
      return directoryName;
    })
    .catch((error) => {
      throw new Error(`Error creating files: ${error.message}`);
    });
};

const deleteFiles = (directoryName) => {
  if (validation(directoryName)) {
    throw new Error("Invalid directory name");
  }
  let deleteFileArr = [];

  for (let index = 1; index <= 5; index++) {
    deleteFileArr.push(unlink(`${directoryName}/file_${index}.json`));
  }

  return Promise.all(deleteFileArr)
    .then(() => {
      console.log("Files delete successfully");
      return true;
    })
    .catch((error) => {
      throw new Error(`Error deleting files: ${error.message}`);
    });
};

export { createDirectory, createRandomJsonFiles, deleteFiles };
