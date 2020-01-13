// 115. Write a JavaScript program to create a function that accepts up to one argument, ignoring any additional arguments

const acceptOne = fn => argument => fn.call(null, argument)
console.log(['6', '8', '10'].map(acceptOne(parseInt)));
