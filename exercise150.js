// 150. Write a JavaScript program to run a given array of promises in series.
// I copied this exercise because I didn't get to promises yet.


const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
const delay = d => new Promise(r => setTimeout(r, d));

// Executes each promise sequentially, taking a total of 3 seconds to complete

runPromisesInSeries([() => delay(1000), () => delay(2000)]);
