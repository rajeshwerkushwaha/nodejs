/**
* Created with nodejs.
* User: rajeshwerkushwaha
* Date: 2014-06-01
* Time: 02:33 PM
* To change this template use Tools | Templates.
*/

function route(handler, path, response){
    if(typeof handler[path] == 'function'){
        handler[path](response);
    }else{
        console.log('No handler is there for path '+path);
        response.writeHead(404);
        response.write('Invalid request!');
        response.end();
    }
    
}

exports.route = route;