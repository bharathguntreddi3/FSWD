// SuperClass
class person {
    constructor(name, age) {
        // create properties and store values
        this.name = name;
        this.age = age;
    }
    //methods
    isMajor() {
        return this.age >= 21;
    }
}

// subclass
class student extends person {
    constructor(name, age, course) {
        super(name, age); // calling the constructor of parent/super class
        this.course = course;
    }

    changeCourse(newCourse) {
        this.course = newCourse;
    }
}

let p1 = new person("Bharath", 20);
console.log(p1);

let s = new student("Mark", 20, "AI & DS");
s.changeCourse("CSE");

console.log(s);
console.log(s.isMajor());