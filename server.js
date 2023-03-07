"use strict";

const express = require("express");
const cors = require("cors");
const app = express();
const recordsRouter = require("./src/API/routes/records.route");

app.use(cors());
app.use(express.json());

app.use(recordsRouter);

app.get("/", (req, res) => {
  res.status(200).send("Server is up and running");
});

app.use("*", (req, res) => {
  error404("Invalid Route", req, res);
});

function start(port) {
  app.listen(port, () => console.log(`Hello from port: ${port}`));
}

module.exports = {
  start: start,
  app: app,
};
