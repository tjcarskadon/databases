var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (message) {
      console.log('this is our message: ', message);
      db.dbConnection.query('INSERT INTO Messages SET ?', message, (err, results) => {
        if (err) {
          console.log('Message ERROR: ', err); 
        } else { 
          console.log('MESSAGE RESULTS: ', results); 
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username) {
      db.dbConnection.query('INSERT INTO User SET ?', username, (err, reults) => {
        if (err) { 
          console.log('ERROR:', err); 
        } else { 
          console.log('USERS POST RESULTS', reults); 
        }

      });
    }
  }
};

