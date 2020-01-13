// 78. Write a JavaScript program to invert the key-value pairs of an object, without mutating it. The corresponding inverted value of each inverted key is an array of keys responsible for generating the inverted value. If a function is supplied, it is applied to each inverted key.

let objectInvert = (obj, callback_fn = null) => Object.entries(obj).reduce((accumulator, value, valueIndex, originalObject) => {
    typeof callback_fn === "function" ? accumulator[callback_fn.call(null, value[1])] ? accumulator[callback_fn.call(null, value[1])].push(value[0]) : accumulator[callback_fn.call(null, value[1])] = [value[0]] : accumulator[value[1]] ? accumulator[value[1]].push(value[0]) : accumulator[value[1]] = [value[0]]   
    return accumulator;
}, {});  

console.log(objectInvert({ a: 1, b: 2, c: 1 }));
console.log(objectInvert({ a: 1, b: 2, c: 1 }, value => 'group' + value));