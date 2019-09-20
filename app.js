//1.
const date = require('date-and-time');
const now = new Date();
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, resp,next) {
    //3.
    if (req.url === "/") 
    {
        fs.readFile("index.html", function (error, pgResp) {
            if (error) 
            {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } 
            else 
            {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }
             
            resp.end();
        });
    } 
    else if (req.url === "/Monday" || req.url === "/Tuesday" || req.url === "/Wednesday" ||
            req.url === "/Thursday" || req.url === "/Friday" || req.url === "/Saturday" || req.url === "/Sunday"){
        resp.writeHead(200, { 'Content-Type': 'text/html' });     
        resp.write("<b>Current Date and Time= "+date.format(now, 'YYYY/MM/DD HH:mm:ss')+'</b>');       
    } 
     else {
        //4.
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.write('Invalid URL' + req.url);
        resp.end();
    }

   
});

//5.
server.listen(8080);
console.log('Server Started listening on 8080');

