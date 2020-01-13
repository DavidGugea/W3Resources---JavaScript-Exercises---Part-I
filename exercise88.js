// 88. Write a JavaScript program to get the median of an array of numbers. 

const getMedian = (arr) => arr.reduce((accumulator, value, valueIndex, originalArray) => accumulator+value, 0)/arr.length

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 7]
const arr3 = [6, 8]
const arr4 = [10, 20, 30, 40, 50, 60, 70, 80, 90]

console.log(getMedian(arr1));
console.log(getMedian(arr2));
console.log(getMedian(arr3));
console.log(getMedian(arr4));
