
/*
 * GET home page.
 */
var seq = require('../db/db.js');

var get_facebook_data = function(req){
  var userName = req.session.auth.facebook.user.name;
  var age = req.session.auth.facebook.user.age;
  console.log(req.session.auth.facebook);
  console.log(req.session.auth.facebook.user);
return {userName: userName, age: age};
};

exports.index = function(req, res){
  var context = get_facebook_data(req);
  context.title = "Home";
  res.render('index', context);
};

exports.about = function(req, res){
  var context = get_facebook_data(req);
  context.title = "About";
  res.render('about', { title: 'About' });
};

exports.single_ecard = function(req, res){
  var context = get_facebook_data(req);
  context.title = "Ecard";
  res.render('single_ecard', context);
};

exports.ecards = function(req, res){
  var context = get_facebook_data(req);
  context.title = "Choose Ecard";
  res.render('ecards', context);  
};

exports.upload_ecard = function(req,res){
  var context = get_facebook_data(req);
  context.title = "Upload ECard";
  
  res.render('upload_form', context);
};
exports.upload = function(req,res){
  var context = {};
  context.title = "Upload Successful";
  res.render('success_add', context);
};