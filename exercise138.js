// 138. Write a JavaScript program that takes a variadic function and returns a closure that accepts an array of arguments to map to the inputs of the function

const curried = fn => args => fn.call(null, ...args)

const arrayMax = curried(Math.max);
console.log(arrayMax([1, 2, 3]));
