const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const methodOverride = require('method-override');
const LocalStrategy = require('passport-local');
const User = require('./models/User');
mongoose.promise = Promise;

const auth = require('./routes/auth');
const rental = require('./routes/rental');
const landing = require('./routes/landing');
const owner = require('./routes/owner');
const tenant = require('./routes/tenant');



// app.get('/', (req, res) => {
//   res.render('landing')
// });

// CONFIG APP
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + "/public"));
app.use(require("express-session")({
  secret: "Rusty is the cutest dog i know",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
// SETTING UP THE LOCALS
app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});
app.use(methodOverride('_method'));

// PASSPORT CONFIG FOR THE APP
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// CONFIG DATABASE
const db = require('./config/keys').mongoURI;

mongoose.connect(db).then(() => {
  console.log('Connected to mongodb')
}).catch(err => console.log(err));


app.use('/auth', auth);
app.use('/rental', rental);
app.use('/landing', landing);
app.use('/owner', owner);
app.use('/tenant', tenant);



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('server is running');
})