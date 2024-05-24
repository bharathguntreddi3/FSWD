// Read file sync
const fs = require("fs")

const data = fs.readFileSync('/names.txt', "utf-8");
console.log(data)