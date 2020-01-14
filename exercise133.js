// 133. Write a JavaScript program to get the symmetric difference between two given arrays, after applying the provided function to each array element of both

const symmetricDifference_AfterApplyCallback = ( firstArray , secondArray , comparatorFN ) => firstArray.filter((value) => secondArray.findIndex((trackValue) => comparatorFN.call(null, value) === comparatorFN.call(null, trackValue)) === -1).concat(secondArray.filter((value) => firstArray.findIndex((trackValue) => comparatorFN.call(null, value) === comparatorFN.call(null, trackValue)) ===-1  ))

console.log(symmetricDifference_AfterApplyCallback([2.1, 1.2], [2.3, 3.4], Math.floor));
