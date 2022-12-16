const http = require('http');
const date = require('./myfirstmodule');
const fs = require('fs');

http.createServer((req,res)=> {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('todays date is:' + date.myDateTime())
    res.end();

}).listen(8080);