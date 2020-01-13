// 37. Write a JavaScript program to get a srted array of objects ordered by properties and orders. 

const sortOBJ = (arr, keySort=Object.keys(obj)[0], level, ord="asc") => {
	if(level === 1 || level === undefined || level === null){
		arr.sort(function(firstObject, secondObject){
			try{
				let parser = eval(firstObject);
				// if it didn't work, then it is a simple string with no numbers in it;
				if(firstObject[keySort].toLowerCase() < secondObject[keySort].toLowerCase()){
					return -1
				}else if(firstObject[keySort].toLowerCase() > secondObject[keySort].toLowerCase()){
					return 1;
				}else{
					return 0;
				}
			}catch($ERROR){
				// it contains numbers
				return firstObject[keySort] - secondObject[keySort];
			}
		})
		if(ord === "asc"){
			return arr;
		}else{
			return arr.reverse()
		}
	}else{
		if(level >= Object.keys(arr[0]).length){
			level = Object.keys(arr[0]).length-1; // -1 for looping (<=)
		}

		let parserKeys = new Array(keySort);
		for(let i = 1; i <= level; i++){
			Object.keys((arr[0])).map(($KEY) => {
				if($KEY != keySort && !parserKeys.includes($KEY)){
					parserKeys.push($KEY);
				}
			})
		}

		parserKeys.map(($PARSE_KEY) => {
			arr.sort(function(firstObject, secondObject){
			try{
				let parser = eval(firstObject);
				// if it didn't work, then it is a simple string with no numbers in it;
				if(firstObject[$PARSE_KEY].toLowerCase() < secondObject[$PARSE_KEY].toLowerCase()){
					return -1
				}else if(firstObject[$PARSE_KEY].toLowerCase() > secondObject[$PARSE_KEY].toLowerCase()){
					return 1;
				}else{
					return 0;
				}
			}catch($ERROR){
				// it contains numbers
				return firstObject[$PARSE_KEY] - secondObject[$PARSE_KEY];
			}
		})
		})

		if(ord === "asc"){
			return arr;
		}else{
			return arr.reverse();
		}
	}
}


console.log(sortOBJ([{ name: 'fred', age: 48 }, { name: 'barney', age: 36 }, { name: 'fred', age: 40 }], "name", level=1))
console.log(sortOBJ([{ name: 'fred', age: 48 }, { name: 'barney', age: 36 }, { name: 'fred', age: 40 }], "name", level=2))

// [{ name: 'fred', age: 48 }, { name: 'barney', age: 36 }, { name: 'fred', age: 40 }] sorted by name








