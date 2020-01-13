// 44. Write a JavaScript program to remove falsey values from an given array.

const removeFalseyValues = (arr) => arr.filter(Boolean);


console.log(removeFalseyValues([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]));
console.log(removeFalseyValues([false, NaN, 'e' * 23]));