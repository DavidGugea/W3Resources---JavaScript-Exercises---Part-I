// 20. Write a JavaScript program to extend a 3-digit color code to a 6-digit color code.

const extend_3Digit = (hex) => {
	let returnHex = new String();
	if(hex.startsWith("#")){
		hex = hex.substring(1, hex.length)
	}
	hex = hex.split("")

	hex.map(($HEX_VAR) => {
		for(let i = 0; i <= 1; i++){returnHex += $HEX_VAR}
	})

	return `#${returnHex}`;
}



console.log(extend_3Digit('#03f'));
console.log(extend_3Digit('05a'));