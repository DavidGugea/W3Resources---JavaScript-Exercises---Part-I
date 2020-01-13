// 112. Write a JavaScript program to unflatten an object with the paths for keys.
var objectFrom_PFK = (PFK_OBJECT) => {
	var PFK = Object.entries(PFK_OBJECT).map((item, itemIndex) => item[0].split(".").length >= 2 ? [item[0].split("."), item[1]] : [item[0], item[1]])
	console.log(PFK);

	var RETURN_OBJECT = new Object();

	PFK.map((KVP) => {
		var KEYS = KVP[0];
		var VALUE = KVP[1];

		if(typeof KEYS === "object"){
			let MAX_INDEX_ALLOWED = KEYS.length-1;
			let track_eval_string = '';	

			let INSERT_OBJECT = new Object();
			KEYS.map((KEY, KEYINDEX) => {
				if(KEYINDEX !== MAX_INDEX_ALLOWED){
					track_eval_string += `['${KEY}']`;
					eval(`INSERT_OBJECT${track_eval_string} = {}`);
				}
				else{
					track_eval_string += `['${KEY}']`;
					eval(`INSERT_OBJECT${track_eval_string} = ${VALUE}`);
				}
			});

			RETURN_OBJECT[KEYS[0]] = INSERT_OBJECT[KEYS[0]]
		}else{
			RETURN_OBJECT[KEYS] = VALUE;
		};
	});

	return RETURN_OBJECT;
};

console.log(objectFrom_PFK({ 'a.b.c': 1, d: 1 }));
