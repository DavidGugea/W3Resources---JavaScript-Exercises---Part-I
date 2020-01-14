// 125. Write a JavaScript program to convert a float-point arithmetic to the Decimal mark form and It will make a comma separated string from a number.

const toStringWithComma = num => num.toLocaleString('en-US');
console.log(toStringWithComma(12305030388.9087));
console.log(toStringWithComma(123.2264))
console.log(toStringWithComma(-100.10))
