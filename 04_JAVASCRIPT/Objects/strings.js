var s = 'Hello';

console.log(s.toUpperCase())
console.log(s.toLowerCase())
console.log(s.length);
console.log(s[0]);
console.log(s.charAt(3));
console.log(s.startsWith('e'))

var rate = 100;

console.log("Rate = " + rate);
console.log(`Rate = ${rate+1}`);

console.log(s.includes('lo'));
console.log(s.indexOf('l'))
console.log(s.lastIndexOf('l'))
console.log(s.indexOf('lo'));

var st = "abc, xyz, pqr";
var parts = st.split(",");
console.log(parts);

console.log(st.substring(0,3)); // gives position from 2 and 3 4th position is omitted
console.log(st.slice(3))

console.log("*".repeat(10))
console.log("   abc xyz  ".trim())