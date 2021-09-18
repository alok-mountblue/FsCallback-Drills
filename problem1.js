const fs = require("fs");

function createDir() {
  fs.mkdir("../dir", (err) => {
    if (err) {
      console.log(err);
    }
  });
}

function solve1(callback) {
  return new Promise((resolve, reject) => {
    createDir();
    if (fs.existsSync("../dir")) {
      resolve(callback);
    } else {
      reject("dir not found");
    }
  });
}

module.exports = { solve1 };
