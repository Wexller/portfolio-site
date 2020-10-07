"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Feedback.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notNull: true },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notNull: true, isEmail: true },
      },
      message: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Feedback",
    }
  );
  return Feedback;
};
