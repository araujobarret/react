const React = require('react');

let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let OpenWeatherMap = require('openWeatherMap');

let Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    this.setState({isLoading: true});

    OpenWeatherMap.getTemp(location)
    .then((temp) => {
      this.setState({
        location,
        temp
      });
      this.setState({isLoading: false});
    }).catch(e => console.log(e));
  },
  render: function() {
    let location = this.state.location;
    let temp = this.state.temp;
    let isLoading = this.state.isLoading;

    function renderMessage() {      
      if(isLoading)
        return <h3>Fetching weather...</h3>;
      else
        if(temp && location)
          return <WeatherMessage location={location} temp={temp}/>;
    };

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
