var seq  = require('./db.js');

seq.sequelize.sync();
seq.ecard.findAll().success(function(ecards){

console.log(ecards);

});
