// 109. Write a JavaScript program to get the nth element of a given array. 

const getElement = (arr, n) => n < 0 ? arr[arr.length+n] : arr[n]

console.log(getElement(['a', 'b', 'c'], 1));
console.log(getElement(['a', 'b', 'b'], -3));
