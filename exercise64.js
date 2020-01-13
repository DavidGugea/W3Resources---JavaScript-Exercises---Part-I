// 64. Write a JavaScript program to get the first non-null / undefined argument.

let getUndefinedArgument = (...arguments) => {
    for(let i = 0;  i < arguments.length; i++){
        if(arguments[i] === undefined){
            return arguments[i];
        }
    }
}

console.log(getUndefinedArgument(null, undefined, '', NaN, 'abcd'));