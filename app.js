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

  /**
   * attach header for the response
   */
  res.setHeader('Content-Type', "text/html");

  /**
   * write some data to response kind of chunk of data
   */
  res.write("<html>");
  res.write("<head><title>This is first page using nodejs</title></head>");
  res.write("<body><h1>Hello from node</h1><body>")
  res.write("</html>");

  /**
   * end the response
   */
  res.end()

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