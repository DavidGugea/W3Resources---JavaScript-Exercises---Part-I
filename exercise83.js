// 83. Write a JavaScript program to create a new string with the results of calling a provided function on every character in the calling string.

const iterateOver_CharsInString = (string, callback_fn) => string.split("").map((char) => callback_fn.call(null, char)).join("");

const changeChar = (char) => `CHAR:${char}`;
const string = "ab cd       e f g      x";

console.log(iterateOver_CharsInString(string, changeChar));