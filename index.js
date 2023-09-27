// create server using express

//1. import express

const express = require("express");

//4.import cors
const cors = require("cors");

//8 import logic.js
const logic = require("./services/logic");

//2. create server using express
const server = express();

//5.using cors in server app
server.use(
  cors({
    origin: "http://localhost:4200",
  })
);

//6. To parse json data to js in server app- use express.json()
server.use(express.json());

//3. setup port for server app
server.listen(5000, () => {
  console.log("server listening on port 5000");
});

server.post("/submitFeedback", (req, res) => {
  console.log("..");
  console.log(req.body);

  //logic
  logic.submitFeedback(req.body).then((result) => {
    res.status(result.statusCode).json(result);
  });
});
