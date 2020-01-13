// 22. Write a JavaScript program to filter out the non-unique values in an array.

const filter_nonUnique = (arr) => {
	returnArr = new Array();	
	arr.map(($VAR) => {
		if(arr.indexOf($VAR) === arr.lastIndexOf($VAR)){
			returnArr.push($VAR);
		}
	})

	return returnArr
}


console.log(filter_nonUnique([1, 2, 2, 3, 4, 4, 5]));  
console.log(filter_nonUnique([1, 2, 3, 4]));