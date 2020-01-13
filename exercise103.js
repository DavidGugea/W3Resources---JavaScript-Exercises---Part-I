// 103. Write a JavaScript program to convert a given string into an array of words.

let convertTo_WORDS = (string , REGEXP_PATTERN) => string.split(REGEXP_PATTERN).filter(Boolean);

console.log(convertTo_WORDS('I love javaScript!!', /\W/g));
console.log(convertTo_WORDS('python, java, php', /\W/g));
