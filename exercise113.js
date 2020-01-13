// 113. Write a JavaScript program to unescape escaped HTML characters.

const unescapeHTML = str =>
  str.replace(
    /&|<|>|'|"/g,
    tag =>
      ({
        '&': '&',
        '<': '<',
        '>': '>',
        ''': "'",
        '"': '"'
      }[tag] || tag)
  );

console.log(unescapeHTML('<a href="#">Me & you</a>'));
