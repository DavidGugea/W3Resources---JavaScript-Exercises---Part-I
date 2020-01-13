// 61. Write a JavaScript program to cast the provided value as an array if it's not one.

let castArray = (value) => Array.isArray(value) ? value : [value]

console.log(castArray('w3r')); 
console.log(castArray([100]));