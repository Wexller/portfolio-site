"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Categories", [
      {
        name: "all",
        title: "Все",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
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
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
