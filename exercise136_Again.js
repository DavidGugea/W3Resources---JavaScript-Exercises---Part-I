// 136. Write a JavaScript program to generate all permutations of a string (contains duplicates).

const permutationInsert = (TRACK_CHAR, array) => {
	var PERMUTATION_LIST_FOR_CHAR = new Array();	
	for(let i = 0 ; i <= array.length; i++){
		array.splice(i, 0, TRACK_CHAR);
	
 		PERMUTATION_LIST_FOR_CHAR.push(array.join(""));

		array.splice(i, 1);
	};
	return PERMUTATION_LIST_FOR_CHAR;
};
const makePermutations = (string) => string.split("").reduce((MAIN_ACCUMULATOR, TRACK_CHAR, TRACK_CHAR_INDEX, originalCharArray) => {
	var PERMUTATION_LIST = string.split('').reduce((accumulator, _char_, _char_index_, originalCharArray ) => TRACK_CHAR_INDEX !== _char_index_ ? (accumulator.push(_char_), accumulator) : accumulator , [])
	permutationInsert(TRACK_CHAR, PERMUTATION_LIST).concat(permutationInsert(TRACK_CHAR, PERMUTATION_LIST.reverse())).map((permutation_charChain) => {
		if(!MAIN_ACCUMULATOR.includes(permutation_charChain)){
			MAIN_ACCUMULATOR.push(permutation_charChain);
		};
	})
	return MAIN_ACCUMULATOR;
}, []) 

console.log(makePermutations('abc'));
console.log(makePermutations('$**'));
