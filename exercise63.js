// 63. Write a JavaScript program to clone a given regular expression.

let cloneRegExp = (givenRegExp) => new RegExp(givenRegExp.source, givenRegExp.flags);

const regExp = /lorem ipsum/gi;
console.log(regExp);
const regExp2 = cloneRegExp(regExp);
console.log(regExp2);