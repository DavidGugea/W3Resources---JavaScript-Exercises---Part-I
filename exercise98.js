// 98. Write a JavaScript program to filter an array of objects based on a condition while also filtering out unspecified keys.

const pickyFilter_FullLiner = (objArr, pickyKeys, callback_FN) => {
	let objArr_filtered = objArr.reduce((accumulator, object, objectIndex, originalArray) => {
		if(callback_FN.call(null, object)){
			accumulator.push(object);
		};
		return accumulator;
	}, []);
	
	let objArr_picky_KVP_Objects = objArr_filtered.map((object) => Object.entries(object).reduce((accumulator, item, itemIndex, originalObject) => {
		if(pickyKeys.includes(item[0])){
			// The key is included in the picky keys
			accumulator[item[0]] = item[1];
		};
		return accumulator;
	}, {}));

	return objArr_picky_KVP_Objects;
}

const pickyFilter_OneLiner = (objArr, pickyKeys, callback_FN) => objArr.reduce((MAIN_ACCUMULATOR, object, objectIndex, originalArray) => callback_FN.call(null, object) ? ((MAIN_ACCUMULATOR.push(object)), MAIN_ACCUMULATOR) : MAIN_ACCUMULATOR, []).map((object) => Object.entries(object).reduce((accumulator, item, itemIndex, originalObject) => pickyKeys.includes(item[0]) ? ((accumulator[item[0]] = item[1]), accumulator) : accumulator ,{}))

const data = [
 {
    id: 1,
    name: 'john',
    age: 24
  },
  {
    id: 2,
    name: 'mike',
    age: 50
  }
];

console.log(pickyFilter_OneLiner(data, ['id', 'name'], item => item.age > 24));

for(let i = 0 ; i < 3 ; i++){
	console.log('');
}

console.log(pickyFilter_FullLiner(data, ['id', 'name'], item => item.age > 24));
