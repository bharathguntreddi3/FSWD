function hasSpace(names){
    return names.includes(' ')
}

let names = ["stark", "Arya stark", "Robert", "Sansa Stark"];

let names_with_spaces = names.filter(hasSpace)

console.log(names_with_spaces)