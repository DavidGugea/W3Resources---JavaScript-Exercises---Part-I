// 60. Write a JavaScript program to create a function that invokes the method at a given key of an object, optionally adding any additional supplied parameters to the beginning of the arguments. 

let bindKey = (context, callback_fn_NameFromContext, ...args) => 
    function(){
        return context[callback_fn_NameFromContext].apply(context, args.concat(...arguments));
    }

const freddy = {
    user: 'fred',
    greet: function(greeting, punctuation) {
      return greeting + ' ' + this.user + punctuation;
    }
  };

const freddyBound = bindKey(freddy, 'greet');
console.log(freddyBound('hi', '!'));