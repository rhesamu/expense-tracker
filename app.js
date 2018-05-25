const express = require('express');
const app = express();
const bodyParser = require('body-parser')
let session = require('express-session')
const indexRoute = require('./routes/index');
const dashboardRoute = require('./routes/dashboard')
const expenseRoute = require('./routes/expense')
const reportRoute = require('./routes/report')
// const budgetRoute = require('./routes/budget')
const port = process.env.PORT || 3000

app.set('view engine', 'ejs');
app.set('trust proxy', 1);

app.locals.toRp = require('./helprupiah.js')
app.locals.Tanggal = require('./datelocal.js')

app.use(session({
  secret: 'keyboardcat',
  resave: false,
  saveUninitialized: true
}))

app.use(bodyParser.urlencoded({
  extended: false
}));

// app.get('/', (req, res) => {
//   res.send('connected');
// })
app.use('/', indexRoute);
app.use('/dashboard', dashboardRoute);
app.use('/expense', expenseRoute)
app.use('/report', reportRoute)
// app.use('/budget', budgetRoute)


app.listen(port, () => {
  console.log(`expense-tracker listening on port ${port}`)
})
