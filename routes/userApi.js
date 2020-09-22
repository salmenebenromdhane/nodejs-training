const express=require('express')
const router=express.Router()
const User=require('../models/userSchema');
const Todo=require('../models/todoSchema');
// add new user
router.post('/add', async (req,res)=>{
    const user = new User(req.body);
    await user.save();
    res.json(user);
});

// get all users
router.get('/all', async (req,res)=>{
    const users = await User.find().populate('todos').exec();
    res.json(users)
});

// get user by id
router.get('/:id', async (req,res)=>{
  const user = await User.findById(req.params.id).populate('todos').exec();
  res.json(user);
});

// update user
router.put('/update/:id', async (req,res)=>{
    await User.findByIdAndUpdate(req.params.id,req.body);
    const updatedUser= await User.findById(req.params.id); 
    res.json(updatedUser);
});

// delete user
router.delete('/delete/:id', async (req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.json({ message : "user with id "+req.params.id+" deleted" });
});

// affect todo to user
router.post('/affect/:idUser/:idTodo', async (req,res)=>{
    const updatedUser = await User.findByIdAndUpdate(req.params.idUser, { $push : {todos: req.params.idTodo}});
    const user = await User.findById(req.params.idUser);
    res.json(user);
});

// delete todo from user
router.post('/deleteTodoId/:idUser/:idTodo', async (req,res)=>{
    const updatedUser = await User.findByIdAndUpdate(req.params.idUser, { $pull : {todos:  req.params.idTodo}});
    const user = await User.findById(req.params.idUser);
    res.json(user);
});

module.exports=router;