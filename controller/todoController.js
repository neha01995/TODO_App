const Todo = require("../models/Todo");


module.exports.home = async function(req, res) {
  const month = [
    "",
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
  ]

  // get all todos
  Todo.find(function(err, todos) {
    if (err) {
      console.log("unable to fetch data");
      return res.redirect("/");
    }
   
    // render homepage with todos
    return res.render("index", {todos, month});
  });
};

module.exports.addTodo = function(req, res) {
    console.log(req.body);

    // create a single todo
  Todo.create(req.body, function(err, Todo) {
    if (err) {
      console.error(err);
      return res.redirect("/");
    }
    return res.redirect("/");
  });
};

module.exports.deleteTodo = function(req, res) {

// delete single or list of todos
  Todo.deleteMany({_id:{$in:req.body.id}}, function(err, todo) {
    if (err) {
      console.error(err);
      return res.redirect("/");
    } else {
      return res.redirect("/");
    }
  });
};
