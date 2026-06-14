'use strict';

/** @type {import('sequelize-cli').Seeder} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('producer', null, {});

    await queryInterface.bulkInsert('producer', [
      {
        first_name: 'Steven',
        last_name: 'Spielberg',
        nick_name: 'The King of Entertainment',
        age: 79,
        phone_number: '+1-555-0192',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Christopher',
        last_name: 'Nolan',
        nick_name: 'Chris',
        age: 55,
        phone_number: '+1-555-0143',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Quentin',
        last_name: 'Tarantino',
        nick_name: 'QT',
        age: 63,
        phone_number: '+1-555-0177',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('producer', null, {});
  }
};