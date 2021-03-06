const router = require('express').Router();
const models = require('../models');
const User = models.User;
let bcrypt = require('bcrypt');

router.get('/', (req, res) => {
  res.render('index');
})

router.get('/login', (req, res) => {
  // res.send('test login')
  // res.json(req.session)
  res.render('login', { msg: '' })
})

router.post('/login', (req, res) => {
  let field = req.body;
  let username = field.username;
  let password = field.password;

  User.findOne({
    where: {
      username: username
    }
  })
  .then((userData) => {
    if (userData) {
      console.log(userData);

      let passChecker = bcrypt.compareSync(password, userData.password)
      if (passChecker === true) {
        req.session.username = username
        req.session.userId = userData.id
        res.redirect('dashboard')
        // res.send(userData);
      } else {
        res.render('login', { msg: "Wrong password" })
      }
    } else {
      res.render('login', { msg: "Wrong username / password" })
    }
  })
  .catch((err) => {
    console.log(err)
    res.render('login', { msg: err.message })
  })
})

router.get('/register', (req, res) => {
  // res.send('test register')
  res.render('register', { msg: '' });
})

router.post('/register', (req, res) => {
  let field = req.body;
  let username = field.username;
  let password = field.password;

  User.create({
    username: username,
    password: password,
    budget: 0
  })
  .then((userData) => {
    console.log(userData);
    res.render('login', { msg: 'Registered' })
    //res.send(userData);
  })
  .catch(err => {
    console.log('--->', err);
    res.render('register', { msg: err.message })
    // res.send(err);
  });
})

module.exports = router;