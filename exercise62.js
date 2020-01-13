// 62. Write a JavaScript program to chain asynchronous functions.

const chainAsyncFunctions = (fns) => {
    curr = 0;
    console.log(fns, curr);
    const next = () => fns[curr++](next);
    next();
};

asyncFunctions = [
    next => {
      console.log('0 seconds');
      setTimeout(next, 1000);
    },
    next => {
      console.log('1 second');
    }
]

chainAsyncFunctions(asyncFunctions);