// 134. Write a JavaScript program to get the symmetric difference between two given arrays.

const symmetricDifference = ( firstArray , secondArray ) => firstArray.filter((value) => secondArray.findIndex((trackValue) => value===trackValue) === -1).concat(secondArray.filter((value) => firstArray.findIndex((trackValue) => value===trackValue)===-1))


console.log(symmetricDifference([1, 2, 3], [1, 2, 4]));
