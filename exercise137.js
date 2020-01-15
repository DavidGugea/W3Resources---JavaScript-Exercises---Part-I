// 137. Write a JavaScript program to perform stable sorting of an array, preserving the initial indexes of items when their values are the same. Do not mutate the original array, but returns a new array instead. 

const stableSorting_ByCallback = (arr, callback) => Object.assign(arr).sort(callback);

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(stableSorting_ByCallback(arr, () => 0));
