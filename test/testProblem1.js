const fs = require("fs");
const { solve1 } = require("../problem1");

const files = [
  "file1.json",
  "file2.json",
  "file3.json",
  "file4.json",
  "file5.json",
];

function callback() {
  for (let i = 1; i <= files.length; i += 1) {
    fs.writeFile(
      `../dir/files${i}.json`,
      "Hello Json you will be die soon",
      (err) => {
        if (err) throw err;
      }
    );
    fs.unlink(`../dir/files${i}.json`, (err) => {
      if (err) throw err;
    });
  }
}
solve1(callback);