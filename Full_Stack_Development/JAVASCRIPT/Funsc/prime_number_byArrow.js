// // use find and return the first number in an array of numbers
let nums = [4, 6, 3, 9, 7];
let i =2;

function isPrime(num){
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;

    return true;
}

first_prime = nums.find(isPrime);
all_prime = nums.filter(isPrime);

console.log(first_prime);
console.log(all_prime);