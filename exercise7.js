// 7. Write a JavaScript program to converts a specified number to an array of digits.
const convertNum_DigARR = (num) => {
	return num.toString().split("").map(x => {return eval(x)})
}

console.log(convertNum_DigARR(123));

// w3 resource code: 
const digitize = n => [...`${n}`].map(i => parseInt(i));
console.log(digitize(123));