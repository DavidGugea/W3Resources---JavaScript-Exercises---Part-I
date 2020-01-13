/*
38. Write a JavaScript program to pad a sring on both sides with the specified character, 
if it's shorter than the specified length.
*/

const pad_string = (string, len, char = " ") => {
	if(len > string.length){len = string.length-1};

	let returnString = Array.from(string);

	for(let i = 1; i <= len; i++){
		returnString.unshift(char);
	}
	for(let i = 1; i <= len; i++){
		returnString.push(char);
	}	

	return returnString.join("");
}

console.log(pad_string('cat', 8));
console.log(pad_string(String(42), 6, '0'))
console.log(pad_string('foobar', 3))