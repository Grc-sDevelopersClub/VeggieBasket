require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const home = require("./routes/home");
const item = require("./routes/Items");
const user = require("./routes/User");
const config = require('./config');
const morgan = require("morgan");


const MONGODB_URI = config.mongodburi;
const PORT = process.env.PORT || 5000;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (error) => {
    console.log(error);
});

const app = express();

app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


app.use("/", home);
app.use("/items", item);
app.use("/user", user);

app.listen(PORT, (req, res) => {
  console.log("Server Started at port 3000");
});
