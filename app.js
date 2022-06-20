/**
 * http, https, fs, path and  os are default module
 */

/**
 * http -> launch a server and send requests
 * https -> launch a SSL server
 * fs -> 
 * require -> import files into any file it is default method exposed by nodejs
 * 
 */

const http = require("http");


// event driver architecture for callback and promise function
const server = http.createServer((req, res) => {
 // console.log("req>>>", req);

}) // create a server 

// on going listening

server.listen(8080);