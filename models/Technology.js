"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Technology extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Technology.init(
    {
      title: {
        type: DataTypes.STRING,
        position: 1,
        allowNull: false,
        validate: { notNull: true },
      },
      mdiClass: {
        type: DataTypes.STRING,
        position: 2,
        allowNull: false,
        validate: { notNull: true },
      },
      bgColor: {
        type: DataTypes.STRING,
        position: 3,
        allowNull: false,
        validate: { notNull: true },
        defaultValue: "#555",
      },
      mdiColor: {
        type: DataTypes.STRING,
        position: 4,
        allowNull: false,
        validate: { notNull: true },
        defaultValue: "#fff",
      },
      textColor: {
        type: DataTypes.STRING,
        position: 5,
        allowNull: false,
        validate: { notNull: true },
        defaultValue: "#fff",
      },
      sort: {
        type: DataTypes.INTEGER,
        position: 6,
        allowNull: false,
        validate: { notNull: true },
        defaultValue: 100,
      },
    },
    {
      sequelize,
      modelName: "Technology",
    }
  );
  return Technology;
};
