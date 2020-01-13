/*
23. Write a JavaScript program to filter out the non-unique values in an array, 
based on a provided comparator function. 
*/

const filter_By_fn = (arr, fn) => {
	return arr.filter(($VAR, $VAR2) => {
		fn($VAR, $VAR2);
	})
}

// w3resource code:
const filter_Non_UniqueBy = (arr, fn) =>
  arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));

console.log(filter_By_fn(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
)); 

