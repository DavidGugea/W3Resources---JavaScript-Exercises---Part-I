/*
18. Write a JavaScript program to remove specified elements from the left of a 
given array of elements.
*/

const rem = (arr, filterValue) => arr.slice(filterValue);

console.log(rem([1, 2, 3]));
console.log(rem([1, 2, 3], 1));
console.log(rem([1, 2, 3], 2));
console.log(rem([1, 2, 3], 4));