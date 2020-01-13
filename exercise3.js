// 3. Write a JavaScript program to converts a comma-separated values (CSV) string to a 2D array. 


// my code == >
const convertCSV_to_2D = (csv_array = "", delimiter=',') => {
    // 'a,b\nc,d' == > [["a","b"],["c","d"]]

    let returnArray = new Array();

    csv_array.split("\n").forEach((separated_list => {
        let insertList = new Array();
        separated_list.split(',').forEach((element) => {
            insertList.push(element);
        });

        returnArray.push(insertList);
    }));

    return returnArray;
}

console.log(convertCSV_to_2D('a,b\nc,d'));

// their code == >
const csv_to_array = (data, delimiter = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter));