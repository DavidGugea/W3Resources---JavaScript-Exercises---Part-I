// 119. Write a JavaScript program to create tomorrow's date in a string representation.

const getTomorrowsDate = () => new Date(new Date().getTime()+1000*60*60*24);


//new Date(new Date().getTime()+1000*60*60*24);
console.log(getTomorrowsDate());

