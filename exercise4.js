/*
4. Write a JavaScript program to convert a comma-separated values (CSV) string to a 2D array of objects. 
The first row of the string is used as the title row. 
*/

const CSV_to_2D_Objects = (csv, delimiter=',') => {
    // 'col1,col2\na,b\nc,d' == > [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
    let returnArray = new Array();

    // return csv.split("\n"); //  [ "col1,col2", "a,b", "c,d" ]
    let titles = csv.split("\n")[0].split(delimiter);
    let fullCSV = csv.split("\n");
    fullCSV.shift();

    // console.log(fullCSV); // [ "a,b", "c,d" ]
    fullCSV.forEach((str) => {
        let list = str.split(",");
        let insertObject = {};
        for(let i = 0; i < titles.length; i++){
            insertObject[titles[i]] = list[i];
        }

        returnArray.push(insertObject);
    })

    return returnArray;
}

console.log(CSV_to_2D_Objects('col1,col2\na,b\nc,d'));