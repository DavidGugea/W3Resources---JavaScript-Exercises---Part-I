// 87. Write a JavaScript program to get the n maximum elements from the provided array. If n is greater than or equal to the provided array's length, then return the original array(sorted in descending order).

let returnMax = (arr, chunks) => {
	// sort the array in descending order
	arr.sort((i, j) => i > j ? -1 : 1 )
	
	let chunkArray = chunks >= arr.length ? arr : arr.slice(0, chunks) 

	return chunkArray;
}
let returnMax_OneLiner = (arr, chunks) => chunks >= arr.length ? arr.sort(( i , j ) => i > j ? -1 : 1 ) : arr.sort( ( i , j ) => i > j ? -1 : 1).slice(0, chunks);

let arr = [4, 5, 1, 2, 8, 10, 9, 6]
console.log(returnMax(arr, 3));
for(let i = 0 ; i < 3 ; i ++){
	console.log('');
}
console.log(returnMax_OneLiner(arr, 3))
