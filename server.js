var connect = require('connect');
connect.createServer(
    connect.static(__dirname)
).listen(8080);
console.log('clonewars test server listening on 8080');
console.log('try http://localhost:8080/fb_login.html');