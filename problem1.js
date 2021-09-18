const fs = require("fs");

function solve1(callback) {
  fs.mkdir(
    "../dir",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("New directory successfully created.");
      }
    },
    callback
  );
}

module.exports = { solve1 };
