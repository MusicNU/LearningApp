const express = require("express");
const bodyParser = require("body-parser");
const request = require('request');

const app = express();

app.use(bodyParser.json());

//specify the port for your server
app.listen(3000, () => {
  console.log(`Server is running on port 3000.`);
});

//get something from the server
const infoFromServer = (req, res) => {
    res.send("Here's some info from the server!");
  };
  
app.get("/", infoFromServer); 

app.get('/tempo', function(req, res) {
    request('http://127.0.0.1:6030/tempo', function (error, response, body) {
        console.error('error:', error); // Print the error
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the data received
        res.send(body); //Display the response on the website
      });      
});

app.get('/rhythm', function(req, res) {
  request('http://127.0.0.1:6030/rhythm', function (error, response, body) {
      console.error('error:', error); // Print the error
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the data received
      res.send(body); //Display the response on the website
    });      
});

app.get('/melody', function(req, res) {
  request('http://127.0.0.1:6030/melody', function (error, response, body) {
      console.error('error:', error); // Print the error
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the data received
      res.send(body); //Display the response on the website
    });      
});

//send something to the server- let's say the link of a youtube video
app.post("/link", (req, res) => {
    const b  = req.body.link;
    res.send(`The youtube link from client side is: ${b}`);
  });

// Handling GET requests to /link
app.get("/link", (req, res) => {
  res.send("Hello, this is the response!"); // Sending a simple message as the response
}); 
