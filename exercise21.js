// 21. Write a JavaScript program to get every nth element in an given array. 

const get_nthElement = (arr, n) => {
	let returnArr = new Array();
	for(let i = -1; i < arr.length; i+=n){
		if(arr[i] !== undefined){returnArr.push(arr[i]);}
	};
	return returnArr;
}

console.log(get_nthElement([1, 2, 3, 4, 5, 6], 1));
console.log(get_nthElement([1, 2, 3, 4, 5, 6], 2));
console.log(get_nthElement([1, 2, 3, 4, 5, 6], 3));
console.log(get_nthElement([1, 2, 3, 4, 5, 6], 4));