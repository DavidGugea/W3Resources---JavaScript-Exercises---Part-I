let groupBy_callbackFunction_Property = (array, callback) => array.map((value) => typeof callback === "function" ? value = callback(value) : value = value[`${callback}`]).reduce((accumulator, value, valueIndex, mappedArray) => {
        Object.keys(accumulator).includes(`${value}`) ? accumulator[`${value}`].push(array[valueIndex]) : accumulator[`${value}`] = [array[valueIndex]];
        return accumulator;
    }, {});

console.log(groupBy_callbackFunction_Property([6.1, 4.2, 6.3], Math.sqrt)); 
console.log(groupBy_callbackFunction_Property([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy_callbackFunction_Property(['one', 'two', 'three'], 'length'));