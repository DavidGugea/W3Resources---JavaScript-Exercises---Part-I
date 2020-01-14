// 121. Write a JavaScript program to convert a value to a safe integer.

const isSafe = (value) => Number.isSafeInteger(value) ? Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER))
