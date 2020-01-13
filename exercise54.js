// 54. Write a JavaScript program to initialize an array containing the numbers in the specified range where start and end are inclusive with their common difference step.

let arrayFromRange = (end, start = 0 , step = 1) => {
    let returnArray = [];
    for(let i = start; i <= end; i+=step){
        returnArray.push(i);
    };
    return returnArray
};

console.log(arrayFromRange(5)); 
console.log(arrayFromRange(8, 3));  
console.log(arrayFromRange(6, 0, 2));

for(let i = 0 ; i < 3; i++){
    console.log('');
};

let arrayFromRange_ArrayFrom = (end, start = 0 , step = 1) => Array.from({length: Math.ceil((end+1-start)/step)}).map((value, valueIndex) => valueIndex*step+start);

console.log(arrayFromRange_ArrayFrom(5));
console.log(arrayFromRange_ArrayFrom(8, 3));
console.log(arrayFromRange_ArrayFrom(6, 0, 2));
