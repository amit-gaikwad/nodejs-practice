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
  //exit server
  // process.exit()
  //console.log(req.url, req.method, req.headers);

}) // create a server 

// on going listening

server.listen(8080);



/**
 * study request object
 * heders -> 
 * host
 * cache control
 * req.url
 * req.method
 * req.headers
 * 
 */