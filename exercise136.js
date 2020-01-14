// 136. Write a JavaScript program to generate all permutations of a string (contains duplicates).

const permutationOfString = (string) => {
	var stringSplit = string.split(''); // array with all the chars of the given string.
	
	var PERMUTATION_LIST = [];

	stringSplit.map((TRACK_CHAR, TRACK_CHAR_INDEX) => {
		let POS_INSERTION_LIST = stringSplit.reduce((accumulator, value, valueIndex, originalArray) => valueIndex !== TRACK_CHAR_INDEX ? (accumulator.push(value), accumulator) : accumulator , []);

		for(let i = 0 ; i <= POS_INSERTION_LIST.length; i++){
			POS_INSERTION_LIST.splice(i, 0, TRACK_CHAR);
			
			if(!PERMUTATION_LIST.includes(POS_INSERTION_LIST.join(""))){
				PERMUTATION_LIST.push(POS_INSERTION_LIST.join(""));
			};

			POS_INSERTION_LIST.splice(i, 1);
		};
	});	

	stringSplit.reverse().map((TRACK_CHAR, TRACK_CHAR_INDEX) => {
		let POS_INSERTION_LIST = stringSplit.reduce((accumulator, value, valueIndex, originalArray) => valueIndex !== TRACK_CHAR_INDEX ? (accumulator.push(value), accumulator) : accumulator , []);

		for(let i = 0 ; i <= POS_INSERTION_LIST.length; i++){
			POS_INSERTION_LIST.splice(i, 0, TRACK_CHAR);

			if(!PERMUTATION_LIST.includes(POS_INSERTION_LIST.join(""))){
				PERMUTATION_LIST.push(POS_INSERTION_LIST.join(""));
			};

			POS_INSERTION_LIST.splice(i, 1);
		};
	});



	return PERMUTATION_LIST;
};

console.log(permutationOfString('abc'));
console.log(permutationOfString('*$*'));
