// 107. Write a JavaScript program to get all unique values (form the right side of the array) of an array, based on a provided comparator function.

const compareBy_callbackFN = (arr, callback_FN) => {
	return arr.reduceRight((acc, v) => {
    		if(!acc.some(x => callback_FN(v, x))){
			acc.push(v);
		}
    		return acc;
  }, []);
};

console.log(compareBy_callbackFN(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
));
