// 77. Write a JavaScript program to iterate over all own properties of an object, running a callback for each one.

const mapOverProperty = (obj, callback_fn) => Object.entries(obj).reduce((accumulator, value, valueIndex, originalArray) => {
    accumulator[value[0]] = callback_fn.call(null, value[1]);
    return accumulator;
}, {})

let user = {
    age: 16,
    name: "David",
    score1: 1,
    score2: 2,
    score3: 3,
    score4: 4,
    score5: 5
};

let pow = (value) => Math.pow(value, 2);
console.log(mapOverProperty(user, pow));