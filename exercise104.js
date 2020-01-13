// 104. Write a JavaScript program to test a value, x, against a predicate function. If true, return fn(x). Else, return x.

const testyCallbacks = (check_callbackFN, incase_callbackFN) => (value) => check_callbackFN.call(null, value) ? incase_callbackFN.call(null, value) : value

const doubleEvenNumbers = testyCallbacks(x => x % 2 === 0, x => x * 2);
console.log(doubleEvenNumbers(2));
console.log(doubleEvenNumbers(1));
