const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write("<body><form action='/message' method='POST'><input type='text' name='message'> <button type='submit'> Submit</button></form></body>")
    res.write("</html>");
    return res.end();
  }

  if (url === '/message' && method === "POST") {
    /**
     * listen to data streaming from the client
     * use buffer to handle such data
     */
    const body = []
    req.on('data', (chunk) => {
      console.log("chunk>>>", chunk);
      body.push(chunk)
    })

    return req.on('end', () => {
      /**
       * to work on the stream data we need buffer as like stop in bus transmission
       */
      const parsedBody = Buffer.concat(body).toString();
      console.log("parsedBody>>>", parsedBody);
      /**
       * output of above console is message=user_input_value
       * why message= because we have added name for input box that will create key value pair and send to the server
       */
      const actualMessage = parsedBody.split("=")[1]; // to take only value of message key

      // fs.writeFileSync("message.txt", actualMessage);

      fs.writeFile('message.txt', actualMessage, (err) => {
        /**
         * redirection using response
         */
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      })
    })

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
  res.end();
}

/**
 * export single element
 */
//module.exports = requestHandler;


// /**
//  * export multile things
//  */
// module.exports = {
//   handler: requestHandler
// };


// module.exports.handler = requestHandler;

exports.handler = requestHandler;