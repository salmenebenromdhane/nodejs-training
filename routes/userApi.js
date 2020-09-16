const express=require('express')
const router=express.Router()

// add new user
router.post('/add',(req,res)=>{
    console.log(req.body);
    res.json(req.body);
});

// get all users
router.get('/all',(req,res)=>{
    res.json({message:"get all users on this route"});
});

// get user by id
router.get('/:id',(req,res)=>{
    res.json({message:"this is a simple user Id : "+req.params.id});
});

// update user
router.put('/update/:id',(req,res)=>{
    console.log("Id user updated :"+req.params.id)
    res.json(req.body);
});

// delete user
router.delete('/delete/:id',(req,res)=>{
    res.json({message:"Id user deleted: "+req.params.id});
});

module.exports=router;