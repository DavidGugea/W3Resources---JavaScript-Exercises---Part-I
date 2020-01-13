// 67. Write a JavaScript program to perform left-to-right function composition.

//const composeRight = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));
const composeRight = (...fns) => fns.reduce(
    (f, g) => (...args) => {
        console.log("g: ");
        console.log(g);
        console.log("f: ");
        console.log(f);
        return g(f(...args));
    }
)

const add = (x, y) => x + y;
const square = x => x * x;

const addAndSquare = composeRight(add, square);

console.log(addAndSquare(2, 5));