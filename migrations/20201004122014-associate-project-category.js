"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("ProjectsCategories", {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      projectId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("ProjectsCategories");
  },
};
