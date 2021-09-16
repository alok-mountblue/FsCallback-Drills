const fs = require("fs");

const problem2 = (path) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) console.log(err);
    // let upperCaseData = data.toUpperCase();
    fs.writeFile("upperCase.txt", data.toUpperCase(), (err) => {
      if (err) console.log("error", err);
      fs.writeFile("filenames.txt", "upperCase.txt", (err) => {
        if (err) console.log("error", err);
      });
      fs.readFile("upperCase.txt", "utf8", (err, data) => {
        if (err) console.log(err);
        let lowerCaseData = data.toLowerCase().split(". ").join("\n");
        fs.writeFile("lowerCase.txt", lowerCaseData, (err) => {
          if (err) console.log(err);
          fs.appendFile("filenames.txt", " lowerCase.txt", (err) => {
            if (err) console.log(err);
          });
          fs.readFile("lowerCase.txt", "utf8", (err, data) => {
            if (err) console.log(err);
            let sortedData = data.split("\n").sort().join("\n");
            fs.writeFile("sorted.txt", sortedData, (err) => {
              if (err) console.log("error", err);
              fs.appendFile("filenames.txt", " sorted.txt", (err) => {
                if (err) console.log("error", err);
              });

              fs.readFile("filenames.txt", "utf8", (err, data) => {
                if (err) console.log("error", err);
                let listOfNames = data.split(" ");
                listOfNames.forEach((element) => {
                  fs.unlink(element, (err) => {
                    if (err) console.log("error", err);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
};

module.exports = problem2;
