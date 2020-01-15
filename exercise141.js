// 141. Write a JavaScript program to get the highest index at which value should be inserted into array in order to maintain its sort order.

const sortedLastIndex = ( array , valueToInsert ) => {
	for(let index = array.length-1 ; index >= 0 ; index--){
		if(array[index] > valueToInsert && array[index-1] <= valueToInsert){
			return index;
		};
	};
}

const sortedLastIndex_OneLiner = ( array , valueToInsert) => (array.reverse(), array.reduce((accumulator , value , valueIndex , originalReversedArray) => (value > valueToInsert && array[valueIndex+1] <= valueToInsert) ? (accumulator=array.length-1-valueIndex, accumulator) : accumulator , undefined))

// (value > valueToInsert && array[valueIndex-1] < valueToInsert)
console.log(sortedLastIndex([10, 20, 30, 30, 40], 30));
console.log(sortedLastIndex_OneLiner([10, 20, 30, 30, 40], 30));
