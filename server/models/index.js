var db = require('../db');

module.exports = {
  messages: {
    get: function (request, res) {
      console.log("roomname????????????????????????", request);
      db.dbConnection.query('SELECT text, name, Username FROM Messages, Rooms, User WHERE id_Rooms in (SELECT id FROM Rooms WHERE Name="")', (err, results, fields) =>{
        if (err) {
          console.log('GET Model ERROR: ', err); 
        } else {
          // console.log('GET Model RESULTS: ', JSON.stringify(results)); 
          res.send({results: results});
        }
      });
    }, // a function which produces all the messages
    post: function (message, res) {
      console.log(message.roomname, '&*&*&*&*&*&*&**&**&');
      db.dbConnection.query('INSERT INTO messages (id_User, id_Rooms, text) VALUE ((SELECT id FROM User WHERE Username="' + message.username + '"),(SELECT id FROM Rooms WHERE Name="' + message.roomname + '"),"' + message.text + '")', (err, results) => {
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
          console.log('USER POST ERROR:', err); 
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
