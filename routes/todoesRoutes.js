import express from "express";
import { createTodos, deleteTodos, readTodos, updateTodos } from "../controller/todos.js";
 
const router = express.Router();
router.get("/get",readTodos);
router.post("/",createTodos)
router.patch("/:id",updateTodos)
router.delete("/:id",deleteTodos)


export default router