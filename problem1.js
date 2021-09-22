const fs = require("fs/promises");

const files = [
  "file1.json",
  "file2.json",
  "file3.json",
  "file4.json",
  "file5.json",
];

function createDir() {
  fs.mkdir("../dir", (err) => {
    if (err) {
      console.log(err);
    }
  });
}

function solve1() {
  createDir();
  for (let i = 0; i < files.length; i += 1) {
    fs.writeFile(`../dir/files${i}.json`, "json")
      .then(() => {
        fs.unlink(`../dir/files${i}.json`);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = { solve1 };
