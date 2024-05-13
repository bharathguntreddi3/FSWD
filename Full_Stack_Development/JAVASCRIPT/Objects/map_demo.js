var students = new Map([[1, "Robert"], [2, "Mark"], [3, "Jason"]]);

students.set(5, "bharath");


for (var v of students.entries()){
    console.log(v)
}

for (var v of students.entries()){
    console.log(v[0])
    console.log(v[1])
}

s = students.get(1)
console.log(s)