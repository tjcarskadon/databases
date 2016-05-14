var db = require('../db');

module.exports = {
  messages: {
    get: function (request, res) {
      console.log(request.roomname);
      db.dbConnection.query('SELECT text, name FROM Messages, Rooms WHERE id_Rooms in (SELECT id FROM Rooms WHERE Name="' + request.roomname + '")', (err, results, fields) =>{
        if (err) {
          console.log('GET Model ERROR: ', err); 
        } else {
          console.log('GET Model RESULTS: ', JSON.stringify(results)); 
          res.send(JSON.stringify(results));
        }
      });
    }, // a function which produces all the messages
    post: function (message, res) {
      console.log('model messages post');
      db.dbConnection.query('INSERT INTO messages (id_User, id_Rooms, text) VALUE ((SELECT id FROM User WHERE Username="' + message.Username + '"),(SELECT id FROM Rooms WHERE Name="' + message.roomname + '"),"' + message.text + '")', (err, results) => {
        if (err) {
          console.log('Message ERROR: ', err); 
        } else { 
          console.log('MESSAGE RESULTS: ', results); 
          res.send(results);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (request, res) {
      console.log('model users get');
       res.send();
    },
    post: function (username, res) {
      console.log('model users post');
      //refactor to consider duplicate users entries.
      db.dbConnection.query('INSERT INTO User SET ?', username, (err, results) => {
        if (err) { 
          console.log('ERROR:', err); 
        } else { 
          console.log('USERS POST RESULTS', results); 
          res.send(results);
        }
      });
    }
  }
};


// INSERT INTO messages (id_User, id_Rooms, text) VALUE ((SELECT id FROM User WHERE Username='Valjean'),(SELECT id FROM Rooms WHERE Name='Lobby'),'message is here');
// 'INSERT INTO messages (id_User, id_Rooms, text) VALUE ((SELECT id FROM User WHERE Username=' + message.Username + ',(SELECT id FROM Rooms WHERE Name=' + message.roomname + '),' + message.text + ')'
