// 145. Write a JavaScript program to randomize the order of the values of an array, returning a new array

const randomizeArray = ( array ) => {
  // Math.floor(Math.random() * 10 ) // random from 0 to 9

  // This is the array that will be returned in the end. It contains all the mixed elements
  let returnArray = new Array();
  // This is the array that contains all the indexes of elements that have already been used
  let usedIndexes = new Array();
  // This is the original length of the given array. Throughout the program, the length of the original array is going to be modified, so we need the first length of the original one, so that the | returnArray | will have the same length as the array that is given to mix.
  let NEEDED_LENGTH = array.length;

  while(returnArray.length < NEEDED_LENGTH){
    let POS_INDEX = Math.floor(Math.random() * array.length) // The possible index that could be inserted in our return Array if it is a valid one

    if(!usedIndexes.includes(POS_INDEX)){
      // Because the index has never been used, that means that we didn't use that value yet, so ...
      returnArray.push(array[POS_INDEX]); // Add the value to the returnArray

      array.slice(POS_INDEX, 1); // Delete it from the original array because we don't need it anymore, it has already been used
      usedIndexes.push(POS_INDEX); // The index has been used, so add it to the | usedIndexes | array, so we won't be able to work with it anymore
    }else{
      continue; // If that is not the case , continue the loop
    };
  }

  // Return the array
  return returnArray;
}

const foo = [1, 2, 3];
console.log(randomizeArray(foo));
