/*
10. Write a JavaScript program to extract out the values at the specified indexes 
from an specified array. 
*/

const returnVar = (arr, ...restArgs) => {
	let return_arr = new Array();
	arr.map(($VAR) => {
		if(restArgs[0].includes(arr.indexOf($VAR))){return_arr.push($VAR)}
	})
	return return_arr
}

console.log(returnVar(
	[1, 2, 3, 4, 5, 6, 7],
	[1, 3]
));
