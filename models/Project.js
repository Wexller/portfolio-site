"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const { Category } = models;

      this.belongsToMany(Category, {
        through: "ProjectsCategories",
        foreignKey: "projectId",
        otherKey: "categoryId",
      });
    }
  }

  Project.init(
    {
      sort: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notNull: true },
        defaultValue: 100,
      },
      previewImage: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notNull: true },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notNull: true },
      },
      subtitle: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notNull: true },
      },
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: { notNull: true },
      },
      link: DataTypes.STRING,
      images: DataTypes.ARRAY(DataTypes.STRING),
    },
    {
      sequelize,
      modelName: "Project",
    }
  );

  return Project;
};
