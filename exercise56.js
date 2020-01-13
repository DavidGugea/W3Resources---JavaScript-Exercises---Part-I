// 56. Write a JavaScript program to check whether all elements in a given array are equal or not.
let countNumber = (array, target) => {
    return array.reduce((accumulator, value, valueIndex, originalArray) => {
        if(value === target){accumulator++}; return accumulator;
    }, 0);
}
let checkIfEqual = (array) => 
    array.reduce((accumulator, value, valueIndex, originalArray) => {
        valueIndex === 0 ? originalArray[valueIndex+1] === value ? accumulator++ : accumulator-- : originalArray[valueIndex-1] === value ? accumulator++ : accumulator--;
        return accumulator;
    }, 0) === array.length;

console.log(checkIfEqual([1, 1, 1]));
console.log(checkIfEqual([1, 1, 2]));