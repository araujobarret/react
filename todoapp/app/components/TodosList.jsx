const React = require('react');

let Todo = require('Todo');

let TodosList = React.createClass({
  render: function() {
    let {todos} = this.props;
    let renderTodos = () => {
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} />
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodosList;
