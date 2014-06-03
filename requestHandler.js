/**
* Created with nodejs.
* User: rajeshwerkushwaha
* Date: 2014-06-01
* Time: 02:21 PM
* To change this template use Tools | Templates.
*/

var querystring = require('querystring');

function start(response, postData){
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html";'+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
            '<form action="/upload" method="post">'+
                '<textarea name="text" rows="20" cols="60"></textarea>'+
                '<input type="submit" value="Submit Text"/>'+
            '</form>'+
        '</body>'+
        '</html>';
    response.writeHead(200);
    response.write(body);
    response.end();
}

function upload(response, postData){
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("You've sent the text: "+ querystring.parse(postData).text);
    response.end();
}

exports.start = start;
exports.upload = upload;