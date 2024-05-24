const fs = require("fs").promises;

let p = fs.readFile(__dirname + "/names.txt", "utf-8");
p.then(
    data =>  console.log(data),   //fulfilled
    error =>  console.log(error.message)    //rejected
)

console.log("End of the program");