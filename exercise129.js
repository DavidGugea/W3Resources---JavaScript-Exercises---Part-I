// 129. Write a JavaScript program to get removed elements from the end of a given array until the passed function returns true.

const popTillTrue = ( array , callbackFunction ) => {while(!callbackFunction.call(null, array)){array.pop()}; return array}

const getLength = array => array.length == 2
console.log(popTillTrue(
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
	getLength
));
