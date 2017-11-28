let $ = require('jquery');

module.exports = {
  setTodos: function(todos) {
    if($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    let todos;
    try {
      todos = JSON.parse(localStorage.getItem('todos'));
    }
    catch(e) {
      console.log(e);
    }

    return $.isArray(todos) ? todos : [];

  }
}
