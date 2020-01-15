// 143. Write a JavaScript program to sort the characters of a string Alphabetically.

const sortAlphabetically = string => string.split('').sort().join("");

console.log(sortAlphabetically('cabbage'));
console.log(sortAlphabetically('a7fs23l1n4o6x'));
