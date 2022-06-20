

const http = require("http");

const express = require("express");

const app = express();


const server = http.createServer(app) // create a server 

server.listen(8080);
