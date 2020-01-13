// 99. Write a JavaScript program to hash a given input string into a whole number.

const hash = str => {
  let splitHash = str.split('');
  return splitHash.reduce(
    (hashCode, value, valueIndex, originalArray) =>
      (hashCode = value.charCodeAt(0) + (hashCode << 16) + (hashCode << 6) - hashCode),
    0
  );
};

console.log(hash('w3r'));
console.log(hash('name'));
