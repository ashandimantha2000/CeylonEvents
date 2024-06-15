require('dotenv').config();
const express = require("express");

const port = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  app.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Express is running in the port ${port}`);
});
