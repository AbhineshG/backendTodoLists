import mongoose  from "mongoose";
import Todo  from "../models/todos.js";



export const readTodos = async(req,res)=>{
    console.log(req,res,"----------------line no 7");
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}
export const createTodos = async(req,res)=>{
    const todos = new Todo(req.body);
    try {
        await todos.save()
        res.status(201).json(todos);
    } catch (error) {
        res.status(409).json({error:error.message})
    }
};

export const updateTodos = async(req,res)=>{
  const {id}=req.params;
  const {title,content}=req.body;
if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).send(`The id ${id} is Not Valid`);
}
         const todo={title,content,_id:id}
        await Todo.findByIdAndUpdate(id,todo,{new:true})
        res.status(201).json(todo);
};
export const deleteTodos = async(req,res)=>{
    const {id}=req.params;
   if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).send(`The id ${id} is Not Valid`);
  }
           await Todo.findByIdAndDelete(id)
          res.status(201).json({message:"This message was deleted"});
  }