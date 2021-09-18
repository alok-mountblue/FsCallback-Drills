const fs = require("fs");

function solve1(callback) {
  fs.mkdir("../dir", (err) => {
    if (err) {
      console.log(err);
    }
  });
  callback;
}

module.exports = { solve1 };
