// 53. Write a JavaScript program to Initialize a two dimension array of given width and height and value.

let twoDimArray_Create = (counterDimensions, lengthOfDimension, fillValue) => {
    let returnTwoDimArray = [];
    for(let dimensionCounter = 1 ; dimensionCounter <= counterDimensions; dimensionCounter++){
        let dimensionPath = [];
        for(let lengthOfDimension_Counter = 1; lengthOfDimension_Counter <= lengthOfDimension; lengthOfDimension_Counter++){
            dimensionPath.push(fillValue);
        };
        returnTwoDimArray.push(dimensionPath);
    };

    return returnTwoDimArray;
};


console.log(twoDimArray_Create(2, 2, 0));
console.log(twoDimArray_Create(3, 3, 3));