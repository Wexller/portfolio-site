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
      name: DataTypes.STRING,
      preview_image: DataTypes.STRING,
      images: DataTypes.ARRAY(DataTypes.STRING),
      title: DataTypes.STRING,
      subtitle: DataTypes.STRING,
      text: DataTypes.TEXT,
      link: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Project",
    }
  );

  return Project;
};
