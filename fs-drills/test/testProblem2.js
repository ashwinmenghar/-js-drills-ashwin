import {
  deleteFilesFromList,
  readFileData,
  sortFileContent,
  convertToLowerCase,
  writeFileData,
} from "../problem2.js";

const processFile = (inputFile, fileListPath) => {
  readFileData(inputFile, (content, err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }

    const upperCaseFile = "uppercase.txt";
    const lowerCaseFile = "lowercase.txt";
    const sortedFile = "sorted.txt";

    writeFileData(content.toUpperCase(), fileListPath, upperCaseFile, (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }

      convertToLowerCase(upperCaseFile, fileListPath, lowerCaseFile, (err) => {
        if (err) {
          console.error("Error in reading file:", err);
          return;
        }

        sortFileContent(lowerCaseFile, fileListPath, sortedFile, (err) => {
          if (err) {
            console.error("Error in reading file:", err);
            return;
          }

          setTimeout(
            () =>
              deleteFilesFromList(fileListPath, (err) => {
                return cb(err);
              }),
            2000
          );
        });
      });
    });
  });
};

processFile("lipsum.txt", "filenames.txt");
