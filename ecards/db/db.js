var Sequelize = require('sequelize');

var sequelize = new Sequelize('ecard', 'ecard', 'ecards', {
  host: 'ec2-46-137-175-244.eu-west-1.compute.amazonaws.com',
  port: 3450,
  dialect: 'mysql',
  logging: true
});

var Page = sequelize.define('Page',{
  title: Sequelize.STRING,
  text: Sequelize.STRING
});

var ECard = sequelize.define('ECard', {
  title: Sequelize.STRING,
  link: Sequelize.STRING

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