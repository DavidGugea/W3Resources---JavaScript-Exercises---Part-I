// 74. Write a JavaScript program to filter out all values from an array for which the comparator function does not return true.

let filterFalse = (arr, func) => {
    let filterFalse_Array = new Array();

    arr.map((value) => {
        if(!func.call(null, value)){filterFalse_Array.push(value)}
    });

    return filterFalse_Array;
}

let isEven = (num) => num%2==0
let notEven = filterFalse(
    [1, 2, 3, 4, 5, 6],
    isEven
);

console.log(notEven);