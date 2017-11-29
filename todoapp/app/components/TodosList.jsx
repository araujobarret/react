const React = require('react');

let Todo = require('Todo');

let TodosList = React.createClass({
  render: function() {
    let {todos} = this.props;
    let renderTodos = () => {
      if(todos.length === 0) {
        return (
          <p className="container_message">Nothing to do</p>
        );
      }

      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
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
