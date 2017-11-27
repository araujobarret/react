const React = require('react');
const {Link} = require('react-router');

let Examples = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="text-center page-title">Examples</h1>
        <p>Here are a few examples to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Sao%20Paulo'>São Paulo, SP</Link>
          </li>
          <li>
            <Link to='/?location=Rio'>Rio, Brazil</Link>
          </li>
        </ol>
      </div>
    );
  }
});

module.exports = Examples;
