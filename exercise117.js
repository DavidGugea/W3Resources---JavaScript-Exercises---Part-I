// 117. Write a JavaScript program to truncate a string up to a specified length. 

const truncate = ( string , length) => {
	string = string.split("");
	while(true){
		if(string.length+3 !== length){
			string.pop();
		}else{
			break;
		};
	};
	string.push("...");
	return string.join("");
};


console.log(truncate('boomerang', 7));

