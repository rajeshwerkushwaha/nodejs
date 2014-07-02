var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('key-cert.pem')
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("Hello User...You are in a safe zone...\n");
}).listen(8000);

/*


Steps:
======

Step 1: Open your terminal and run the following command to generate private key file 'key.pem'.

$ openssl genrsa 1024 > key.pem
Step 2: Now run the following command to generate SSL Certificate file 'key-cert.pem'.

$ openssl req -x509 -new -key key.pem > key-cert.pem
Step 3: Now write the 'server.js' file with the following content.

var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('key-cert.pem')
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(8001);
Step 4: Now run the server file using following command.

$ node server.js
Step 5: Now in the browser hit the url 'https://localhost:8001' and accept the certificate and you will see the 'hello world' message on the page.

=========================================================================================================================================

The two files you need are a PEM encoded SSL certificate and private key. PEM encoded certs and keys are Base64 encoded text with start/end delimiters that look like -----BEGIN RSA PRIVATE KEY----- or similar.

To create an SSL certificate you first need to generate a private key and a certificate signing request, or CSR (which also contains your public key).You can do this in a variety of ways, but here's how in OpenSSL.

openssl req -newkey rsa:2048 -new -nodes -keyout key.pem -out csr.pem
This will cause you to enter an interactive prompt to generate a 2048-bit RSA private key and a CSR that has all the information you choose to enter at the prompts. (Note: Common Name is where you'll want to put the domain name you'll be using to access your site.) Once you've done this you would normally submit this CSR to a trusted certificate authority and once they've validated your request you would receive a certificate.

If you don't care about your certificate being trusted (usually the case for development purposes) you can just create a self-signed certificate. To do this, we can use almost the same line, but we'll pass two extra parameters.

openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem

=========================================================================================================================================
openssl genrsa -out privatekey.pem 1024
openssl req -new -key privatekey.pem -out certrequest.csr
openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem
*/
