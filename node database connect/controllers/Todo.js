const Todo = require("../Model/Todo");

const getTodos = (req, res) => {
    Todo.find((err, todos) => {
      if (err) {
        res.send(err);
      }
      res.json(todos);
    });
  };

  const createTodo = (req, res) => {
    const todo = new Todo({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      city: req.body.city,
    });
  
    todo.save((err, todo) => {
      if (err) {
        res.send(err);
      }
      res.json(todo);
    });
  };
  const updateTodo = (req, res) => {
      
    Todo.findOneAndUpdate(
      { _id: req.params.todoID },
      {
          $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          city: req.body.city,
        },
      },
      { new: true },
      (err, Todo) => {
        if (err) {
          res.send(err);
        } else res.json(Todo);
      }
    );
  };
  const deleteTodo = (req, res) => {
    Todo.deleteOne({ _id: req.params.todoID })
      .then(() => res.json({ message: "Todo Deleted" }))
      .catch((err) => res.send(err));
  };
  
  
  
  module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo

  };