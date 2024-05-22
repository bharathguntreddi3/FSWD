let funs = require("./mathfuns");
// import whatever is exported from mathfuns.js
console.log(funs);
console.log(funs.isEven(6));
console.log(funs.isPositive(0));

// the objects/property are copied 
// the first object/property is copies to isEven 
// destructing the object
let {isEven, isPositive, SIZE} = require("./mathfuns");
console.log(isEven(11)); 
console.log(isPositive(-1));

console.log(SIZE);