// 146. Write a JavaScript program to create a shallow clone of an object.

const getShallowClone = objectToClone => Object.assign({}, objectToClone)

const a = { x: true, y: 1 };
const b = getShallowClone(a);
console.log(b);
