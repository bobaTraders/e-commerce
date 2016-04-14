var User = require('../models/userModel.js');
var jwt = require('jwt-simple');

module.exports = {
  signin: function (req, res, next) {
    var user = req.body;
    User.users.get(user, function(err, results){
      if (!err) {
        // var token = jwt.encode(user, 'secret');
        // res.json({token: token});
        // modify sign-in to send entire object
        res.json(results);
      }
      else {
        res.json(err);
      }
    });
  },

  signup: function (req, res, next) {
    var user = req.body;
    console.log('User',user);
    User.users.post(user, function(err, results){
      if (!err) {
        res.json(201);
      }
      else {
        res.json(err);
      }
    });
  }
};