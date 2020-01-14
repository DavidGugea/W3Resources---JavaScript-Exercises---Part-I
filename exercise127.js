// 127. Write a JavaScript program to Iterate over a callback n times.

const callbackIteration = (callback , iterationLimit, callContext=null) => {
	for(let i = 0 ; i < iterationLimit ; i++){
		callback.call(callContext , i );
	};
};

var output = '';
callbackIteration(i => (output += i), 5);
console.log(output); // 01234
