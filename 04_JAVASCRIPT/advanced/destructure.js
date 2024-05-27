let a = [1,20,3]

// let n1 = a[0]
// let n2 = a[1]

// destructuring
let [n1, n2, n3] = a;   // those three values are copies to this
console.log(n1, n2, n3)

let [x, y] = a
console.log(x, y)

let [v1, v2, v3, v4] = a;
console.log(v1, v2, v3, v4)

let [b1, b2, b3, b4=0] = a;
console.log(b1, b2, b3, b4)

// take first and third and ignore the third
let [p, , q] = a;
console.log(p, q)

let [f, ...r] = a;
console.log(f, r)