const express = require("express");

const router = express.Router();

const todoController = require("../controller/todoController");

// POST     add a single todo
// route    /todos/addTodo
// body     {description,category,dueDate}
router.post("/addTodo", todoController.addTodo);

// POST     delete single/multiple todo(s)
// route    /todos/deleteTodo
// body     {id} or {list of ids}
router.post("/deleteTodo", todoController.deleteTodo);

module.exports = router;
