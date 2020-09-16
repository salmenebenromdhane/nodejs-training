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

// add new user
app.post('/user/add',(req,res)=>{
    console.log(req.body);
    res.json(req.body);
});

// get all users
app.get('/user/all',(req,res)=>{
    res.json({message:"get all users on this route"});
});

// get user by id
app.get('/user/:id',(req,res)=>{
    res.json({message:"this is a simple user Id : "+req.params.id});
});

// update user
app.put('/user/update/:id',(req,res)=>{
    console.log("Id user updated :"+req.params.id)
    res.json(req.body);
});

// delete user
app.delete('/user/delete/:id',(req,res)=>{
    res.json({message:"Id user deleted: "+req.params.id});
});



app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});