// 131. Write a JavaScript program to get an array with n elements removed from the beginning from a given array.

const removeNfromBeginning = ( array , n ) => {for(let i = 0 ; i < n ; i ++){array.shift()}; return array;}
console.log(removeNfromBeginning(
	[1, 2, 3, 4, 5],
	3
));
