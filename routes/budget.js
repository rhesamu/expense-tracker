const router = require('express').Router();
let models = require('../models')
let Expense = models.Expense
let UserExpense = models.UserExpense
let User = models.User



//edit budget

router.get('/', function (req, res) {
  User.findById(req.session.userId)
    .then(function (users) {
      // res.json(users)
      res.render('editbudget', {
        users: users
      })
    })
    .catch(function (err) {
      console.log(err.message)
    })
})

router.post('/', function (req, res) {
  let obj = {
    budget: req.body.budget
  };
  User.update(obj, {
      where: {
        id: req.session.userId
      }
    })
    .then(() => {
      res.redirect('/dashboard');
    })
    .catch(err => {
      console.log(err);
      res.send(err.message);
    })
});






module.exports = router;
