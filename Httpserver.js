const http = require('http')

//Create a server using http

const server = http.createServer(function(req,res){
//Header
res.writeHead(200,{'Content-Type':'text/plain'});

//Send bak some  information

//res.end("Welcome to My http Server node js project Zuri Assignment!");
res.end("Welcome to my first node js Zuri project")

});

//Create port
server.listen(4000,'127.0.0.1');
console.log("Created your server successfully! ");