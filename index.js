// const Booking = document.getElementById('.book');
// const Form = document.querySelector('.form__container');
// const Close = document.querySelector('.close-btn');



// Booking.addEventListener('click', function(){
//     Form.classList.add('form__container__active');
// });



// var mysql = require("mysql2");
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "your_username",
//   password: "your_password",
//   database: "music_library"
// });

// connection.connect();

// var playlist = [];

// function addSong(title, artist, fileLocation) {
//   var song = {
//     title: title,
//     artist: artist,
//     fileLocation: fileLocation
//   };

//   connection.query("INSERT INTO songs (title, artist, file_location) VALUES (?, ?, ?)", [title, artist, fileLocation], function(error, results, fields) {
//     if (error) throw error;
//     console.log("Song added to the database");
//   });

//   playlist.push(song);
// }

// connection.query("SELECT * FROM songs", function(error, results, fields) {
//   if (error) throw error;
//   playlist = results;
//   console.log("Playlist loaded from the database");
// });