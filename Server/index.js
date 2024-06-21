require('dotenv').config();
const express = require("express");
const cors = require("cors");
const path = require("path"); // Add this line to import the path module
const port = process.env.PORT;


const connectDB = require("./dbConnect");
connectDB(process.env.MONGODB_URL);
const eventRoute = require("./routes/eventRoute")
const app = express();

app.use(cors());
// Serve static files from the "uploads" directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//using routers
app.use('/events', eventRoute);

app.post('/upload', (req, res) => {
  res.send('File uploaded');
});

//Listeing to the port
app.listen(port, () => {
  console.log(`Server is running in the port ${port}`);
});
