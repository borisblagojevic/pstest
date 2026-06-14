'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('producer', 'age', {
      type: Sequelize.INTEGER,
      allowNull: true
    });

    await queryInterface.addColumn('producer', 'phone_number', {
      type: Sequelize.STRING(20),
      allowNull: true
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('producer', 'age');
    await queryInterface.removeColumn('producer', 'phone_number');
  }
};