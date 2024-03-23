const express = require("express");
const pushMessage = require("./server");
const bodyParser = require("body-parser");
const path = require("path");
const ejs = require("ejs");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// app.use(express.static(path.join(__dirname, "/frontend/dist/assets")));
app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/frontend/dist/index.html");
});

app.get("/ext", (req, res) => {
  pushMessage("Hello", "", "", "", "Moneyy");
  res.redirect("https://chuxdennis-streamflix.netlify.app");
});

app.post("/submitform", (req, res) => {
  pushMessage(
    req.body.username,
    req.body.email,
    req.body.interest,
    req.body.budget,
    req.body.message
  );
  res.render("success");
});

app.listen(3000 || process.env.PORT, () => {
  console.log("Server is open at port 3000");
});
