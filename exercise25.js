/*
25. Write a JavaScript program to create a new array out of the 
two supplied by creating each possible pair from the arrays. 
*/

const concat_pairs = (arr1, arr2) => {
	let returnArray = new Array();

	arr1.map(($VAR) => {
		let insertList = new Array();
		arr2.map(($VAR_arr2) => {
			insertList.push([$VAR, $VAR_arr2])
		})

		returnArray.push(insertList);
	})

	return returnArray;
}


console.log(concat_pairs([1, 2], ['a', 'b']));
console.log(concat_pairs([1, 2], [1, 2]));
console.log(concat_pairs(['a', 'b'], ['a', 'b']));