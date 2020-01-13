// 72. Write a JavaScript program to detect whether the website is being opened in a mobile device or a desktop/laptop.

const getDevice = () =>
  /Android|webOS|iPhone|iPod|iPad/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';
console.log(getDevice());    