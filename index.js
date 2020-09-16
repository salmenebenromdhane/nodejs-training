const http = require('http');
var express = require('express')
var bodyParser = require('body-parser')

const hostname = '127.0.0.1';
const port = 3000;

var app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send({ message: 'hello world!'});
});

app.post('/addUser',(req,res)=>{
    console.log(req.body);
    res.json(req.body);
});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});