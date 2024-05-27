// create a class called player which extends person and stores sport in addition to person details
// provide methods print and setSport

class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class player extends person {
    constructor(name, age, sport){
        super(name, age);
        this.sport = sport;
    }

    Print() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

    setSport(newSport) {
        this.sport = newSport;
    }
}

let p = new person("bharath", 20);
console.log(p)

let ply = new player("Afzal", 22, "Badminton");
console.log(ply)
ply.setSport("Cricket");
console.log(ply);
ply.Print();