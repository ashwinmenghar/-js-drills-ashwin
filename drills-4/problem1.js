import fs from "fs";
import path from "path";

/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/

const createDirectory = (directoryName, cb) => {
  if (!fs.existsSync(directoryName)) {
    fs.mkdir(directoryName, (error) => {
      if (error) {
        console.error("Error Occured In Directory: ", error);
        return;
      }
    });
  }
  cb(directoryName);
};

const createRandomJsonFiles = (directoryName, cb, totalFiles = 5) => {
  if (
    directoryName == null ||
    directoryName == undefined ||
    typeof directoryName != "string"
  ) {
    console.log("Invalid file directory");
    return;
  }
  for (let index = 1; index <= totalFiles; index++) {
    let filePath = path.join(directoryName, `file_${index}.json`);
    let data = {
      id: index,
      values: `file_${index}.json`,
    };

    fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
      if (err) return cb(err);
      if (index === totalFiles) {
        console.log("All files successfully created");
        cb();
      }
    });
  }
};

const deleteFiles = (directoryName) => {
  for (let index = 1; index <= 5; index++) {
    fs.unlink(`${directoryName}/file_${index}.json`, (error) => {
      if (error) {
        console.error("Error Occured In Unlink: ", error);
      } else {
        if (index === 5) {
          console.log("All files deleted.");
        }
      }
    });
  }
};

export { createDirectory, createRandomJsonFiles, deleteFiles };
