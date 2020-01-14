// 135. Write a JavaScript program to get the sum of the powers of all the numbers from start to end (both inclusive).

Array(10).reduce((accumulator, value, valueIndex, originalArray) => {
	console.log(endRange-(endRange-startRange)+valueIndex);
	accumulator += Math.pow(  endRange-(endRange-startRange)+valueIndex , power )
	return accumulator;
} , 0)


const sumPower_InRange = ( endRange , power = 2 , startRange = 1) => Array(startRange === 0 ? endRange+1 : endRange+1 - startRange).fill(1).reduce((accumulator, value, valueIndex, originalArray) => {
	accumulator += Math.pow(  endRange-(endRange-startRange)+valueIndex , power )
	return accumulator;
} , 0)	

console.log(sumPower_InRange(10));
console.log(sumPower_InRange(10, 3));
console.log(sumPower_InRange(10, 3, 5));
