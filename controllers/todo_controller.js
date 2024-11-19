const todoModel = require("../models/todo_model");

exports.todoCreate = (req, res, next) => {
  todoModel.create(req.body);
  // Especificamos el estatus 201
  res.status(201).send(); 
};
