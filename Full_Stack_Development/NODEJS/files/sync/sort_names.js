const fs = require("fs");

const data = fs.readFileSync('./sync/names.txt', "utf-8");
const lines = data.split("\n");

console.log(lines.length);
lines.sort();

for(let line of lines) {
    console.log(line);
}
