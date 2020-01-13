/*
48. Write a JavaScript program to get an array of function property names from own 
(and optionally inherited) enumerable properties of an object. 
*/


const functions = (obj, inherited = false) =>
  (inherited
    ? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))]
    : Object.keys(obj)
  ).filter(key => typeof obj[key] === 'function');

const obj_prop = (obj, inherit=false) => {
	return inherit 
	? [...Object.keys(obj),...Object.keys(Object.getPrototypeOf(obj))]
	: [Object.keys(obj).filter(key => typeof obj[key] === "function")];
}

function Foo() {
  this.a = () => 1;
  this.b = () => 2;
}
Foo.prototype.c = () => 3;
console.log(obj_prop(new Foo()));
console.log(obj_prop(new Foo(), true));