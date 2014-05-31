/**
* Created with nodejs.
* User: rajeshwerkushwaha
* Date: 2014-05-31
* Time: 09:25 AM
* To change this template use Tools | Templates.
*/

var http = require('http'),
    url = require('url'),
    handler = {};

handler['/'] = start;
handler['/start'] = start;
handler['/upload'] = upload;

var server = http.createServer(requestHandler);
server.listen(8000);

function requestHandler(request, response){
    var path = url.parse(request.url).pathname;
    response.writeHead(200);
    route(path, response);
    response.end();
}


function route(path, response){
    var temp = handler[path](response);
    return temp;
}

function start(response){
    response.write('We are on start...');
    response.end();
}

function upload(response){
    response.write('We are on upload...');
    response.end();
}

