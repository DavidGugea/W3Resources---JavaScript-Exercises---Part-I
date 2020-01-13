// 51. Write a JavaScript program to get an object containing the parameters of the current URL.
let parameters_of_url = (url) => {
    // /(?<=(\?|\&))\w*=\w*/g
    
    if(url.match(/(?<=(\?|\&))\w*=\w*/g) !== null){
        let returnObj = {};
        url.match(/(?<=(\?|\&))\w*=\w*/g).map((value, valueIndex) => {
            returnObj[value.split("=")[0]] = value.split("=")[1];
        });

        return returnObj;
    };
    return null;
}

console.log(parameters_of_url('http://url.com/page?name=Adam&surname=Smith'));
console.log(parameters_of_url("google.com"));
console.log(parameters_of_url("https://w3resource.com"));