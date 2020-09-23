const http = require('http');
const express = require('express')
const bodyParser = require('body-parser')

const mongoose=require('./db/database');

const hostname = '127.0.0.1';
const port = 3000;

const userApi=require('./routes/userApi');
const todoApi=require('./routes/todoApi');
const nodeMailerApi=require('./routes/nodeMailerApi');
var app = express();
// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());



app.get('/',(req,res)=>{
    res.send({ message: 'hello world!'});
});

app.use('/user',userApi);
app.use('/todo',todoApi);
app.use('/test',nodeMailerApi);
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});