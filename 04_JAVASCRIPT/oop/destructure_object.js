let p = {firstname: 'Larry', company: 'Google'};

let {firstname, company} = p;

console.log(firstname, company);

let {name: n, company: c, age=20} = p;

console.log(n, c, age);