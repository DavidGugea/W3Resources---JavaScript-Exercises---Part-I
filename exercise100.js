// 100. Write a JavaScript program to create an array of elements, grouped based on the position in the original arrays and using function as the last value to specify how grouped values should be combined.

const zipBy = (...args) => {
	// ARRAYS GIVEN BY THE USER // EVERY ELEMENT IS AN ARRAY TILL THE LAST ONE, THE LAST ONE IS A FUNCTION
	let arrays = args.splice(0, args.length-1);
	// CALLBACK FUNCTION GIVEN BY THE USER // THE LAST ELEMENT IN ...args
	const callbackFN = args[args.length-1];
	
	const MAX_MATRIX_ROW_RANGE = arrays.map((array) => array.length).sort()[arrays.length-1];
	
	// ************************************************************************ //
	
	// Create rows // Use | i | as an index till it's smaller  than the MAX_MATRIX_ROW_RANGE, that being the length of the BIGGEST given array.
	
	let matrix = [];
	
	for(let i = 0 ; i < MAX_MATRIX_ROW_RANGE ; i++){
		// Use | .reduce ( ... ) | to create an ARRAY that iterates over each given array and if array[i] is a true boolean and not undefined, it will be added in the accumulator, otherwise if it is undefined, because the [i] is bigger than the maximum index, push null in the array. After that push the given accumulator from the | .reduce ( ... ) | function in the | matrix | array.
		matrix.push(arrays.reduce((accumulator, array, arrayIndex, originalArraysList) => array[i] ? (accumulator.push(array[i]), accumulator) : (accumulator.push(null), accumulator) ,[]));	
	}

	console.log(matrix);

	// ************************************************************************ //	
	
	let returnList = [];
	
	matrix.map((MATRIX_ROW) => returnList.push(callbackFN.call(null, ...MATRIX_ROW)));

	return returnList;
}

console.log(zipBy([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c)); // [111,222]

console.log(zipBy(
  [1, 2, 3],
  [10, 20],
  [100, 200],
  (a, b, c) => (a != null ? a : 'a') + (b != null ? b : 'b') + (c != null ? c : 'c')
));
