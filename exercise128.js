// 128. Write a JavaScript program to get removed elements of a given array until the passed function returns true.

const removeTillPass = ( array , callbackFunction) => array.reduce((accumulator, value, valueIndex, originalArray) => callbackFunction.call(null, value) ? ((accumulator.push(value)), accumulator) : accumulator , [])

const isEven = value => value % 2 == 0
console.log(removeTillPass([3, 1 ,5, 8, 9, 2, 4, 1, 3, 13], isEven))
