'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('actor', 'nick_name', {
      type: Sequelize.STRING(100),
      allowNull: true,
    } )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('actor', 'nick_name');
    }
};
