const React = require('react');
let Nav = require('Nav');

let Main = React.createClass({
  render: function() {
    return (
      <div>
        <Nav/>
        <h2>Main content</h2>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
