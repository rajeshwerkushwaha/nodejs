/**
 * This program is to create a http server in nodejs
 *
 * How to run: $node server.js
 * How to test: $curl localhost:8000    or   goto the browser and hit the url
 *                                           http://localhost:8000
 */

var http = require('http');
var server = http.createServer(function(request, response){
    response.writeHead(200);
    response.write('Hello World...');
    response.end();
});
server.listen(8000);
