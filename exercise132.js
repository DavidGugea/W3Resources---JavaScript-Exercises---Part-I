// 132. Write a JavaScript program to get the symmetric difference between two given arrays, using a provided function as a comparator.

const symmetricDifference_ByCallbackFN = ( firstArray , secondArray , comparatorFN ) => firstArray.filter((value) => secondArray.findIndex((trackValue) => comparatorFN.call(null, value, trackValue))===-1).concat(secondArray.filter((value) => firstArray.findIndex((trackValue) => comparatorFN.call(null, value, trackValue)) === -1))


console.log(symmetricDifference_ByCallbackFN(
  [1, 1.2, 1.5, 3, 0],
  [1.9, 3, 0, 3.9],
  (a, b) => Math.round(a) === Math.round(b)
));
