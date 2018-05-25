const router = require('express').Router();
let models = require('../models')
let Expense = models.Expense
let UserExpense = models.UserExpense
// let User = models.User;

//add expense -> NEW NOTE
router.get('/add', (req, res) => {
  Expense.findAll()
    .then(function (expense) {
      res.render('addexpense', {
        expense: expense
      })
    })
    .catch(function (err) {
      console.log(err.message)
    })
})

// POST expense
router.post('/add', (req, res) => {
  let userId = req.session.userId;
  let expenseId = req.body.expenseId;
  let amount = req.body.amount;

  UserExpense.create({
      userId,
      expenseId,
      amount
    })
    .then(function () {
      res.redirect('/dashboard')
    })
})

router.get('/:id/edit', (req, res) => {
  let _id = req.params.id;
  //not yet
  UserExpense.findOne({
    attributes: [ 
      'id', 
      'userId', 
      'expenseId', 
      'amount', 
      'createdAt', 
      'updatedAt' ],
    where: { id: _id }
  })
  .then(function (_usersExpense) {
    // res.json(usersExpense);
    Expense.findAll()
      .then(function (expense) {
        // res.json(expense)
        res.render('editexpense', {
          usersExpense: _usersExpense,
          expense: expense
        })
      })
      .catch(function (err) {
        console.log(err.message)
      })
  })
})

router.post('/:id/edit', (req, res) => {
  let expenseId = req.body.expenseId;
  let amount = req.body.amount;

  let obj = {
    expenseId,
    amount
  };
  UserExpense.update(obj, {
      where: {
        id: req.params.id
      }
    })
    .then(() => {
      res.redirect('/dashboard');
    })
    .catch(err => {
      res.send(err.message);
    })

})

//DELETE
router.get('/:id/delete', (req, res) => {
  UserExpense.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function () {
      res.redirect('/dashboard')
    })

})


// new EXpense NAME
router.get('/new-category', (req, res) => {
  res.render('newcategory')
})

router.post('/new-category', (req, res) => {
  let name = req.body.name
  Expense.create({
      name
    })
    .then(function () {
      res.redirect('/dashboard')
    })
    .catch(function (err) {
      console.log(err);
    })

})









module.exports = router;
