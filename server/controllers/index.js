var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      //call models.messages.get and 


     
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('this is our message: ', message);
      models.messages.post(req.body);
       
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('users get');
   
    },
    post: function (req, res) {
      // console.log(req.body.username);
      //should we do a promise here ?????
      models.users.post(req.body);
    }
  }
};

