var fs = require("fs");
var http = require("http");
var bodyhtml = fs.readFileSync("index.html");
var bodyjs = fs.readFileSync("index.js");

http.createServer(function(request, response){
	if (request.url == '/index.html' || request.url == '/') {
        response.setHeader("Content-Type", "text/html");
		response.end(bodyhtml);
	}
    if (request.url == '/index.js' ) {
        response.setHeader("Content-Type", "text/javascript");
		response.end(bodyjs);
	}
	
	
}).listen(80);
