'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserExpense = sequelize.define('UserExpense', {
    userId: DataTypes.INTEGER,
    expenseId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {});
  UserExpense.associate = function(models) {
    // associations can be defined here
    UserExpense.belongsTo(models.User, {
      foreignKey: 'userId'
    });

    UserExpense.belongsTo(models.Expense, {
      foreignKey: 'expenseId'
    })
  };
  return UserExpense;
};