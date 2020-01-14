// 120. Write a JavaScript program to convert a string to snake case.

const toSnake = (string) => string.match(/([A-Z]{2,}(?=[A-Z][a-z]|\b)|[A-Z][a-z]*|[a-z]*|[0-9]+)/g).filter((value) => Boolean(value)).join("_"); 

// ([A-Z]{2,}(?=[A-Z][a-z]|\b)|[A-Z][a-z]*|[a-z]*|[0-9]+)
console.log(toSnake('camelCase')); 
console.log(toSnake('some text'));
console.log(toSnake('some-mixed_string With spaces_underscores-and-hyphens'));
console.log(toSnake('AllThe-small Things'));
console.log(toSnake('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'));
