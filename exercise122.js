// 122. Write a JavaScript program to add an ordinal suffix to a number.

const addSufix = (number) => number[number.length-1] === "1" ? `${number}st` : number[number.length-1] === "2" ? `${number}nd` : number[number.length-1] === "3" ? `${number}rd` : `${number}th` 

console.log(addSufix('1')); 
console.log(addSufix('4')); 
console.log(addSufix('50')); 
console.log(addSufix('123'));
