/**
* Created with nodejs.
* User: rajeshwerkushwaha
* Date: 2014-05-26
* Time: 04:18 PM
* 
* Purpose: To print the file content on cosole asynchronusly.
* How to run: $node readFile.js [test file name]
*/

var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, fileHandler);

function fileHandler(err, fileData){
    console.log(fileData.setEncoding('utf8').toString());
}
