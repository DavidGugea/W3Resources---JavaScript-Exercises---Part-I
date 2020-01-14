// Write a JavaScript program to convert a string to kebab case. 

const toKebab = (string) => string.match(/([A-Z]{2,}(?=[A-Z][a-z]*|\b)|[A-Z][a-z]*|[a-z]*|\d*)/g).filter((_char_) => Boolean(_char_)).join("-");

console.log(toKebab('camelCase'));
console.log(toKebab('some text'));
console.log(toKebab('some-mixed_string With spaces_underscores-and-hyphens'));
console.log(toKebab('AllThe-small Things'));
console.log(toKebab('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'));
