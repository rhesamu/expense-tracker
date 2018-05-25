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
    let date1 = new Date('2018-01-24T05:16:21.078Z');
    let date2 = new Date('2018-01-15T05:16:21.078Z')
    return queryInterface.bulkInsert('UserExpenses', [{
      userId: 2,
      expenseId: 1,
      amount: 150000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 2,
      expenseId: 2,
      amount: 100000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 2,
      expenseId: 3,
      amount: 5000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 2,
      expenseId: 1,
      amount: 70000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 2,
      expenseId: 2,
      amount: 20000,
      createdAt: date1,
      updatedAt: date1
    }, {
      userId: 2,
      expenseId: 3,
      amount: 35000,
      createdAt: date2,
      updatedAt: date2
    }, {
      userId: 1,
      expenseId: 1,
      amount: 55000,
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
    return queryInterface.bulkDelete('UserExpenses', null, {})
  }
};
