const express=require('express')
const router=express.Router()
const User=require('../models/userSchema');

// add new user
router.post('/add', async (req,res)=>{
    const user = new User(req.body);
    await user.save();
    res.json(user);
});

// get all users
router.get('/all', async (req,res)=>{
    const users = await User.find();
    res.json(users)
});

// get user by id
router.get('/:id', async (req,res)=>{
  const user = await User.findById(req.params.id);
  res.json(user);
});

// update user
router.put('/update/:id', async (req,res)=>{
    await User.findByIdAndUpdate(req.params.id,req.body);
    res.json(req.body);
});

// delete user
router.delete('/delete/:id', async (req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.json({ message : "user with id "+req.params.id+" deleted" });
});

module.exports=router;