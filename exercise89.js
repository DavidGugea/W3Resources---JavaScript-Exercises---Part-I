// 89. Write a JavaScript program to negates a predicate function

const filterFalse = (arr, filter_callback_fn) => arr.reduce((accumulator, value, valueIndex, originalArray) => {if(!filter_callback_fn.call(null, value)){accumulator.push(value)}; return accumulator;} ,[]);

const isEven = (value) => value % 2 === 0
const arr = [1, 2, 3, 4, 5];

console.log(filterFalse(arr, isEven))
