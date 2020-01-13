// 102. Write a JavaScript program to create an array of elements, grouped based on the position in the original arrays.

const zip = (...arrays) => {
	const MAX_MATRIX_ROW_RANGE = arrays.map((array) => array.length).sort()[arrays.length-1];
	
	// ***************************************************//
	let MATRIX = [];
	
	for(let index = 0 ; index < MAX_MATRIX_ROW_RANGE ; index++){
		MATRIX.push(arrays.reduce((accumulator, array, arrayIndex, originalArraysArray) => array[index]!==undefined ? (accumulator.push(array[index]), accumulator ) : (accumulator.push(null), accumulator)  ,[]));	
	}

	// ***************************************************//
	
	return MATRIX;
};

console.log(zip(['a', 'b'], [1, 2], [true, false]));
console.log(zip(['a'], [1, 2], [true, false]));
