/* 
45. Write a JavaScript program to split values into two groups, 
if an element in filter is truthy, the corresponding element in 
the collection belongs to the first group; otherwise, it belongs to the second group
*/

const split_FT = (arr) => {
	let firstGroup = new Array(); let secondGroup = new Array();

	arr.map(($VAR) => {
		if($VAR) firstGroup.push($VAR)
		else secondGroup.push($VAR)
	})
		
	return [firstGroup, secondGroup]
}


console.log(split_FT(['beep', 'boop', 'foo', 'bar', true, true, false, true]));