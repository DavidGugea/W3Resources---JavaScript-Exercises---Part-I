// 94. Write a JavaScript program to move the specified amount of elements to the end of the array. 

const rotateFull = ( arr, rotationValue ) => {
	if(rotationValue < 0){
		arr.unshift(...arr.splice(arr.length-Math.abs(rotationValue), arr.length));
		return arr;
	}
	else{
		return arr.concat(arr.splice(0, rotationValue));
	}
}

console.log(rotateFull ([1, 2, 3, 4, 5], 2));
console.log(rotateFull([1, 2, 3, 4, 5], -2));
