const React = require('react');
const uuid = require('node-uuid');
const moment = require('moment');

let TodosList = require('TodosList');
let AddTodo = require('AddTodo');
let TodoSearch = require('TodoSearch');
let TodoAPI = require('TodoAPI');

let TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate: function() {
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: null
        }
      ]
    });
  },
  handleToggle: function(id) {
    let updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : null;
      }
      return todo;
    });
    this.setState({todos: updatedTodos});
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function() {
    let {todos, showCompleted, searchText} = this.state;
    let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <h1 className="page-title">Todo app</h1>

        <div className="row">
          <div className="small-2 large-4 columns small-centered">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch} />
              <TodosList todos={filteredTodos} onToggle={this.handleToggle}/>
              <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
