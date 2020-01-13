/*
19. Write a JavaScript program to remove specified elements from the right 
of a given array of elements.
*/

const remove_from_right = (arr, filterValue) => arr.slice(filterValue);


console.log(remove_from_right([1, 2, 3]));
console.log(remove_from_right([1, 2, 3], -1));
console.log(remove_from_right([1, 2, 3], -2));
console.log(remove_from_right([1, 2, 3], -4));