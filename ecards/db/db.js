var Sequelize = require('sequelize');

var sequelize = new Sequelize('ecards', 'ecards', 'ecards', {
  host: 'instance5843.db.xeround.com',
  port: 4404,
  dialect: 'mysql',
  logging: true
});

var Page = sequelize.define('Page',{
  title: Sequelize.STRING,
  text: Sequelize.STRING
});

var ECard = sequelize.define('ECard', {
  title: Sequelize.STRING,
  link: Sequelize.STRING,
  path: Sequelize.STRING

});

var SendedEcard = sequelize.define('SendedEcard', {
  title: Sequelize.STRING,
  wishes: Sequelize.TEXT
  
});

SendedEcard.belongsTo(ECard);

module.exports = {sequelize: sequelize,
    ecard: ECard,
    page: Page,
    sended: SendedEcard
};