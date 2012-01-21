
/*
 * GET home page.
 */
var seq = require('../db/db.js');

exports.index = function(req, res){
  var user = req.session.auth.facebook.user.first_name;
  res.render('index', { title: 'Home ECards', user: user  });
};

exports.about = function(req, res){
    
  res.render('about', { title: 'About' });
};

exports.single_ecard = function(req, res){
  
  var user = req.session.auth.facebook.user.first_name;
  
  res.render('single_ecard', { title: 'Send ECard', 'user': req.params.id });
};

exports.ecards = function(req, res){
  res.render('ecards', { title: 'ECards' });  
};
