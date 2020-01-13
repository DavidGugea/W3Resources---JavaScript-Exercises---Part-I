// 97. Write a JavaScript program to create an object composed of the properties the given function returns truthy for. The function is invoked with two arguments: (value, key

const composeObj_by_callbackFN = (obj, callback_fn) => Object.entries(obj).reduce((accumulator, value, valueIndex, originalArray) => {if(callback_fn.call(null, value[1])){accumulator[value[0]] = value[1]} ; return accumulator;}, {});

const filterObj_by_callbackFN = (obj, callback_fn) => Object.entries(obj).filter((value) => callback_fn(value[1])).reduce((accumulator, value, valueIndex, originalArray) => ((accumulator[value[0]] = value[1]), accumulator) ,{})

console.log(composeObj_by_callbackFN({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'));
console.log(filterObj_by_callbackFN({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'));
