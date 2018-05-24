const router = require('express').Router();

router.get('/', (req, res) => {
  // res.send('test report page')
  res.render('report')
})

router.post('/', (req, res) => {
  res.send('test report page')
})

module.exports = router;