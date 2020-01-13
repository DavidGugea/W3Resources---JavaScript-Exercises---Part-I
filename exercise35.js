// 35. Write a JavaScript program to get an array of given n random integers in the specified range.

const array_RandomInt = (start, end, range) => {
	let returnArray = new Array();
	for(let i = 0; i <= range; i++){
		returnArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
	}
	return returnArray
}