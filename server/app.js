const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});

//get something from the server
const infoFromServer = (req, res) => {
    res.send("Here's some info from the server!");
  };
  
app.get("/", infoFromServer);

//send something to the server- let's say the link of a youtube video
app.post("/link", (req, res) => {
    const b  = req.body;
    res.send(`The youtube link from client side is: ${a}`);
  });
