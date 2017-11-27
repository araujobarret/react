const React = require('react');

let TodosList = require('TodosList');

let TodoApp = React.createClass({
  getInitialState: function() {
    return {
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
  render: function() {
    let {todos} = this.state;

    return (
      <div>
        <TodosList todos={todos} />
      </div>
    )
  }
});

module.exports = TodoApp;
