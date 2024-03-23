const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
// app.use(express.static(__dirname + "/frontend/dist/assets"));
app.use(express.static(path.join(__dirname, "/frontend/dist/assets")));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/frontend/dist/index.html");
});

app.post("/submitform", (req, res) => {
  console.log(req.body);
});

app.listen(3000, () => {
  console.log("Server is open at port 3000");
});
