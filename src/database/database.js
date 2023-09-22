const dbConfig = require("./dbConfig.js");
const { Sequelize, DataTypes } = require("sequelize");

function getSequelize() {
  sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
  });
  sequelize.sync({ force: false }).then(() => {
    console.log("Database sync done!");
  });
  return sequelize;
}

module.exports = { getSequelize };
