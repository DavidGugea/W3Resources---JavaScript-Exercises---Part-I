/*
49. Write a JavaScript program to retrieve a set of properties
indicated by the given selectors from an object.
*/

/*
const object1 = {
  a: 'somestring',
  b: 42
};

for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}
*/

const dig_prop = (obj, ...selectors) => {
	let returnArray = new Array();
	let search_KVP = new Array();

	selectors.map((selector) => {
		let insertList = new Array(); // for each selector make a new insert list
		selector.split(".").forEach((select) => {
			if(select.includes("[")){
				// target[0] == > target [0]
				let first = select.substring(0, select.indexOf("["))
				let second = select.substring(select.indexOf("["), select.length)
				insertList.push(first, second);
			}else{
				insertList.push(select);
			}
		})
		search_KVP.push(insertList);
	})

	search_KVP.forEach((element) => {
		let insertString = 'obj';
		element.forEach((secondaryElement) => {
			if(secondaryElement.includes("[")){
				insertString += secondaryElement
			}else{
				insertString += `['${secondaryElement}']`;
			}
		})
		returnArray.push(eval(insertString))
	}) 

	/*
	selectors.map((selector) => {
		console.log(selector);

		// x.split(".").forEach((element) => {console.log(element)})
		selector.split(".").forEach((select) => {
			if(select.includes("[")){
				// target[0]
				let first = select.substring(0, select.indexOf("["))
				let second = select.substring(select.indexOf("["), select.length)
			}else{
				search_KVP.push(selector);
			}
		}	

		
		selector.map((select) => {
			if(select.includes("[")){
				// target[0]
				let first = select.substring(0, select.indexOf("["))
				let second = select.substring(select.indexOf("["), select.length)
				selector.splice(selector.indexOf(select), 1, first, second)
			}else{
				search_KVP.push(selector);
			}
		})
		
	})
	*/

	return returnArray;
}

const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };
console.log(dig_prop(obj, 'selector.to.val', 'target[0]', 'target[2].a'));
/*
const dig_prop = (obj, ...selectors) => {


	let search_KVP = selectors.map(val => 
		val.includes(".")
		? val.split(".")
		: val
	)

	let returnArray = new Array();
	
	/*
	search_KVP.map((selections) => {
		if(selections.length === 1 && !selections.includes("[")){
			returnArray.push(obj[selections[0]]);
		}else{
			let MAIN_PARSER = new Object();
			try{
				selections.map((selector) => {
				if(selector === selections[0]){
					MAIN_PARSER = obj[selector]
				}
	//
	console.log(search_KVP);


	search_KVP.map((selections) => {
		if(!Array.isArray(selections)){
			returnArray.push(eval(`obj.${selections}`));
		}else{
			let MAIN_PARSER = obj;
			selections.map((selector) => {

				// selector to val
				// ['selector']['to']['val']

				/*
				if(selector === selections[0]){
					// SETTING UP FOR THE FIRST ITEM IN THE LIST
					MAIN_PARSER = eval(`obj.${selector}`)
					returnArray.push(MAIN_PARSER);
				}else{
					// if MAIN_PARSER is for example an object and it is not an array:
					if(!Array.isArray(MAIN_PARSER)){
						// It is an object
						Object.keys(MAIN_PARSER).map((key) => {
							if(key === selector && selector === selections[selections.length-1]){
								// 
								//	if the key is the selector and the selector is the last selector 
								//	in the selections array, put the *value* of it in the returnArray
								//
								console.log(MAIN_PARSER, key);
								returnArray.push(MAIN_PARSER.key);
								//returnArray.push(eval(`${MAIN_PARSER}.${key}`));
							}else if(key === selector && selector !== selections[selections.length-1]){
								//
								//	if the key is the selector and the selector is not the last selector
								//	in the selections array, change the MAIN_PARSER to the specific value of the selector
								//
								//console.log(eval(`${MAIN_PARSER}.${key}`));
								console.log(MAIN_PARSER);
								//MAIN_PARSER = eval(`${MAIN_PARSER}.${key}`);
							}
						})
					}else{
						// It is an array
						MAIN_PARSER.map((key) => {
							if(key === selector && selector === selections[selections.length-1]){
								// 
								//	if the key is the selector and the selector is the last selector 
								//	in the selections array, put the *value* of it in the returnArray
								//

								//console.log(eval(`${MAIN_PARSER}[${key}]`))
								console.log(MAIN_PARSER, key);
								returnArray.push(MAIN_PARSER.key)
								// returnArray.push(eval(`${MAIN_PARSER}[${key}]`))
							}else{
								//
								//	if the key is the selector and the selector is not the last selector
								//	in the selections array, change the MAIN_PARSER to the specific value of the selector
								//

								//console.log(eval(`${MAIN_PARSER}.${key}`))
								MAIN_PARSER = MAIN_PARSER.key;
								// MAIN_PARSER = eval(`${MAIN_PARSER}[${key}]`);
							}
						})
					}
				}//
			})
		}
	})

	return returnArray;
}
*/