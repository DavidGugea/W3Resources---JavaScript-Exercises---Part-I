// 29. Write a JavaScript program to convert a value to a safe integer.

const safeInt = (num) => {
	return Math.round(num);
}

console.log(safeInt(5.2));
console.log(safeInt(5.52));
console.log(safeInt(Infinity));