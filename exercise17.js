/*
17. Write a JavaScript program to split values of two given arrays into two groups. 
If an element in filter is truthy, the corresponding element in the collection 
belongs to the first group; otherwise, it belongs to the second group.
*/

const customFilter = (arr, filter) => {
	// first and second group // firstGroup == > true // secondGroup == > false
	let firstGroup = new Array(); let secondGroup = new Array();

	arr.map(($VAR) => {
		if(filter[arr.indexOf($VAR)]){
			firstGroup.push($VAR);
		}else if(!filter[arr.indexOf($VAR)]){
			secondGroup.push($VAR);
		}
	})

	return [firstGroup, secondGroup];
};


console.log(customFilter([1, 2, 3, 4], [true, true, false, true]));
console.log(customFilter([1, 2, 3, 4], [true, true, true, true]));
console.log(customFilter([1, 2, 3, 4], [false, false, false, false]));