// 46. Write a JavaScript program to curry (curries) a function


const curry = (fn, arity = fn.length, ...args) =>
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);