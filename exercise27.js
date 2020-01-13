/*
27. Write a JavaScript program to find every element that exists 
in any of the two given arrays once, using a provided comparator function.
*/

/*
const custom_filter_unique = (arr1, arr2, comparator) => {
	let concat_arr = arr1.concat(arr2);
	let mainarray = new Array();
	concat_arr.map(($VAR) => {
		if(concat_arr.indexOf($VAR) === concat_arr.lastIndexOf($VAR)){
			mainarray.push($VAR);
		}
	})

	let returnArray = new Array();
	mainarray.map(($VAR) => {
		if(comparator($VAR)){returnArray.push($VAR)}
	})
	return returnArray;
}

console.log(custom_filter_unique(
	[1, 2, 3, 4],
	[1, 2, 6, 4, 3, 2],
	()
))
*/

const custom_filter_unique = (arr1, arr2, comparator) => {
	let mainArr = new Array();
	arr1.concat(arr2).map(($VAR) => {
		if(!mainArr.includes($VAR)){
			mainArr.push($VAR);
		};
	});

	let returnArray = new Array();

	mainArr.map(($VAR) => {
		if(comparator($VAR)){returnArray.push($VAR)}
	})

	return returnArray;
};

console.log(custom_filter_unique(
	[1, 2, 3, 4, 5],
	[1, 2, 3, 4],
	comparator = ($VAR) => {
		return Boolean($VAR > 2);
	}
));
















































