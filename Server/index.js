require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Home = require("./routes/home");
const Item = require("./routes/Items");
const User = require("./routes/User");
const Cart = require("./routes/cart");
const Wishlist = require("./routes/wishlist");
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


app.use("/", Home);
app.use("/user", User);
app.use('/wishlist',Wishlist);
app.use('/items',Item);
app.use('/cart',Cart);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at port ${PORT}`);
});
