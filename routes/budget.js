const router = require('express').Router();
let models = require('../models')
let Expense = models.Expense
let UserExpense = models.UserExpense
let User = models.User



//edit budget

router.get('/:id', function (req, res) {
  User.findById(req.params.id)
    .then(function (users) {
      res.render('editbudget', {
        users: users
      })

    })
    .catch(function (err) {
      console.log(err.message)
    })

})



router.post('/:id', function (req, res) {
  let obj = {
    budget: req.body.budget
  };
  User.update(obj, {
      where: {
        id: req.params.id
      }
    })
    .then(() => {
      res.redirect('/');
    })
});






module.exports = router;
