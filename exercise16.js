/*
16. Write a JavaScript function that returns true if the provided 
predicate function returns true for all elements in a collection, false otherwise.
*/

const custom_filter = (arr, rule) => {
	if(typeof rule !== "function"){return true}
	for(let i = 0; i < arr.length; i++){if(!rule(arr[i])){return false}}
	return true;
}

console.log(custom_filter([4, 2, 3], x => x > 1)); 
console.log(custom_filter([4, 2, 3], x => x < 1));
console.log(custom_filter([1, 2, 3])); 