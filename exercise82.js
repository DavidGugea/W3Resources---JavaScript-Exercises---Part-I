// 82. Write a JavaScript program to map the values of an array to an object using a function, where the key-value pairs consist of the original value as the key and the mapped value.

const KVP_FromArray = (obj, callback_fn) => Object.entries(obj).reduce((accumulator, value, valueIndex, originalArray) => {accumulator[value[1]]=callback_fn.call(null, value[1]);return accumulator;} , {})

const pow = (value) => Math.pow(value, 2);
const obj = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    five: 5
};


console.log(KVP_FromArray(obj, pow));