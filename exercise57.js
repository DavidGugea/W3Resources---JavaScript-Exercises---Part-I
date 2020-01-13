// 57. Write a JavaScript program to compute the average of an array, after mapping each element to a value using the provided function.

let average_OfArray_With_CallbackFN = (array, callback_fn) => 
    array.map((value, valueIndex) => typeof callback_fn === "function" ? value = callback_fn(value) : value = value[callback_fn]).reduce((accumulator, value, valueIndex, originalArray) => accumulator += value)/array.length;
let average_OfArray_With_CallbackFN_OnlyReduce = (array, callback_fn) => 
    array.reduce((accumulator, value, valueIndex, originalArray) => typeof callback_fn === "function" ? accumulator += callback_fn(value) : accumulator += value[`${callback_fn}`], 0)/array.length;

console.log(average_OfArray_With_CallbackFN([{ a: 40 }, { a: 20 }, { a: 80 }, { a: 60 }], o => o.a));
console.log(average_OfArray_With_CallbackFN([{ a: 4 }, { a: 2 }, { a: 8 }, { a: 6 }], 'a'));
console.log(average_OfArray_With_CallbackFN([4.7, 9], Math.floor));

for(let i = 0 ; i < 3; i++){
    console.log('');
};


console.log(average_OfArray_With_CallbackFN_OnlyReduce([{ a: 40 }, { a: 20 }, { a: 80 }, { a: 60 }], o => o.a));
console.log(average_OfArray_With_CallbackFN_OnlyReduce([{ a: 4 }, { a: 2 }, { a: 8 }, { a: 6 }], 'a'));
console.log(average_OfArray_With_CallbackFN_OnlyReduce([4.7, 9], Math.floor));