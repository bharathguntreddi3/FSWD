let a = [1, 3, 5, 10, 30]
//using arrow function
odd_nums = a.filter(v => v %2 === 1)
console.log(odd_nums)

// using index with filter
console.log(a.filter((v, idx)=> idx % 2 == 1))