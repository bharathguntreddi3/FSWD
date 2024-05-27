let names = ["Javascript", "Java", "Python", "RUby", "C"];

names.push("Typescript");
console.log(names);

names.splice(0,1);
console.log(names);

console.log(names.indexOf("Python"));

names.sort();
console.log(names);