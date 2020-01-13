// 24. Write a JavaScript program to dcapitalize the first letter of a string.

const decap = (string) => string[0].toLowerCase() + string.substring(1, string.length);

console.log(decap("W3resources"));

const dcap_bol = (string, parser=false) => {
	// parser false == > return opposite case for first char in the string
	// parser true == > return opposite case for every char in the string
	if(!parser){
		if(string[0].toUpperCase() == string[0]){
			// first char is upper case
			return string[0].toLowerCase() + string.substring(1, string.length);
		}else if(string[0].toLowerCase() == string[0]){
			// first char is lower case
			return string[0].toUpperCase() + string.substring(1, string.length);
		}
	}else if(parser){
		let returnString = new String();
		string.split("").map(($VAR) => {
			if($VAR.toUpperCase() == $VAR){
				// letter is upper case // return lower case
				returnString += $VAR.toLowerCase();
			}else if($VAR.toLowerCase() == $VAR){
				// letter is lower case // return upper case
				returnString += $VAR.toUpperCase();
			}
		})
		return returnString;
	}
}

console.log(dcap_bol("Red"));
console.log(dcap_bol("rED"));
console.log(dcap_bol("rED", true));