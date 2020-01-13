// 106. Write a JavaScript program to create an array of elements, ungrouping the elements in an array produced by zip and applying the provided function.

const unzip_apply = (...values) => {
	let arrays = values.slice(0, values.length-1)[0];

	const callback_FN = values[values.length-1];
	
	const MAX_MATRIX_ROW_RANGE = arrays.map((array) => array.length).sort()[arrays.length-1];

	// ************************************************************************ //
	let UNZIPPED_ARRAY = [];

	for(let index = 0 ; index < MAX_MATRIX_ROW_RANGE ; index++){
		UNZIPPED_ARRAY.push(arrays.reduce((accumulator, array, arrayIndex, originalArraysArray) => array[index] === undefined ? (accumulator.push(null), accumulator) : (accumulator.push(array[index]), accumulator), []));
	}

	return UNZIPPED_ARRAY.map((array) => callback_FN.call(null, ...array));

	// ************************************************************************ //

}

console.log(unzip_apply([[1, 10, 100], [2, 20, 200]], (...args) => args.reduce((acc, v) => acc + v, 0)));
