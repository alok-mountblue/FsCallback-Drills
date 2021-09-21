// Problem 1:

//     Using callbacks and the fs module's asynchronous functions, do the following:
//         1. Create a directory of random JSON files
//         2. Delete those files simultaneously

const fs = require("fs");
const { solve1 } = require("../problem1");

const files = [
  "file1.json",
  "file2.json",
  "file3.json",
  "file4.json",
  "file5.json",
];

function writeDir(i) {
  fs.writeFile(
    `../dir/files${i}.json`,
    "Hello Json you will be die soon",
    (err) => {
      if (err) throw err;
    }
  );
}
function deleteDir(i) {
  fs.unlink(`../dir/files${i}.json`, (err) => {
    if (err) throw err;
  });
}

function callback() {
  for (let i = 1; i <= files.length; i += 1) {
    writeDir(i);
    deleteDir(i);
  }
}
solve1(callback);
