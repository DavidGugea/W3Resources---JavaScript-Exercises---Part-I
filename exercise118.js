// 118. Write a JavaScript program to apply a function against an accumulator and each key in the object (from left to right). 

const applyFunction_ToOBJ_ACC = (obj, fn, givenAccumulator) => Object.keys(obj).reduceRight((accumulator, value, valueIndex, originalArray) => fn.call(null, accumulator, obj[value], value), givenAccumulator)

console.log(applyFunction_ToOBJ_ACC(
  { a: 1, b: 2, c: 1 },
  (r, v, k) => {
    (r[v] || (r[v] = [])).push(k);
    return r;
  },
  {}
));
