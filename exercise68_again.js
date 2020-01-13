// 68. Write a JavaScript program that accepts a converging function and a list of branching functions and returns a function that applies each branching function to the arguments and the results of the branching functions are passed as arguments to the converging function.

// we create a function, that accepts as the first parameter another function and as the second paramtere A LIST OF other 'branching' functions. 
// with the results taken from each branching function that has been applied to the given arguments, with those result, we will have to pass them in the CONVERGING FUNCTION ( that being the first function that has been passed as an argument to our 'master' function )

const converge_OneLiner = ( convergeFunction , branchingFunction ) => (...args) => convergeFunction.apply(null, branchingFunction.map((func) => func.apply(null, args)));

// This function is exactly the same as the one liner but written in full code for a bettin understanding of what it does. THE RETURNED RESULT AND THE USE FOR IT IS EXACTLY THE SAME !
const conver_FullLines = ( convergeFunction , branchingFunctions ) => (...args) => {
  return convergeFunction.apply(null, branchingFunctions.map((func) => {
    return func.apply(null, args);
  }))
}

const average = conver_FullLines((a, b) => a / b, [
    arr => arr.reduce((a, v) => a + v, 0),
    arr => arr.length
]);

console.log(average([ 6, 7]));
for(let i = 0 ; i < 7 ; i++){
    console.log('');
}
console.log(average([1, 2, 3, 4, 5, 6, 7]))

/*

// Binding 

const notEqual = (x, y) => x !== y
const samples = ['foo', 'bar'];

var notFoos = samples.filter(notEqual.bind(null, 'foo'));
console.log(notFoos);
var notFoosAgain = samples.filter(
  (value) => {
    return notEqual.bind(null, 'foo')(value);
  }
);
console.log(notFoosAgain);

*/

/*

// Partial application

const notEqual = (x, y) => x !== y
const samples = ['foo', 'bar'];
let partial = (f, ...xs) => (...ys) => f(...xs, ...ys)

const notFoos = samples.filter(partial(notEqual, 'foo'));
console.log(notFoos);
const notFoosAgain = samples.filter(
  (value) => partial(notEqual, 'foo')(value) 
);
console.log(notFoosAgain);
*/

/*

// Currying
const notEqual = (x, y) => x !== y
const curry = f => x => y => f(x, y);

const samples = ['foo', 'bar'];

const notFoos = samples.filter(
  curry(notEqual)('foo')
);
console.log(notFoos);
const notFoosAgain = samples.filter(
  (value) => {
    console.log(curry);
    console.log(curry(notEqual));
    console.log(curry(notEqual)('foo'));
    for(let i = 0 ; i < 3 ; i++){
      console.log('');
    }
    return curry(notEqual)('foo')(value);
  }
)
console.log(notFoosAgain);

*/