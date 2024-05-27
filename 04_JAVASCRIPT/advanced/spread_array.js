let a = [1,2,3];
let b = a;  //creates and alias
let c = [0, ...a, 100]; // spread array and create a copy

a[0] = 10
console.log(b)
console.log(c)

let d = [...c]
console.log(d)

function add(x, y, z){
    return x+y+z;
}
let n = [1,2,3];

console.log(add(...b))