const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('test budget page')
})

router.post('/', (req, res) => {
  res.send('test budget page')
})

module.exports = router;