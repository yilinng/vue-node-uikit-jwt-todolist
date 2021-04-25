const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const User = require('./models/User');

const dotenv = require("dotenv").config();
// express app
const app = express();
// HTTP request logger middleware for node.js
app.use(morgan('dev'));

//connect to db
mongoose.connect(process.env.DB_CONNECT
	, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true},
	() => console.log("connected to db"));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//import routes
const authRoutes = require("./routes/auth");

//routes
app.post('/signup', (req, res) => {
  const newUser = new User({
    email: req.body.email,
    name: req.body.name,
    password: bcrypt.hashSync(req.body.password, 10)
  })
  newUser.save(err => {
    if (err) {
      return res.status(400).json({
        title: 'error',
        error: 'email in use'
      })
    }
    return res.status(200).json({
      title: 'signup success'
    })
  })
})
app.post('/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.status(500).json({
      title: 'server error',
      error: err
    })
    if (!user) {
      return res.status(401).json({
        title: 'user not found',
        error: 'invalid credentials'
      })
    }
    //incorrect password
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).json({
        tite: 'login failed',
        error: 'invalid credentials'
      })
    }
    //IF ALL IS GOOD create a token and send to frontend
    let token = jwt.sign({ userId: user._id}, 'secretkey');
    return res.status(200).json({
      title: 'login sucess',
      token: token
    })
  })
})

//grabbing user info
app.get('/user', (req, res) => {
  let token = req.headers.token; //token
  jwt.verify(token, 'secretkey', (err, decoded) => {
    if (err) return res.status(401).json({
      title: 'unauthorized'
    })
    //token is valid
    User.findOne({ _id: decoded.userId }, (err, user) => {
      if (err) return console.log(err)
      return res.status(200).json({
        title: 'user grabbed',
        user: {
          email: user.email,
          name: user.name
        }
      })
    })
  })
})

// middlewares
app.use(express.json()); // for body parser

//route middlewares
app.use("/todolist", authRoutes);
app.listen(5000, () => console.log("sever is running..."));
