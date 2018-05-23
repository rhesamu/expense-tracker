const router = require('express').Router();

router.get('/add', (req,res) => {
  res.send('test expense add');
})

router.post('/add', (req,res) => {
  res.send('test expense add');
})

router.get('/:id/edit', (req,res) => {
  res.send('test expense edit');
})

router.post('/:id/edit', (req,res) => {
  res.send('test expense edit');
})

router.get('/:id/delete', (req,res) => {
  res.send('test expense add');
})

router.get('/create-new-name', (req,res) => {
  res.send('test page')
})

router.post('/create-new-name', (req,res) => {
  res.send('test page')
})

module.exports = router;