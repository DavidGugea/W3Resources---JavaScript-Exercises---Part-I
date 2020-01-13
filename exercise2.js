/*
2. Write a JavaScript program to copy a string to the clipboard. 
*/

const copyFromClipboard = (id) => {
    try{
        document.getElementById(id).select();
    }
    catch($ERROR){
        console.log();
    }

    document.execCommand("Copy");
}