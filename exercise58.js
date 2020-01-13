// 58. Write a JavaScript program to split values into two groups according to a predicate function, which specifies which group an element in the input collection belongs to.
let splitInGroups_ByCallback = (array, callback_fn_filter) => 
    array.reduce((accumulator, value, valueIndex, originalArray) => (accumulator[callback_fn_filter(value) ? 0 : 1].push(value), accumulator), [[], []]);

console.log(splitInGroups_ByCallback(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'));