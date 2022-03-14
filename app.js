const express = require("express"),
    compression = require("compression"),
    bodyParser = require("body-parser"),
    dotenv = require('dotenv'),
    cors = require('cors'),
    morgan = require('morgan');


// Initializing the server(app)
const app = express();

dotenv.config();

// Initializing the middlewares
app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(express.json({
    limit: "300kb"
}));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(morgan('dev'));

// serve static files
app.use(express.static(__dirname + '/static'));

// Routes
app.use("/", require("./routes"));

module.exports = app;