const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('test report page')
})

router.post('/', (req, res) => {
  res.send('test report page')
})

module.exports = router;