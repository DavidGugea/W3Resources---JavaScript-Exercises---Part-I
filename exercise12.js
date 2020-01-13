// 12. Write a JavaScript program to removes non-printable ASCII characters from a given string. 
// äÄçÇéÉêw3resouröceÖÐþúÚ == w3resource

console.log("a".charCodeAt(0)); // 97
console.log("z".charCodeAt(0)); // 122
console.log("A".charCodeAt(0)); // 65
console.log("Z".charCodeAt(0)); // 90

const remove_nonPrintable_ASCII = (string) => {
	let returnString = "";
	string = string.split("");
	string.map(($VAR) => {
		try{
			$VAR = eval($VAR);
			returnString += $VAR;
		}catch($ERROR){
			let ascii = `${$VAR}`.charCodeAt(0);
			if(ascii > 97 && ascii < 122){
				returnString += $VAR;
			}else if(ascii > 65 && ascii < 90){
				returnString += $VAR;
			}
		}
	})

	return returnString;
}

console.log(remove_nonPrintable_ASCII("äÄçÇéÉêw3resouröceÖÐþúÚ"))