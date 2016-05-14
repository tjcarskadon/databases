var models = require('../models');


module.exports = {
  messages: {
    get: function (req, res) {
      console.log('this is our controller Messages GET', req.query);
      models.messages.get(req.query, res);
      // res.send();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('this is our controller POST: ', req.body);
      models.messages.post(req.body, res);
       
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('Controller users get');
      models.users.get(req.body, res);
     
    },
    post: function (req, res) {
      console.log('Controller users post');
      models.users.post(req.body, res);
     
    }
  }
};

