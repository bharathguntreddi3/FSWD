const fs = require("fs").promises;

async function copyFile() {
    try {
        console.log("About to read")
        let data = await fs.readFile(__dirname + "/names.txt", "utf-8");
        console.log("About to write")
        await fs.writeFile(__dirname + "/names3.txt", data); // await can only be used inside the async function
        console.log("File copied successfully")
    }
    catch (error) {
        console.log(error.message)
    }
}

copyFile(); // calling the function
for(let i = 0; i < 10; i++){
    console.log(i)
}