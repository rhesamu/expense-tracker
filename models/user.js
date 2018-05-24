'use strict';
let bcrypt = require('bcrypt');
let saltRounds = 7;


module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    budget: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Expense, {
      as: 'expenses',
      through: 'UserExpense',
      foreignKey: 'userId',
      otherKey: 'expenseId'
    })
  };

  User.beforeCreate((user, options) => {
    let passBefore = user.password;
    let hash = bcrypt.hashSync(passBefore, saltRounds);
    user.password = hash;
  })
  return User;
};