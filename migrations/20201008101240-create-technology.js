"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Technologies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      mdiClass: {
        type: Sequelize.STRING,
      },
      bgColor: {
        type: Sequelize.STRING,
      },
      mdiColor: {
        type: Sequelize.STRING,
      },
      textColor: {
        type: Sequelize.STRING,
      },
      sort: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Technologies");
  },
};
