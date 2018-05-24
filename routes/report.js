const router = require('express').Router();
const models = require('../models');
const UserExpense = models.UserExpense;
const Expense = models.Expense;

router.get('/', (req, res) => {
  // res.send('test report page')
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
    }]
  })
  .then(result => {
    // res.json(result)
    let qs = req.query
    console.log(qs)
    res.render('report', { userExpense: result })
  })
  .catch(err => {
    console.log(err);
    res.send(err.message)
  })
})

router.post('/', (req, res) => {
  let month = req.body.month; //01-12
  // res.send(month)
  UserExpense.findAll({
    attributes: [ 
      'id', 
      'userId', 
      'expenseId', 
      'amount', 
      'createdAt', 
      'updatedAt' ],
    order: [['createdAt', 'DESC']],
    where: { 
      userId: 2,
      createdAt: {
        $between: [
          `2018-${month}-01T05:16:21.078Z`,
          `2018-${month}-30T05:16:21.078Z`
        ]
      }
    },
    include: [{ model: Expense }]
  })
  .then(result => {
    res.render('report', { userExpense: result })
  })
  .catch(err => {
    console.log(err);
    res.send(err.message)
  })
})

module.exports = router;