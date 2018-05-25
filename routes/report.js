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
    where: { userId: req.session.userId }, //req.session.userId
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
  let startDate = `2018-${month}-01T00:00:00.078Z`;
  if (month === '02') {
    var endDay = '28';
  } else if (month === '04' || month === '06' || month === '09' || month === '11') {
    var endDay = '30'
  } else {
    var endDay = '31'
  }
  let endDate = `2018-${month}-${endDay}T23:59:59.078Z`
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
      userId: req.session.userId,
      createdAt: {
        $between: [ startDate, endDate ]
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