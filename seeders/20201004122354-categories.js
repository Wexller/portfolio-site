"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Categories", [
      {
        name: "JavaScript",
        title: "JavaScript",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rails",
        title: "Ruby/Rails",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bitrix",
        title: "Bitrix",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vue",
        title: "Vue",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
