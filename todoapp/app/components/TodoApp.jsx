const React = require('react');

let TodosList = require('TodosList');
let AddTodo = require('AddTodo');
let TodoSearch = require('TodoSearch');

let TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Kick the dog'
        },
        {
          id: 2,
          text: 'Clean the kitchen'
        },
        {
          id: 3,
          text: 'Walk the dog'
        },
        {
          id: 4,
          text: 'Sleep a little'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('new todo: ' + text);
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showcompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function() {
    let {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodosList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
});

module.exports = TodoApp;
