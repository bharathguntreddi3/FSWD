const fs = require("fs").promises;

let p = fs.readFile(__dirname + "/names.txt", "utf-8")
p.then(data =>  fs.writeFile(__dirname + "/files/names.txt", data))   //fulfilled
 .then(data => console.log("File copied successfully")) 
    .catch((err) => console.log(err.message)); //rejected