const router = require('express').Router();
let models = require('../models')
let Expense = models.Expense
let UserExpense = models.UserExpense

//add expense
router.get('/add', (req, res) => {
  Expense.findAll()
    .then(function (expense) {
      res.render('addexpense', {
        expense: expense
      });

    })


})

// POST expense
router.post('/add', (req, res) => {


  let userId = 2;
  let expenseId = req.body.expenseId;
  let amount = req.body.amount;

  UserExpense.create({
      userId,
      expenseId,
      amount
    })
    .then(function () {
      res.redirect('/')
    })
})





router.get('/:id/edit', (req, res) => {
  res.send('test expense edit');
})

router.post('/:id/edit', (req, res) => {
  res.send('test expense edit');
})

router.get('/:id/delete', (req, res) => {
  res.send('test expense add');
})


// new EXpense NAME
router.get('/new-name', (req, res) => {
  res.render('newexpense')
})

router.post('/new-name', (req, res) => {
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
