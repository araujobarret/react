const React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');

let Weather = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm />
        <WeatherMessage />
      </div>
    );
  }
});

module.exports = Weather;
