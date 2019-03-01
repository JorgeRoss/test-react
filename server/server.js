var routing = require('./routing')
var path = require('path')
var bodyParser = require("body-parser")
var express = require('express')
var app = express()

const CLIENT_BUILD_PATH = path.join(__dirname, '../client/public')

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(CLIENT_BUILD_PATH));

app.use('/api', routing)

mongoose.connect('mongodb://localhost:27017/test')
  .then(() => {

    console.log("Conexión a la base de datos")

    app.listen(8001, () => {
      console.log('Server started at http://localhost:8001');
    })

  })

  .catch(err => console.log(err));



