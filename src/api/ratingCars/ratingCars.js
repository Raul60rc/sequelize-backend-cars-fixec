const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../database/database.js").getSequelize();

class CarRating extends Model {}

CarRating.init(
  {
    rating_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    car_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1, // Minimum rating value (1 star)
        max: 5, // Maximum rating value (5 stars)
      },
    },
  },
  {
    sequelize,
    modelName: "CarRating",
    tableName: "CarRating",
  }
);

module.exports = { CarRating };
