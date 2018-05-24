const router = require('express').Router();
const models = require('../models');
const User = models.User;
const UserExpense = models.UserExpense;
const Expense = models.Expense;

router.get('/testing', (req, res) => {
  UserExpenses
    .findAll({
      where: { createdAt: '' }
    });
})

router.get('/', (req, res) => {
  // User.findOne({
  //   where: { id: 2 },
  //   include: [{
  //     model: Expense,
  //     as: 'expenses',
  //     attributes: ['id']
  //   }]
    
  // })
  // .then(userData => {
  //   console.log(userData)
  //   // res.json(users)
  //   res.render('dashboard', {
  //     user: userData
  //   });
  // }) 
  // .catch(err => {
  //   console.log(err);
  //   res.send(err.message)
  // })

  UserExpense.findAll({
    attributes: [ 
      'id', 
      'userId', 
      'expenseId', 
      'amount', 
      'createdAt', 
      'updatedAt' ],
    order: [['createdAt', 'DESC']],
    where: { userId: 2 }, //req.session.userId
    include: [{
      model: Expense
    }, 
    // {
    //   model: User,
    // }
    ]
  })
  .then(function(result) {
    // res.json(result)
    res.render('dashboard', { userExpense: result })
  })
  .catch(function(err) {
    console.log(err),
    res.send(err.message)
  })

})

module.exports = router;