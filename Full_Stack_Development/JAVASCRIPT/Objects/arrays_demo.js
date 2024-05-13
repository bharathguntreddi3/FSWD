let names = ["Javascript", "Java", "Python"];
names[5] = "Typescript";
names[1] = "java 22"

console.log(names)
// in takes index
for (let n in names){
    console.log(`Value at ${n} is ${names[n]}`);
}
// of takes values
for (let name of names){
    console.log(name);
}