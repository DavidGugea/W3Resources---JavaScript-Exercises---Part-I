// 91. Write a JavaScript program that will return true if the provided predicate function returns false for all elements in a collection, false otherwise.

const everyFalse = (arr, callback_FN) => !Boolean(arr.reduce((accumulator, value, valueIndex, originalArray) => {
	if(callback_FN.call(null, value)){
		accumulator.push(value);
	};
	return accumulator;
}, []).length)

const isEven = (value) => value % 2 == 0
let arr = [1, 3, 5]
let arr2 = [2, 4, 6]
let arr3 = [1, 2, 3]

console.log(everyFalse(arr, isEven));
console.log(everyFalse(arr2, isEven));
console.log(everyFalse(arr3, isEven))
