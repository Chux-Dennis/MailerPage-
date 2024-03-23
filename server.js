const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const nodemailer = require("nodemailer");

const app = express();
app.set("view engine", "ejs");

app.get("/jump", (req, res) => {
  // Replace with your email service credentials
  const transporter = nodemailer.createTransport({
    service: "gmail", // or 'hotmail', 'yahoo', etc.
    auth: {
      user: "friendlydennis63@gmail.com",
      pass: "hjwupktwyponxkya",
    },
  });

  const mailOptions = {
    from: "you <your_email@example.com>",
    to: "chuksabosi63@gmail.com",
    subject: "Sending an email with Nodemailer",
    text: "My name is Chukwuemeka Abosi Dennis.",
    // text: `Name: ${firstName}\nEmail: ${email}\nComment: ${message}`,

    // html: "<sm>This is the HTML body of the email.</sm>", // Optional for HTML content
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

app.get("/", (req, res) => {
  res.sendFile("");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
