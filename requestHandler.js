/**
* Created with nodejs.
* User: rajeshwerkushwaha
* Date: 2014-06-01
* Time: 02:21 PM
* To change this template use Tools | Templates.
*/

function start(response){
    response.writeHead(200);
    response.write('We are on start...');
    response.end();
}

function upload(response){
    response.writeHead(200);
    response.write('We are on upload...');
    response.end();
}

exports.start = start;
exports.upload = upload;