/*
47. Write a JavaScript program to perform a deep comparison between 
two values to determine if they are equivalent.
*/

const deep_compi = (firstObj, secondObj) => {
	let infinityFlat_firstObj = new Array();
	let infinityFlat_secondObj = new Array();

	Object.keys(firstObj).map((key) => {
		if(typeof firstObj[key] == "object"){
			infinityFlat_firstObj.push(firstObj[key].flat(Infinity)); // add all keys from the key
			// using .flat(Infinity);
		}else{
			infinityFlat_firstObj.push(firstObj[key]);
		}
	})
	Object.keys(secondObj).map((key) => {
		if(typeof secondObj[key] == "object"){
			infinityFlat_secondObj.push(secondObj[key].flat(Infinity)); // add all keys from the key
			// using .flat(Infinity);
		}else{
			infinityFlat_secondObj.push(secondObj[key]);
		}
	})

	if(infinityFlat_firstObj.length != infinityFlat_secondObj.length){
		return false;
	}
	else{
		infinityFlat_firstObj.map((val) => {
			if(!infinityFlat_secondObj.includes(val)){return false;}
		})
	}

	return true;
}


console.log(deep_compi({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' }));