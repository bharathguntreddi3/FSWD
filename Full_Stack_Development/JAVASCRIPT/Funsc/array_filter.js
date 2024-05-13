let a = [1, 3, 5, 10, 30];

function isOdd(n, idx){
    console.log(idx);
    return n%2 == 1;
}

odd_nums = a.filter(isOdd);  //filter only based on the given function and stores in a new array
console.log(odd_nums)