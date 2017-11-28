const React = require('react');

let TodosList = require('TodosList');
let AddTodo = require('AddTodo');
let TodoSearch = require('TodoSearch');
const uuid = require('node-uuid');

let TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Kick the dog'
        },
        {
          id: uuid(),
          text: 'Clean the kitchen'
        },
        {
          id: uuid(),
          text: 'Walk the dog'
        },
        {
          id: uuid(),
          text: 'Sleep a little'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    console.log(...this.state.todos);
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }        
      ]
    });
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
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
