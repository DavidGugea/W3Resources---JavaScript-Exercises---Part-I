/*
36. Write a JavaScript program to create a function that invokes each provided function 
with the arguments it receives and returns the results.
*/

const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));
const minMax = over(Math.min, Math.max);

const over2 = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));
cnst minMax = over(Math.min, Math.max);