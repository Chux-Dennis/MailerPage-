const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const pushmessage = function (username, email, interest, budget, message) {
  const transporter = nodemailer.createTransport({
    service: "gmail", // or 'hotmail', 'yahoo', etc.
    auth: {
      user: process.env.AUTH_USER, //receiver's address
      pass: process.env.AUTH_PASS, // receiver pass
    },
  });

  const mailOptions = {
    from: "you <your_email@example.com>",
    to: process.env.REC_ADDRESS, //receiver address
    subject: `Message from ${username} from your Contact Page`,
    text: `Name: ${username}\nEmail: ${email}\nInterest: ${interest}\nBudget: ${budget}\nComment: ${message}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = pushmessage;
