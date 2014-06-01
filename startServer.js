/**
* Created with nodejs.
* User: rajeshwerkushwaha
* Date: 2014-06-01
* Time: 02:49 PM
* To change this template use Tools | Templates.
*/

var server = require('./serverRoute');
var router = require('./route');
var requestHandler = require('./requestHandler');

var handler = {};

handler['/'] = requestHandler.start;
handler['/start'] = requestHandler.start;
handler['/upload'] = requestHandler.upload;

server.start(router.route, handler);