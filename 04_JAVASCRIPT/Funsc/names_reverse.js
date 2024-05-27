function inReverse(){
    var rname = ' '
    for (let i = names.length-1; i>=0; i--){
        rname = rname + names.charAt(i);
    }
    console.log(rname)
}

let names = ["stark", "Arya", "Robert", "Sansa"];

names.forEach(inReverse);
