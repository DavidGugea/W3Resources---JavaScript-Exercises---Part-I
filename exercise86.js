// 86. Write a JavaScript program to get the maximum value of an array, after mapping each element to a value using the provided function.

const iterateOverArray_returnMax = (arr, func) => arr.map((value) => typeof func === "function" ? func.call(null, value) : value[func]).sort()[arr.length-1]

console.log(iterateOverArray_returnMax([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n));
console.log(iterateOverArray_returnMax([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'));