// 96. Write a JavaScript program to pick the key-value pairs corresponding to the given keys from an object.

const get_specific_KVP = (obj, keys) => keys.reduce((accumulator, value, valueIndex, originalArray) => {accumulator[value] = obj[value];return accumulator}, {})

console.log(get_specific_KVP({ a: 1, b: '2', c: 3 }, ['a', 'c']));

