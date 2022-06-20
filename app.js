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
const fs = require('fs')

// event driver architecture for callback and promise function
const server = http.createServer((req, res) => {
  // console.log("req>>>", req);
  //exit server
  // process.exit()
  //console.log(req.url, req.method, req.headers);


  /**
   * read url and send the response as per the url 
  */
  const url = req.url;
  const method = req.method
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write("<body><form action='/message' method='post'><input /> <button type='submit'> Submit</button></form></body>")
    res.write("</html>");
    return res.end();
  }

  if(url==='/message' && method==="POST"){
    fs.writeFileSync("message.txt","DUMMY");
    /**
     * redirection using response
     */
    res.statusCode =302;
    res.setHeader('Location','/');
    return res.end();
  }

  /**
   * attach header for the response
   */
  res.setHeader('Content-Type', "text/html");

  /**
   * write some data to response kind of chunk of data
   */
  res.write("<html>");
  res.write("<head><title>This is first page using nodejs</title></head>");
  res.write("<body><h1>Hello from node</h1></body>")
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