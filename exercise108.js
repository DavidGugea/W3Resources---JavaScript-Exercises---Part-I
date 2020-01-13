// 108. Write a JavaScript program to get all unique values of an array, based on a provided comparator function.

const uniqueValuesBy_callbackFN = (arr, callback_FN) => {
	return arr.reduce((accumulator, value, valueIndex, originalArray) => {
		if(!accumulator.some(x => callback_FN(value, x))){
			accumulator.push(value);
		};
		return accumulator;
	},[]);
};

console.log(uniqueValuesBy_callbackFN(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
));
