class person {
    constructor(name, age) {
        // create properties and store values
        this.name = name;
        this.age = age;
        let company = "Google"; // local variable
    }
    //methods

    isMajor() {
        return this.age >= 21;
    }
}

let p1 = new person("Bharath", 20);
p1.age = 22;
p1.email = "guntreddibharath@gmail.com" // can use without defining earlier

console.log(p1);
console.log(p1.isMajor());