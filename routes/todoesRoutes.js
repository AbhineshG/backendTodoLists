import express from "express";
import { createTodos, deleteTodos, readTodos, updateTodos } from "../controller/todos.js";
 
const router = express.Router();
router.get("/gets",readTodos);
router.post("/",createTodos)
router.patch("/:id",updateTodos)
router.delete("/:id",deleteTodos)


export default router