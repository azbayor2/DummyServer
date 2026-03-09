"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("data", {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },

      comment: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("data");
  },
};
