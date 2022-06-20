import express from "express";
import { createTodos, deleteTodos, readTodos, updateTodos } from "../controller/todos.js";
 
const router = express.Router();
router.get("/gets",readTodos);
router.post("/",createTodos)
router.patch("/:id",updateTodos)
router.delete("/:id",deleteTodos)


export default router

// 1. git init

// 2. git add .

// 3. git status

// 4. git commit -m 'your message'

// 5. git remote add origin 'your_url_name' 

// 6. git push -u origin master //then login w/ your creds

// git init
// git add .
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/AbhineshG/backendwithtodoapp.git
// git push -u origin main