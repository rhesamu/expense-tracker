'use strict';
module.exports = (sequelize, DataTypes) => {
  var Expense = sequelize.define('Expense', {
    name: DataTypes.STRING
  }, {});
  Expense.associate = function(models) {
    // associations can be defined here
    Expense.belongsToMany(models.User, {
      // as: 'users',
      through: 'UserExpense',
      foreignKey: 'expenseId',
      otherKey: 'userId'
    })

    Expense.hasMany(models.UserExpense, {
      foreignKey: 'expenseId'
    })
    
  };
  return Expense;
};