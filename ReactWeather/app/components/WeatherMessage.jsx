const React = require('react');

let WeatherMessage = React.createClass({
  render: function() {
    let location = this.props.location;
    let temp = this.props.temp;
    return (
      <p>
        Location {this.props.location}, temperature {this.props.temp}
      </p>
    );
  }
});

module.exports = WeatherMessage;
