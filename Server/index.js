require('dotenv').config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT;

const connectDB = require("./dbConnect");
connectDB(process.env.MONGODB_URL);
const eventRoute = require("./routes/eventRoute")
const app = express();

app.get("/", (req, res) => {
  app.send("Hello World!");
});

//using routers
app.use('/events', eventRoute);

//Listeing to the port
app.listen(port, () => {
  console.log(`Server is running in the port ${port}`);
});
