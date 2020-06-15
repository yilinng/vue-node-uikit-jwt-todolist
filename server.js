const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//routes
app.post('/signup',(req, res, next) => {
  console.log(req.body)
})

const port = process.env.PORT || 5000; //端口號設定 本地5000

app.listen(port,  (err) => {
  if (err) return console.log(err);
  console.log(`Server running on port ${port}`);
})
