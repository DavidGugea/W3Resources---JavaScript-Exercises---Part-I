// 112. Write a JavaScript program to unflatten an object with the paths for keys.
var objectFrom_PFK = (PFK_OBJECT) => {
	var PFK = Object.entries(PFK_OBJECT).map((item, itemIndex) => item[0].split(".").length >= 2 ? [item[0].split("."), item[1]] : [item[0], item[1]])
	console.log(PFK);

};


console.log(objectFrom_PFK({ 'a.b.c': 1, d: 1 }));
