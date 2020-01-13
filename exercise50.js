// 50. Write a JavaScript program to convert an integer to a suffixed string, adding am or pm based on its value.

const get_Meridiem_Suffix_Of_Integer = num =>
  num === 0 || num === 24
    ? 12 + 'am'
    : num === 12
      ? 12 + 'pm'
      : num < 12
        ? (num % 12) + 'am'
        : (num % 12) + 'pm';