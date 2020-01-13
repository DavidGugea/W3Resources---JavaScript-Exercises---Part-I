// 73. Write a JavaScript program to return the difference between two arrays, after applying the provided function to each array element of both

let returnDifference_After_ApplyFunctionToElements = (arr1, arr2, func) => {
    let returnDifference = [];

    let arr1_appliedFunc = arr1.map((value) => func.call(null, value));
    let arr2_appliedFunc = arr2.map((value) => func.call(null, value));

    arr1_appliedFunc.map((value, valueIndex) => {
        if(!arr2_appliedFunc.includes(value) && !returnDifference.includes(value)){
            returnDifference.push(arr1[valueIndex]);
        }
    });

    arr2_appliedFunc.map((value, valueIndex) => {
        if(!arr1_appliedFunc.includes(value) && !returnDifference.includes(value)){
            returnDifference.push(arr2[valueIndex]);
        }
    })

    return returnDifference;
};


console.log(returnDifference_After_ApplyFunctionToElements([2.1, 1.2], [2.3, 3.4], Math.floor));
console.log(returnDifference_After_ApplyFunctionToElements([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x));