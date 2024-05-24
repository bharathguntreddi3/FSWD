const fs = require("fs").promises;

async function ConvertCopyUpper(sourceFile, targetFile) {
    try {
        let data = await fs.readFile(sourceFile, "utf-8");
        await fs.writeFile(targetFile, data.toUpperCase()); // await can only be used inside the async function
        console.log("File copied successfully")
    }
    catch (error) {
        console.log(error.message)
    }
}

ConvertCopyUpper(__dirname + "/names.txt", __dirname + "/unames.txt"); // calling the function with the parameters

