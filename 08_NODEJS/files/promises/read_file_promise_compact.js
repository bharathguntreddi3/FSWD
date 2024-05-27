const fs = require("fs").promises;

fs.readFile(__dirname + "/names.txt", "utf-8")
    .then(data =>  console.log(data))   //fulfilled
    .catch((err) => console.log(err.message)); //rejected