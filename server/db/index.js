var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

exports.dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

// exports.dbConnection.connect(err => {
//   if (!err) {
//     console.log('happy days!!!');
//   } else {
//     console.log('crap!!!');
//   }
// });

// exports.dbConnection.end( err => {
//   if (!err) {
//     console.log('closed come back later');
//   } else {
//     console.log('you cannot make me leave');
//   }

// });