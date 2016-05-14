var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      //call models.messages.get and 

      console.log('this is our messages GET');
     
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('this is our POST message: ', req.body);


      models.messages.post(req.body);
      res.end();
       
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('users get');
   
    },
    post: function (req, res) {
      // console.log(req.body.Username);
      //should we do a promise here ?????
      models.users.post(req.body);
      res.end();
    }
  }
};

