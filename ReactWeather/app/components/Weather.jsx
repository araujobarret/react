const React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');

let Weather = React.createClass({
  getInitialState: function(){
    return {
      location: 'Rio de Janeiro',
      temp: 30
    };
  },
  handleSearch: function(location){
    this.setState({
      location: location,
      temp: 40
    });
  },
  render: function() {
    let location = this.state.location;
    let temp = this.state.temp;
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage location={location} temp={temp}/>
      </div>
    );
  }
});

module.exports = Weather;
