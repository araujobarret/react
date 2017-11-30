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

  },
  filterTodos: function(todos, showCompleted, searchText) {
    let filteredTodos = todos;

    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    filteredTodos = filteredTodos.sort((t1, t2) => {
      if(!t1.completed && t2.completed){
        return -1;
      }
      else {
        if(t1.completed && !t2.completed){
          return 1
        }
      }
      return 0;
    });

    filteredTodos = filteredTodos.filter((todo) => {
      if(searchText === ''){
        return true;
      }
      else {
        if(todo.text.toLowerCase().indexOf(searchText.toLowerCase()) != -1) {
          return true;
        }
        else {
          return false;
        }
      }
    });

    return filteredTodos;
  }
}
