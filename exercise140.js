// 140. Write a JavaScript program to get the highest index at which value should be inserted into array in order to maintain its sort order, based on a provided iterator function.

const sortBy_CallbackFN = ( array , valueToInsert , callbackFN ) => {
	array = array.map((value, valueIndex) => typeof callbackFN === "function" ? callbackFN.call(null, value) : value[callbackFN])
	valueToInsert = typeof callbackFN === "function" ? callbackFN.call(null, valueToInsert) : valueToInsert[callbackFN];
	
	array.push(valueToInsert); array.sort();
	
	for(let index = array.length-1; index>= 0; index--){
		if(array[index] === valueToInsert){
			return index;	
		};	
	};
	
	return undefined
};

console.log(sortBy_CallbackFN([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x));
