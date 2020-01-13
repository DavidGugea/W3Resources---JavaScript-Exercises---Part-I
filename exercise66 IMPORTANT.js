// 66. Write a JavaScript program to perform right-to-left function composition.

// const compose = (...fns) => fns.reduce((f, n) => (...args) => f(n(...args)));
const compose = (...fns) => fns.reduce(
  (f, n) => (...args) => {
    console.log(fns);
    console.log(fns[0]);
    console.log(fns);
    console.log("f: ");
    console.log(f);
    console.log("n: ");
    console.log(n);
    return f(n(...args))
  },
);

const compose_OneLiner = (...functions) => fns.reduce((f, g) => (...args) => f(g(...args)));

const add10 = x => x + 10;
const add5 = x => x + 5;
const multiply = (x, y) => x * y;

const multiplyAndAdd5AndThenAdd10 = compose_OneLiner(
  add10,
  add5,
  multiply
);

//builds | add10 ( add5 (multiply(...args))) |


console.log(multiplyAndAdd5AndThenAdd10(5, 2));

// var multiply = (arr) => arr.reduce(
//   (accumulator, value, valueIndex, originalArray) => {
//     console.log(accumulator, value);
//     return accumulator*value;
//   }
// );

// let numbersArray = [4, 5, 6, 10];
// console.log(multiply(numbersArray));
// // 4 5
// // 20 6
// // 120 10
// // 12 1200

// var multiply = (arr) => arr.reduce((accumulator, value) => accumulator*value);
// console.log(multiply(numbersArray));

/*

// Binding 

const notEqual = (x, y) => x !== y
const samples = ['foo', 'bar'];

var notFoos = samples.filter(notEqual.bind(null, 'foo'));
console.log(notFoos);
var notFoosAgain = samples.filter(
  (value) => notEqual.bind(null, 'foo', value)() // or notEqual.bind(null, 'foo')(value)
);
console.log(notFoosAgain);

*/

/*

// Partial Application

const notEqual = (x, y) => x !== y
let partial = (f, ...xs) => (...ys) => f(...xs, ...ys)

const samples = ['foo', 'bar'];

var notFoos = samples.filter(partial(notEqual, 'foo'));
console.log(notFoos);
var notFoosAgain = samples.filter(
  (value) => partial(notEqual, 'foo')(value)
);
console.log(notFoosAgain);

*/

/*

// Currying

const notEqual = (x, y) => x !== y
const curry = f => x => y => f(x, y);

const samples = ['foo', 'bar'];

var notFoos = samples.filter(
  curry(notEqual)('foo')
);
console.log(notFoos);

console.log('');

var notFoosAgain = samples.filter(
  (value) => {
    console.log(curry);
    console.log(curry(notEqual));
    console.log(curry(notEqual)('foo'));
    console.log(curry(notEqual)('foo')(value));
    for(let i = 0 ; i < 3 ; i++){
      console.log('');
    }
    return curry(notEqual)('foo')(value);
  }
);
console.log(notFoosAgain);

*/