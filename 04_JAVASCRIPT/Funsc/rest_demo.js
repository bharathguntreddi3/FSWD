function sum(...nums){
    //console.log(typeof(nums))
    let total = 0;
    for (let n of nums){
    total += n;
    }

    return nums;
}

console.log(sum(10, 20, 30,))
console.log(sum(3, 6, 7, 9, 2))