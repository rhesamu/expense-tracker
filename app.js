const express = require('express');
const app = express();
const bodyParser = require('body-parser')
let session = require('express-session')
const indexRoute = require('./routes/index');
const dashboardRoute = require('./routes/dashboard')
const expenseRoute = require('./routes/expense')
const reportRoute = require('./routes/report')
const budgetRoute = require('./routes/budget')
const port = process.env.PORT || 3000

app.set('view engine', 'ejs');
app.set('trust proxy', 1);

app.use(session({
  secret: 'keyboardcat',
  resave: false,
  saveUninitialized: true
}))

app.use(bodyParser.urlencoded({
  extended: false
}));

// app.get('/', (req, res, next) => {
//   let sessData = req.session;
//   sessData.someAttribute = "foo";
//   res.send('Returned some text')
// })

// app.get('/bar', function(req, res, next) {
//   var someAttribute = req.session.someAttribute;
//   res.send(`This will print the attribute I set earlier: ${someAttribute}`);
// });

// app.get('/', (req, res) => {
//   res.send('connected');
// })
app.use('/', indexRoute);
app.use('/dashboard', dashboardRoute);
app.use('/expense', expenseRoute)
app.use('/report', reportRoute)
app.use('/budget', budgetRoute)


app.listen(port, () => {
  console.log(`expense-tracker listening on port ${port}`)
})
