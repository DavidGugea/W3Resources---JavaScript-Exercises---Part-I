// 139. Write a JavaScript program to split a multiline string into an array of lines.

const splitMultiline = (string) => string.split(/\n/g)


console.log('Original string:');
console.log('This\nis a\nmultiline\nstring.\n');
console.log(splitMultiline('This\nis a\nmultiline\nstring.\n'));