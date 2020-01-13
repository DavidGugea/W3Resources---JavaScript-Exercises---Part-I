// 105. Write a JavaScript program that return true if the given value is a number, false otherwise

const isNumber = (value) => Boolean(parseFloat(value));
const istNumber2 = (value) => Boolean(typeof value === "Number");

console.log(isNumber(2));
console.log(isNumber('a'));
