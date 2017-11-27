const React = require('react');
let Nav = require('Nav');

let Main = React.createClass({
  render: function() {
    return (
      <div>
        <Nav/>
        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;
