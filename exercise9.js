/*
9. Write a JavaScript program to combine the numbers of a given array into an array containing all combinations.
*/

const combi = (arr) => {
	let returnArr = new Array([]);
	arr.map(($var) => {returnArr.push([$var])})
	for(let i = 2; i <= arr.length; i++){
		arr.map(($VAR) => {
			// $VAR = 1 == > index 
		})
	}
	return returnArr;
}

console.log(combi([1, 2, 3])); console.log();
// [1, 2, 3] == > [[],[1],[2],[2,1],[3],[3,1],[3,2],[3,2,1]]


const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);
//console.log(powerset([1, 2]));
//console.log(powerset([1, 2, 3]));
//console.log(powerset([1, 2, 3, 4]));

const powerset2 = (arr) => {
	arr.reduce((a, v) => {
		
	}, [[]])
}

console.log(powerset2([1, 2]))