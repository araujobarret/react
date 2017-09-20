const React = require('react');
let {Link} = require('react-router');

let Nav = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Nav Component</h2>
        <Link to="/">Get Weather</Link>
        <Link to="/about">About</Link>
        <Link to="/examples">Examples</Link>
      </div>
    );
  }
});

module.exports = Nav;
