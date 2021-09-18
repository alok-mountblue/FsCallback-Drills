const fs = require("fs");

const solve2 = (path) => {
  fs.readFile(path, "utf8", (err, res) => {
    if (err) console.log(err);
    fs.writeFile("upperCase.txt", res.toUpperCase(), (err) => {
      if (err) console.log(err);
      fs.writeFile("filenames.txt", "upperCase.txt ", (err) => {
        if (err) console.log(err);
      });
      fs.readFile("upperCase.txt", "utf8", (err, res) => {
        if (err) console.log(err);
        let lowerCase = res.toLowerCase().split(". ").join("\n");
        fs.writeFile("lowerCase.txt", lowerCase, (err) => {
          if (err) console.log(err);
          fs.appendFile("filenames.txt", "lowerCase.txt ", (err) => {
            if (err) console.log(err);
          });
          fs.readFile("lowerCase.txt", "utf8", (err, res) => {
            if (err) console.log(err);
            let sortData = res.split("\n").sort().join("\n");
            fs.writeFile("sorted.txt", sortData, (err) => {
              if (err) console.log(err);
              fs.appendFile("filenames.txt", "sorted.txt", (err) => {
                if (err) console.log(err);
              });

              fs.readFile("filenames.txt", "utf8", (err, res) => {
                if (err) console.log(err);
                //console.log(res);
                let namesList = res.split(" "); //return array
                //console.log(namesList);
                for (let i = 0; i < namesList.length; i++) {
                  fs.unlink(namesList[i], (err) => {
                    //console.log(namesList[i]);
                    if (err) console.log(err);
                  });
                }
              });
            });
          });
        });
      });
    });
  });
};

module.exports = { solve2 };
