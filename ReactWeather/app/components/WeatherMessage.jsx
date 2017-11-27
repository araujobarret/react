const React = require('react');

let WeatherMessage = React.createClass({
  render: function() {
    let location = this.props.location;
    let temp = this.props.temp;
    return (
      <h1 className="text-center">
        It is it {this.props.temp} in {this.props.location}.
      </h1>
    );
  }
});

module.exports = WeatherMessage;
