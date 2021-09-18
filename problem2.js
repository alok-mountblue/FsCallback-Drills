const fs = require("fs/promises");

const solve2 = (path) => {
  fs.readFile(path, "utf8")
    .then((res) => {
      fs.writeFile("upperCase.txt", res.toUpperCase());
      fs.writeFile("filenames.txt", "upperCase.txt ");
      return fs.readFile("upperCase.txt", "utf8");
    })
    .then((res) => {
      let lowerCase = res.toLowerCase().split(". ").join("\n");
      fs.writeFile("lowerCase.txt", lowerCase);
      fs.appendFile("filenames.txt", "lowerCase.txt ");
      return fs.readFile("lowerCase.txt", "utf8");
    })
    .then((res) => {
      let sortData = res.split("\n").sort().join("\n");
      fs.writeFile("sorted.txt", sortData);
      fs.appendFile("filenames.txt", "sorted.txt");
      return fs.readFile("filenames.txt", "utf8");
    })
    .then((res) => {
      let namesList = res.split(" ");
      for (let i = 0; i < namesList.length; i++) {
        fs.unlink(namesList[i]);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { solve2 };
