// 65. Write a JavaScript program to add special characters to text to print in color in the console (combined with console.log()).

let displayTextInColor = (text, background, color) => {
    return (`%c ${text}`, `background: ${background}; color: ${color}`)
};

console.log(`%c Hello`, "background: black; color:white; padding:500px; text-align:center; font-family: Verdana");