const fs = require("fs").promises;

let p = fs.readFile(__dirname + "/names.txt", "utf-8");


p.then(data =>{
    let wp = fs.writeFile(__dirname + "/names_copy.txt", data);
    wp.then(
        () => console.log("File copied successfully"),
        (error) => console.log(error.message)
    )
},
    (error) => console.log(error.message)
)

console.log("End of the program");