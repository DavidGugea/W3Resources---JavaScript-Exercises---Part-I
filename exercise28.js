// 28. Write a JavaScript program to measure the time taken by a function to execute

function func_timer(callback_fn, ...restArgs){
	let perf_counter_START = new Date();
	callback_fn(...restArgs);
	let perf_counter_END = new Date();
	return `Time taken == > ${(perf_counter_START.getTime() - perf_counter_END.getTime())} ms`;
}

let num = "";
for(let i = 0; ; i++){
	if(num.length > 1000){
		break;
	}else{
		num += "9";
	}
}

console.log(func_timer(Math.sqrt, eval(num)));