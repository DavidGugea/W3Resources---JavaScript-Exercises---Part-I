/*
14. Write a JavaScript program to replace the names of multiple
object keys with the values provided.


const obj = { name: 'Bobo', job: 'Programmer', shoeSize: 100 };
result = rename_keys({ name: 'firstName', job: 'Actor' }, obj);

"Original Object"
[object Object] {
  job: "Programmer",
  name: "Bobo",
  shoeSize: 100
}
"-------------------------------------"
"New Object"
[object Object] {
  Actor: "Programmer",
  firstName: "Bobo",
  shoeSize: 100
}
*/
function kbv(obj, val){
	return Object.keys(obj).find(key => obj[key] === val);
}


const reverseMultiple = (firstObj, secondObj) => {
	let returnObject = new Object();

	let bigObj = new Object();
	let smallObj = new Object();
	if(Object.keys(firstObj).length > Object.keys(secondObj).length){
		bigObj = firstObj;
		smallObj = secondObj;
	}else{
		bigObj = secondObj;
		smallObj = firstObj;
	}

	Object.keys(smallObj).map((myKey) => {
		if(Object.keys(bigObj).includes(myKey)){
			returnObject[smallObj[myKey]] = bigObj[myKey];
		}else{
			returnObject[myKey] = smallObj[myKey];
		}
	})
 	
 	// iterate over non-multiple values
 	Object.values(bigObj).map((myVal) => {
 		if(!Object.values(returnObject).includes(myVal)){
 			let findKey = kbv(bigObj, myVal);

 			returnObject[findKey] = myVal;
 		}
 	});


	return returnObject;
}

const obj = { name: 'Bobo', job: 'Programmer', shoeSize: 100 };
console.log(reverseMultiple({ name: 'firstName', job: 'Actor' }, obj));





