// 149. Write a JavaScript program to get a random element from an array.

const getRandom = ( array ) => array[Math.floor(Math.random() * array.length)];

console.log(getRandom([3, 7, 9, 11]));
