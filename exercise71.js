// 71. Write a JavaScript program to create a deep clone of an object. 

const createDeepClone = (obj) => {
    const KEYS = Object.keys(obj); // ["a", "b", "func1", "func2"]
    const VALUES = Object.values(obj); // [2, 3, ƒ, ƒ]

    let objClone = {};
   
    // Use recursion of the same function ( 'createDeepClone' ) in case that the values is an object, to create a deepclone of that too.
    KEYS.map((key, keyIndex) => {
        return typeof VALUES[keyIndex] === "object" ? objClone[key] = createDeepClone(VALUES[keyIndex]): objClone[key] = VALUES[keyIndex]
    });

    return objClone;
};


let obj = {
    a: 2,
    b: 3,
    func1: (a, b) => a+b,
    func2: (...nums) => nums.reduce((accumulator, value, valueIndex, originalArray) => accumulator+value, 0),
    objects_obj: {
        x: 5,
        y: 5
    }
}

const objDeepClone  = createDeepClone(obj);

console.log(obj.func2(1, 2, 3, 4, 5));
console.log(objDeepClone.func2(1, 2, 3, 4, 5));

for(let i = 0 ; i < 3 ; i++){
    console.log('');
};

console.log(obj === objDeepClone);
console.log(obj.objects_obj === objDeepClone.objects_obj);