// 69. Write a JavaScript program to group the elements of an array based on the given function and returns the count of elements in each group.


const groupByFunction = (arr, groupDefiner) => arr.map((value) => typeof groupDefiner === "function" ? groupDefiner.call(null, value) : value[groupDefiner] ).reduce((accumulator, value, valueIndex, originalArray) => {
    accumulator[value] = (accumulator[value] || 0)+1;
    return accumulator;
}, {})

console.log(groupByFunction([6, 10, 100, 10], Math.sqrt));
console.log(groupByFunction([6.1, 4.2, 6.3], Math.floor));
console.log(groupByFunction(['one', 'two', 'three'], 'length'));