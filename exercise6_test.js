// 6. Write a JavaScript program to target a given value in a nested JSON object, based on the given key. 

const dig = (obj, target) => {
	return target in obj 
	? obj[target]
	: Object.values(obj).reduce((acc, val) => {
		if(typeof val === "object"){return dig(val, target)}
	}, null)
}


const x = {
    level1: {
        level2: {
            "level3": "asd"
        },
        level4: "asd",
        level5: {
            "level5_target": "targettttt",
        }
    }
}

console.log(dig(x, "level5_target"))
console.log();

Object.values(x).reduce((acc, val) => {
	console.log(val);
}, null)
console.log();

let myArray = ["a", "b", "c"];
let x = 0;

myArray.reduce((defaultValue, currentValue) => {
    defaultValue += currentValue.length;
})