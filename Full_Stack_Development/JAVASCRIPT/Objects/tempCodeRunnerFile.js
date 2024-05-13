var pattern = /\d+/;

var pattern1 = /\d{10}/

console.log(typeof(pattern));
console.log(pattern.test("abc"));
console.log(pattern.test("abc123"));
console.log(pattern.test("123"));

//exec()

let s = "ABC 123 234";
pattern = /\d+/;
let matches = pattern.exec(s);

console.log(matches);
console.log("Found " + matches[0] + "at " + matches.index)

//let st = "ABC 123 234"
// console.log(/\w+/.exec(st))