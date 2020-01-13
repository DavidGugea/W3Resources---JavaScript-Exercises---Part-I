/*
42. Write a JavaScript program to get a customized coalesce function that 
returns the first argument that returns true from the provided argument validation function. 
*/

const coalesce = (...restArgs) => restArgs.filter(Boolean)

console.log(coalesce(undefined, null, NaN, '', 'Waldo'));