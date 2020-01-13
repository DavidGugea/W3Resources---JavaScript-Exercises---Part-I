// 120. Write a JavaScript program to convert a string to snake case.

const toSnake = (string) => 

// ([A-Z]{2,}(?=([A-Z][a-z])+[0-9]*|\b)|([A-Z]{1}[a-z]*)|[a-z]*)
console.log(toSnake('camelCase'));
console.log(toSnake('some text'));
console.log(toSnake('some-mixed_string With spaces_underscores-and-hyphens'));
console.log(toSnake('AllThe-small Things'));
console.log(toSnake('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'));
