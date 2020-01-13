/*
5. Write a JavaScript program to convert an array of objects to a comma-separated values (CSV) 
string that contains only the columns specified.
*/

const CSV_CLS = (csv, columns, delimiter=',') => {
    // { x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y'])) == > 
    /*
    x,y
    "100","200"
    "300","400"
    "6",""
    "","7"
    */

    let returnString = `${columns[0]}, ${columns[1]}\n`;
    
    for(let main_csv_index = 0; main_csv_index < csv.length; main_csv_index++){
        let insertString = "  ";
        for(let i = 0; i < columns.length; i++){
            let parser = csv[main_csv_index][columns[i]] + delimiter;
            if(csv[main_csv_index][columns[i]] + delimiter !== "undefined" + delimiter){
                insertString += csv[main_csv_index][columns[i]] + delimiter;
            }else{
                insertString += '"",';
            }
        }
        insertString = insertString.substring(0, insertString.length-1); // delete last comma;
        insertString += "\n";
        

        returnString += insertString;
    }

    return returnString;
}

console.log(CSV_CLS([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ["x", "y"]))

// w3resources code
const JSON_to_CSV = (arr, columns, delimiter = ',') =>
    [
        columns.join(delimiter),
        ...arr.map(obj =>
        columns.reduce(
            (acc, key) => `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`,
            ''
        )
        )
    ].join('\n');

const JSON_to_CSV_test = (arr, columns, delimiter = ',') => {
    [
        columns.join(delimiter),
        arr.map(obj => columns.reduce(
            (acc, key) => `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`,
            ''
        ))
    ].join("\n");
}

console.log(JSON_to_CSV_test2([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ["x", "y"]))
