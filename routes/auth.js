const router = require("express").Router();
//const mongoose = require("mongoose");
const Todo = require("../models/Todo");


//Getting all
router.get('/', async (req,res) => {
  try{
    const todos = await Todo.find()
    res.json(todos)
  }catch(err){
    res.status(500).json({message:err.message})
  }
})

//Getting one
router.get('/:id' , getTodo, (req, res) => {
  try{
    res.json(res.todo)
  }catch(err){
    res.status(500).json({message:err.message})
  }
})

//Update one
router.patch('/:id', getTodo, async(req,res) =>{
  if(req.body.title != null){
    res.todo.title = req.body.title
  }
  if(req.body.content != null){
    res.todo.content = req.body.content
  }
  
  try{
    const updateTodo = await res.todo.save()
    res.json(updateTodo)
  }catch(err){
    res.status(400).json({message:err.message})
  }
} )

//Delete one
router.delete('/:id' , getTodo ,async(req, res) => {
  try{
    await res.todo.remove()
    res.json({message: 'Delete todo'})
  }catch(err){
    res.status(500).json({message: err.message})
  }
})


//Create one
router.post('/', async  (req,res)  =>  {
  const todo = new Todo({
    title: req.body.title,
    content:req.body.content,
  })
  try{
    const newTodo = await todo.save()
      res.status(201).json(newTodo)   
      } catch(err) {
      res.status(400).json({message:err.message})
  }
})

async function getTodo(req, res, next){
  let todo
  try{
    todo = await Todo.findById(req.params.id)
    if(todo == null){
      return res.status(404).json({message:'cannot find this Todo'})
    }
  } catch(err){
    return res.status(500).json({message:err.message})
  } 
  res.todo = todo
  next()
}
module.exports = router;
