/*
26. Write a JavaScript program that will return true if the string is 
y/yes or false if the string is n/no
*/

const filterString_yyesnno = (string) => {
	return (string === "y" || string === "yes" || string === "n" || string === "no");
}