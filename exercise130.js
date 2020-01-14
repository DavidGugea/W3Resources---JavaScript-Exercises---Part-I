// 130. Write a JavaScript program to remove n elements from the end of a given array.

const removeNFromEnd = (array, n) => {for(let i = 0 ; i < n ; i ++){array.pop()}; return array;}
console.log(removeNFromEnd(
	[1, 2, 3, 4],
	3
));
