let p = {name: 'bharath', company: 'google'};
console.log(p);

let p1 = p; // p1 is a reference/alias to p
let p2 = {...p, age:35, company: 'Facebook'}; // we are spreading and object

p.name = "Sergy";

console.log(p1);
console.log(p2);