/*
8. Write a JavaScript program to filter out the specified values from an specified array. 
Return the original array without the filtered values.
*/

const filterVar = (arr, ...restArgs) => {
	let returnArray = new Array();
	arr.map(function(_var){
		if(!restArgs.includes(_var)){returnArray.push(_var)}
	})
	return returnArray;
}

console.log(filterVar(["a", "b", "c", "a"], "a"));

// w3 resources code:

//#Source https://bit.ly/2neWfJ2 
 const pull = (arr, ...args) => {
  let argState = Array.isArray(args[0]) ? args[0] : args;
  let pulled = arr.filter((v, i) => !argState.includes(v));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
  return pulled;
};