'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Expenses', [{
      name: 'Food',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Laundry',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Drinks',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Education',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
