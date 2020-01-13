// 68. Write a JavaScript program that accepts a converging function and a list of branching functions and returns a function that applies each branching function to the arguments and the results of the branching functions are passed as arguments to the converging function. 

// x = function( convergingFunction, [ list with branchingFUNCTIONS] );
// x returns a function that applies each branching function to the arguments
// the results of that ( of the branching functions ) are passed as arguments to the converging function

const converge = ( convergingFunction, branchingFunctions ) => (...args) => {
    return convergingFunction.apply(null, branchingFunctions.map(
        (func) => {
            return func(...args);
        }
    ));
};

// const converge_OneLiner = ( convergingFunction , branchingFunctions ) => (...args) => convergingFunction.apply(null, branchingFunctions.map((func) => func(...args)));

const converge_OneLiner = ( convergingFunction, branchingFunctions ) => (...args) => convergingFunction.apply(null, branchingFunctions.map((func) => func(...args)))


const average = converge_OneLiner((a, b) => a / b, [
    arr => arr.reduce((a, v) => a + v, 0),
    arr => arr.length
]);

console.log(average([ 6, 7]));
for(let i = 0 ; i < 7 ; i++){
    console.log('');
}
console.log(average([1, 2, 3, 4, 5, 6, 7]));

/*

convergingFunction.apply(null, branchingFunctions.map(
    (func, funcIndex) => {
        for(let i = 0 ; i < 3 ; i++){
            console.log('');
        }
        return func(...args);
    }
))

*/

/*

let arrayWithFunctions = [
    (param1, param2) => param1+param2,
    (param1, param2) => param1-param2
]

let onlyResults = arrayWithFunctions.map(
    (func) => {
        return func(10, 5);
    }
)

let convergePrototype = (a, b) => a / b
let convergePrototype_result = convergePrototype.apply(null, onlyResults);

console.log(onlyResults);
console.log(convergePrototype_result);

*/
