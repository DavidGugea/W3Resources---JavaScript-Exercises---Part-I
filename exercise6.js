// 6. Write a JavaScript program to target a given value in a nested JSON object, based on the given key. 

const data = {
  level1: {
    level2: {
      level3: 'some data'
    }
  }
};

const dog = {
    "status": "success",
    "message": "https://images.dog.ceo/breeds/african/n02116738_1105.jpg"
}

const dig = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === 'object') return dig(val, target);
      }, undefined);

//console.log(dig(dog, "message"));

const dig2 = (obj, target) => 
  target in obj 
      ? obj[target]
      : Object.values(obj).reduce((acc, val) => {
          if(acc !== undefined){return acc};
          if(typeof val === "object") return dig2(val, target);
      }, undefined);

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

const dig4 = (obj, target) => {
  return target in obj
  ? obj[target]
  : Object.values(obj).reduce((acc, val) => {
    if(typeof val === "object"){return dig4(val, target)}
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

//console.log(dig2(x, "level5_target"));
//console.log(dig3(x, "level5_target"));
console.log(dig4(x, "level5_target"));