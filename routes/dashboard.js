const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('test dashboard')
})

module.exports = router;