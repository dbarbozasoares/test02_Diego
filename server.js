//include the lib
const express = require("express");

const path = require("path");

// instantiate the express lib
const app = express();

// server PORT
const HTTP_PORT = 3000;

app.use('/public', express.static(path.join(__dirname, '/public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// GET Route Index
app.get('/',(req,res) => {
    console.log("GET Route INDEX");
    var htmlFile = path.join(__dirname, "/views/index.html")
    res.sendFile(htmlFile);
});

app.get('/cars',(req,res) => {
    console.log("GET Route for CARS");

    var htmlFile = path.join(__dirname, "/views/cars.html")
    res.sendFile(htmlFile);
});

// Listen for connections
app.listen(HTTP_PORT, () =>
    console.log("Server listening on: http://localhost:" + HTTP_PORT));