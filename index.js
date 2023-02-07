// const Booking = document.getElementById('.book');
// const Form = document.querySelector('.form__container');
// const Close = document.querySelector('.close-btn');



// Booking.addEventListener('click', function(){
//     Form.classList.add('form__container__active');
// });

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
    // mainMenu.style.display = "none";
}


// var mysql = require("mysql2");
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "your_username",
//   password: "your_password",
//   database: "music_library"
// });

const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/form", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).send("Bad Request");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-gmail-email@gmail.com",
      pass: "your-gmail-password",
    },
  });

  const mailOptions = {
    from: email,
    to: "your-gmail-email@gmail.com",
    subject: "Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error);
    }
    return res.status(200).send("Form data submitted successfully");
  });
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});