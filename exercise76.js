// 76. Write a JavaScript program to execute a provided function once for each array element, starting from the array's last element

let mapRight = (arr, callback_FN) => arr.map((value) => callback_FN.call(null, value)).reverse()

console.log(mapRight([1, 2, 3, 4], value => Math.pow(value, 2)));