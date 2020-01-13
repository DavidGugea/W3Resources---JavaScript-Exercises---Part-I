// 6. Write a JavaScript program to target a given value in a nested JSON object, based on the given key. 

const dig = (obj, target) => {
    return target in obj 
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if(typeof val === "object"){return dig(val, target)}
    }, undefined)
}

const dig3 = (obj, target) => {
  /*
  return target in obj 
    ? obj[target]
    : Object.values(obj)
  */
  /*
      return Object.values(obj)
        [{…}]
        0: {level2: {…}, level4: "asd", level5: {…}}
        length: 1
  */
  return target in obj
    ? obj[target]
    :Object.values(obj).reduce((acc, val) => {
      // console.log(acc); // undefined
      // console.log(val); // {level2: {…}, level4: "asd", level5: {…}
      if(typeof val === "object"){return dig3(val, target)}
    }, undefined)
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