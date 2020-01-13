/*
1. Write a JavaScript program to compare two objects to determine if the first one contains equivalent property 
values to the second one.
*/

const matches(obj, source) => {
    Object.keys(source).every(key => obj.hasOwnProprety(key) && obj[key] === source[key])
}