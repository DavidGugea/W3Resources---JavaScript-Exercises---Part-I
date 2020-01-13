// 85. Write a JavaScript program to replace all but the last number of characters with the specified mask character.

const maskChar = (string, numFromBeginToMask_Index=string.length-2, MASK_CHAR = "*") => string.split("").map((value, valueIndex) => valueIndex < numFromBeginToMask_Index ? MASK_CHAR : value)

console.log(maskChar("123456789", 2));
console.log(maskChar("123456789", 5, "A"));