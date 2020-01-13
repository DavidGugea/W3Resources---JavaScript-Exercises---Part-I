// 79. Write a JavaScript program to take any number of iterable objects or objects with a length property and returns the longest one.

let sortOBJ = (...iter) => iter.sort((a, b) => a.length > b.length ? 1 : -1)[iter.length-1];

console.log(sortOBJ('this', 'is', 'a', 'testcase'));
console.log(sortOBJ(...['a', 'ab', 'abc']));
console.log(sortOBJ(...['a', 'ab', 'abc'], 'abcd'));
console.log(sortOBJ([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]));
console.log(sortOBJ([1, 2, 3], 'foobar'));