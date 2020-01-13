// 114. Write a JavaScript program to uncurry a function up to depth n.

const uncurryToN = ( curriedFunc , n ) => {
	// curry x => y => z // n == 3
	// add(1)(2)(3)
	return function(...args){
		let eval_str = new String();
		for(let argumentIndex = 0 ; argumentIndex < args.length ; argumentIndex++){
			eval_str += `(${args[argumentIndex]})`;
		};
		return eval(`curriedFunc${eval_str}`);
	};
};

const add = x => y => z => x + y + z;
const uncurriedAdd = uncurryToN(add, 3);
console.log(uncurriedAdd(1, 2, 3));
