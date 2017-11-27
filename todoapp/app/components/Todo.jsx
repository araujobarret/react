const React = require('react');

let Todo = React.createClass({
  render: function() {
    console.log(this.props);
    let {id} = this.props;
    let {text} = this.props;
    return (
      <div>
        {id}. {text}
      </div>
    )
  }
});

module.exports = Todo;
