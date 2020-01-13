// 92. Write a JavaScript program to create a function that gets the argument at index n. If n is negative, the nth argument from the end is returned.

const getArgs = (n) => (...args) => n < 0 ? args[args.length+n] : args[n]

// Funcs
const getNTH_element_neg = getArgs(-2);
const getNTH_element_pos = getArgs(2);

console.log(getNTH_element_neg(1, 2, 3));
console.log(getNTH_element_pos(1, 2, 3));
