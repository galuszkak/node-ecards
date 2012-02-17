
/**
 * Module dependencies.
 */

var express = require('express'),
  routes = require('./routes'),
  everyauth = require('everyauth'),
  users = {};
  
var app = module.exports = express.createServer();

// Configuration
everyauth.facebook
  .appId('204173986323498')
  .appSecret('f510bca78121d9a88da19e46ff106da4')
  .handleAuthCallbackError( function (req, res) {
    res.render('facebook_error');
  })
  .findOrCreateUser( function (session, accessToken, accessTokExtra, fbUserMetadata) {
    return users[fbUserMetadata.id] || (users[fbUserMetadata.id] = fbUserMetadata);
  })
  .scope('friends_photos')
  .entryPath('/')
  .redirectPath('/home/');


app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser({uploadDir: __dirname + "/public/uploads" }));
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: '34dslw2342' }));
  app.use(everyauth.middleware());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/home/', routes.index);
app.get('/ecards/', routes.ecards);
app.get('/ecards/:id', routes.single_ecard);
app.get('/about/', routes.about);
app.get('/upload_ecard/', routes.upload_ecard);
app.post('/upload/', routes.upload);
app.listen(process.env.C9_PORT);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
