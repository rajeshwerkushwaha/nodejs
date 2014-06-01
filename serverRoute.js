/**
* Created with nodejs.
* User: rajeshwerkushwaha
* Date: 2014-05-31
* Time: 09:25 AM
* To change this template use Tools | Templates.
*/

var http = require('http'),
    url = require('url');

function start(route, handler){
    function onRequest(request, response){
        var path = url.parse(request.url).pathname;
        route(handler, path, response);
    }
    var server = http.createServer(onRequest);
    server.listen(8000);    
}

exports.start = start;