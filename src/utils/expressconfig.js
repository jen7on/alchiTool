const express = require('express')
var bodyParser = require('body-parser')
const path = require('path');
//not required right now
//const fileUpload = require('express-fileupload');
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

module.exports = {app}