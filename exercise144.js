// 144. Write a JavaScript program to get an array of elements that appear in both arrays.

const intersection = ( firstArray , secondArray ) => firstArray.filter((value) => secondArray.includes(value))

console.log(intersection([1, 2, 3], [1, 2, 4]));
