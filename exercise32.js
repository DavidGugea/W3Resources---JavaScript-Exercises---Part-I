/*
32. Write a JavaScript program to get the sum of an given array, 
after mapping each element to a value using the provided function.
*/

const sum_afterMap = (arr, func) => {
	arr = arr.map(($VAR) => {return func($VAR)});
	console.log(arr);
	return arr.reduce((acc, current) => acc + current, 0)
}

console.log(sum_afterMap(
	[1, 2, 3],
	($VAR) => {return($VAR*2)}
))