const express=require('express')
const router=express.Router()
const Todo=require('../models/todoSchema');

// add new todo
router.post('/add', async (req,res)=>{
    const todo = new Todo(req.body);
    await todo.save();
    res.json(todo);
});

// get all todos
router.get('/all', async (req,res)=>{
    const todos = await Todo.find();
    res.json(todos);
});

// get todo by id
router.get('/:id', async (req,res)=>{
  const todo = await Todo.findById(req.params.id);
  res.json(todo);
});

// update todo
router.put('/update/:id', async (req,res)=>{
    await Todo.findByIdAndUpdate(req.params.id,req.body);
    const updatedTodo= await Todo.findById(req.params.id); 
    res.json(updatedTodo);
});

// delete todo
router.delete('/delete/:id', async (req,res)=>{
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message : "todo with id "+req.params.id+" deleted" });
});

module.exports=router;