// 110. Write a JavaScript program to get every element that exists in any of the two arrays once.
const count = (arr, element) => arr.reduce((accumulator, value, valueIndex, originalArray) => value === element ? (accumulator++, accumulator) : (accumulator+0, accumulator),0);
const uniqueInBoth = (firstArray, secondArray) => firstArray.concat(secondArray).reduce((accumulator, value, valueIndex, originalConcatArray) => accumulator.includes(value) ? accumulator : ((accumulator.push(value)), accumulator), [])


console.log(uniqueInBoth([1, 2, 3], [4, 3, 2]));
console.log(uniqueInBoth([1, 2, 3], [1, 2, 3]));
