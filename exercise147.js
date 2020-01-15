// 147. Write a JavaScript program to serialize a cookie name-value pair into a Set-Cookie header string.

const serializeCookie_To_NVP_SetCookie = ( name , value ) => `${name}=${value}`;

console.log(serializeCookie_To_NVP_SetCookie('foo', 'bar'));
