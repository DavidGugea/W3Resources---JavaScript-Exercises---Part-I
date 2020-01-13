// 70. Write a JavaScript program to count the occurrences of a value in an array.

const countOccurrences = (arr, targetValue) => arr.reduce((accumulator, value, valueIndex, originalArray) => value === targetValue ? accumulator+1:accumulator+0, 0)

const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 4, 5, 5, 5, 5, 5];

console.log(
    countOccurrences(
        arr, 5
    )
);

