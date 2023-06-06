const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL, {
    logging: console.log
  });
  

} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    DB_PASSWORD='Sn00pcat52$',
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;