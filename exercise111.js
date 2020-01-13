// 111. Write a JavaScript program to build an array, using an iterator function and an initial seed value. 
const arrayBy_CallbackFN = (callback, beginParameter) => {
	var result = new Array();
	var recursionParameter = null;
	
	let seed = 0;

	while(true){
		if(beginParameter){
			seed=callback.call(null, beginParameter);

			beginParameter = null;
			recursionParameter = true;
			
			result.push(seed[0]);
			seed = seed[1];
		};

		if(!beginParameter && recursionParameter){
			let callbackResult = callback.call(null, seed);
			if(!callbackResult){
				recursionParameter = false;
				break;
			}
			else{
				seed = callbackResult[1];	

				result.push(callbackResult[0]);
			};
		}else{
			break;
		};
	};

	return result;
};

/*
 *	OR: 
 *
 *	let result = []
 *	seededCallback = [null, seed]
 *	while((fn(seededCallback[1]))){
 *		result.push(seededCallback[0])
 *	};
 *
 *	return result;
 */

var f = n => (n > 50 ? false : [-n, n + 10]);
console.log(arrayBy_CallbackFN(f, 10));
