// 59. Write a JavaScript program to create a function that invokes fn with a given context, optionally adding any additional supplied parameters to the beginning of the arguments

// fn.bind(context, ...args)

let bindCustom = (callback_fn, context, ...args) => 
    function(){
        return callback_fn.apply(context, args.concat(...arguments));
        // fn.apply(context, [])
        // args.concat(...arguments) == > returns an array with all the argument of each array
    }

function greetSomeone(greeting, punctuation){
    return `${greeting} ${this.name} ${punctuation}`    
}

let person = {
    name: "David"
}

var greetDavid = bindCustom(greetSomeone, person, "Good morning");
console.log(greetDavid("!"));