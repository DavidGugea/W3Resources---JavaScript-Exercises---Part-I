/*
30. Write a JavaScript program to filter out the element(s) of an 
given array, that have one of the specified values
*/

const filter_Out = (arr, ...restArgs) => {
	let returnArray = new Array();
	arr.map(($VAR) => {
		if(!restArgs.includes($VAR)) returnArray.push($VAR)
	})
	return returnArray
}

console.log(filter_Out([2, 1, 2, 3], 1, 2));
console.log(filter_Out([2, 1, 2, 3], 3));