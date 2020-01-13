/*
31. Write a JavaScript program to find all elements in an given array except for the first one.
Return the whole array if the array's length is 1.
*/

const filter_Array = (arr) => {
	if(arr.length === 1) return arr
	else return arr.join("").substring(1, arr.length).split("");
}

console.log(filter_Array([1, 2, 3]));
console.log(filter_Array([1]));