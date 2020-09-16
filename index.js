const http = require('http');
const express = require('express')
const bodyParser = require('body-parser')

const hostname = '127.0.0.1';
const port = 3000;

const userApi=require('./routes/userApi');

var app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send({ message: 'hello world!'});
});

app.use('/user',userApi);


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});