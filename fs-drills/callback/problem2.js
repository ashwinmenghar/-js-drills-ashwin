import fs from "fs";

const readFileData = (fileName, cb) => {
  fs.readFile(fileName, "utf-8", (err, content) => {
    if (err) return cb(null, err);
    console.log(`${fileName} read successfully.`);
    cb(content, null);
  });
};

const writeFileData = (content, fileListPath, fileName, cb) => {
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      return cb(err);
    }

    fs.appendFile(fileListPath, `${fileName}\n`, (error) => {
      if (error) return console.error("Error appending to file list:", error);
      console.log(`${fileName} written successfully.`);
      cb();
    });
  });
};

const convertToLowerCase = (inputFile, fileListPath, outputFile, cb) => {
  readFileData(inputFile, (content, err) => {
    if (err) {
      return cb(err);
    }

    const lowerCaseContent = content.toLowerCase();
    writeFileData(lowerCaseContent, fileListPath, outputFile, cb);
  });
};

const sortFileContent = (inputFile, fileListPath, outputFile, cb) => {
  readFileData(inputFile, (content, err) => {
    if (err) {
      return cb(err);
    }

    const sortedContent = content
      .split(".")
      .map((sentence) => sentence.trim())
      .sort()
      .join("\n");

    writeFileData(sortedContent, fileListPath, outputFile, cb);
  });
};

const deleteFilesFromList = (fileListPath) => {
  readFileData(fileListPath, (data, err) => {
    if (err) {
      return cb(err);
    }

    const fileNames = data.trim().split("\n").concat(fileListPath);

    fileNames.forEach((fileName) => {
      fs.unlink(fileName, (error) => {
        if (error) return console.error(`Error deleting ${fileName}:`, error);
      });
    });
    console.log("All files deleted successfully.");
  });
};

export {
  readFileData,
  writeFileData,
  convertToLowerCase,
  sortFileContent,
  deleteFilesFromList,
};
