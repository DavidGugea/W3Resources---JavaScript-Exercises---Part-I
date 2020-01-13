// 39. Write a JavaScript program to remove the key-value pairs corresponding to the given keys from an object.

const delete_KVP = (obj, key) => {
	let returnOBJ = new Object();

	Object.keys(obj).map(($KEY) => {
		if($KEY !== key){
			returnOBJ[$KEY] = obj[$KEY];
		}
	})

	return returnOBJ
}

console.log(delete_KVP({ a: 1, b: '2', c: 3 }, 'b'));
console.log(delete_KVP({ a: 1, b: 2, c: 3 }, 'c'));