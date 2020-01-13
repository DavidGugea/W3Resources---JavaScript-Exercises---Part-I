// 101. Write a JavaScript program to return the object associating the properties to the values of a given array of valid property identifiers and an array of values.

const objectFrom = (keys, values) => keys.reduce((accumulator, key, keyIndex, originalKeysArray) => values[keyIndex] ? (accumulator[key] = values[keyIndex], accumulator) : accumulator , {})

console.log(objectFrom(['a', 'b', 'c'], [1, 2])); 
console.log(objectFrom(['a', 'b'], [1, 2, 3]));

