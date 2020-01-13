//  40. Write a JavaScript program to create an array of key-value pair arrays from an given object.

const arr_from_KVP = (obj) => Object.keys(obj).map(key => [key, obj[key]])


console.log(arr_from_KVP({ a: 1, b: 2 }));
console.log(arr_from_KVP({ a: 1, b: 2, c: 3 }));