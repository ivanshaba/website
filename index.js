const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const Transition = document.querySelector(".transition");
const Animae = document.querySelector(".animae");

openMenu.addEventListener("click", show)
closeMenu.addEventListener("click", close);
function show() {
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
    mainMenu.style.background = "#000";
    mainMenu.style.transition = " all 1s ease-in-out";
}

function close() {
    mainMenu.style.top = "-200%";
    mainMenu.style.background = "transparent";
    mainMenu.style.transition = "all 1s ease-out";
    mainMenu.style.zIndex = "0";
}



const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  'YOUR_CLIENT_ID',
  'YOUR_CLIENT_SECRET',
  'YOUR_REDIRECT_URL'
);

oauth2Client.setCredentials({
  access_token: 'YOUR_ACCESS_TOKEN',
  refresh_token: 'YOUR_REFRESH_TOKEN'
});

const gmail = google.gmail({version: 'v1', auth: oauth2Client});

function sendMail(formData) {
  const message = [
    'Content-Type: text/html; charset=utf-8\r\n',
    'To: YOUR_EMAIL_ADDRESS\r\n',
    'Subject: New form submission\r\n',
    '\r\n',
    `<p>Name: ${formData.name}</p><p>Email: ${formData.email}</p><p>Message: ${formData.message}</p>`
  ].join('');

  const encodedMessage = Buffer.from(message).toString('base64');
  const request = gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: encodedMessage
    }
  });

  request.execute((err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(res);
    }
  });
}






// const express = require("express");
// const bodyParser = require("body-parser");
// const nodemailer = require("nodemailer");

// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.post("/form", (req, res) => {
//   const { name, email, message } = req.body;
//   if (!name || !email || !message) {
//     return res.status(400).send("Bad Request");
//   }

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "your-gmail-email@gmail.com",
//       pass: "your-gmail-password",
//     },
//   });

//   const mailOptions = {
//     from: email,
//     to: "your-gmail-email@gmail.com",
//     subject: "Form Submission",
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).send(error);
//     }
//     return res.status(200).send("Form data submitted successfully");
//   });
// });

// app.listen(3000, () => {
//   console.log("Server started on http://localhost:3000");
// });