// 142. Write a JavaScript program to get the lowest index at which value should be inserted into array in order to maintain its sort order.


const lowestIndexSort = ( array , valueToInsert ) => {
  array.push(valueToInsert);
  if(array[0] < array[1]){
    array.sort()
  }else{
    array.sort()
    array.reverse()
  }
  return array.indexOf(valueToInsert)
}

console.log(lowestIndexSort([5, 3, 2, 1], 4)); // 1
console.log(lowestIndexSort([30, 50], 40)); // 1
