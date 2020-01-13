// This file was done to get a better understanding of currying in javascript

'use strict';

const converge = ( convergingFunction , branchingFunctions ) => (...args) => convergingFunction.apply(null, branchingFunctions.map(
    (func) => {
        return func(...args);
    }
))   

let numArray = [1, 2, 3, 4, 5];

const addNumbers = (...numbers) => numbers.reduce((accumulator, value, valueIndex, originalArray) => accumulator+value, 0);
const squareNumbers = (...numbers) => numbers.reduce((accumulator, value, valueIndex, originalArray) => accumulator+Math.pow(value, 2), 0);

const squareNumber_AndThen_AddThem = converge(
    addNumbers,
    [squareNumbers]
);
const addNumbers_AndThen_SquareTheResult = converge(
    squareNumbers,
    [addNumbers]
)

const result = squareNumber_AndThen_AddThem(2, 5);
const result2 = addNumbers_AndThen_SquareTheResult(2, 5);
console.log(result);
console.log(result2);