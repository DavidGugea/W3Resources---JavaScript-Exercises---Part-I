// 41. Write a JavaScript program to create an object from the given key-value pairs.

const obj_from_KVPARRAY = (KVP_ARRAY) => {
	let returnObject = new Object();

	KVP_ARRAY.map((KVP) => {
		returnObject[KVP[0]] = KVP[1];
	})

	return returnObject;
}


console.log(obj_from_KVPARRAY([['a', 1], ['b', 2]])); 
console.log(obj_from_KVPARRAY([[1, 10], [2, 20], [3, 30]]));