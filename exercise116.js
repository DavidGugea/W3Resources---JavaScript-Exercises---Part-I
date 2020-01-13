// 116. Write a JavaScript program to check if the predicate (second argument) is truthy on all elements of a collection (first argument). 

const filterAll = (collection , callbackPredicate) => collection.filter((value, valueIndex) => typeof callbackPredicate === "function" ? callbackPredicate.call(null, value) : value[callbackPredicate]).length === collection.length;
console.log(filterAll([{ user: 'Tinky-Winky', sex: 'male' }, { user: 'Dipsy', sex: 'male' }], 'sex'));
