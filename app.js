const express = require('express');
const app = express();
const bodyParser = require('body-parser')
let session = require('express-session')
const indexRoute = require('./routes/index');
const dashboardRoute = require('./routes/dashboard')
const expense = require('./routes/expense')
const budget = require('./routes/budget')

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

// app.get('/', (req, res) => {
//   res.send('connected');
// })
app.use('/', indexRoute);
app.use('/dashboard', dashboardRoute);
app.use('/expense', expense)
app.use('/budget', budget)


app.listen(3000, () => console.log('expense-tracker listening on port 3000'));
