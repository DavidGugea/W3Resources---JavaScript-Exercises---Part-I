// 52. Write a JavaScript program to group the elements of a given array based on the given function.

groupByFunc = (array, callbackFn) => {
    let groups = {};
    array.map((value, valueIndex) => {
        groups[value] = callbackFn(value);
    });
    return groups;
}
groupByLength = (array) => {
    let groups = {};

    array.forEach((value) => {
        if(Object.keys(groups).includes(`${value.length}`)){
            groups[value.length].push(value);
        }
        else{
            groups[value.length] = [value];
        }
    })

    return groups;
}

console.log(groupByFunc([6.1, 4.2, 6.3], Math.sqrt)); 
console.log(groupByFunc([6.1, 4.2, 6.3], Math.floor));
console.log('');
console.log(groupByLength(['one', 'two', 'three']));

for(let i = 0 ; i < 3 ; i++){
    console.log('');
}

groupBy_FunctionAndProperty = (array, callback_fn) => {
    return array.reduce((accumulator, value, valueIndex, originalArray) => {
        typeof callback_fn === "function" ? value = callback_fn(value) : value = value[`${callback_fn}`]; 
        if(Object.keys(accumulator).includes(`${value}`)){
            accumulator[`${value}`].push(originalArray[valueIndex]);
        }else{
            accumulator[`${value}`] = [originalArray[valueIndex]];
        };
        return accumulator;
    }, {});
}


console.log(groupBy_FunctionAndProperty([6.1, 4.2, 6.3], Math.sqrt)); 
console.log(groupBy_FunctionAndProperty([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy_FunctionAndProperty(['one', 'two', 'three'], 'length'));

for(let i = 0 ; i < 3; i++){
    console.log('');
}

groupBy_MapAndReduce_CALLBACKFN_OR_PROPERTY = (array, callback) => {
    return array.map((value) => typeof callback=== "function" ? value = callback(value) : value = value[`${callback}`]).reduce((accumulator, value, valueIndex, originalArray) => {
        Object.keys(accumulator).includes(`${value}`) ? accumulator[`${value}`].push(array[valueIndex]) : accumulator[`${value}`] = [array[valueIndex]];
        return accumulator;
    }, {});
};


console.log(groupBy_MapAndReduce_CALLBACKFN_OR_PROPERTY([6.1, 4.2, 6.3], Math.sqrt)); 
console.log(groupBy_MapAndReduce_CALLBACKFN_OR_PROPERTY([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy_MapAndReduce_CALLBACKFN_OR_PROPERTY(['one', 'two', 'three'], 'length'));