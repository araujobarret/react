const React = require('react');

let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let OpenWeatherMap = require('openWeatherMap');
let ErrorModal = require('ErrorModal');

let Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false,
      errorMessage: null
    }
  },
  handleSearch: function(location){
    this.setState({
      isLoading: true,
      errorMessage: null,
      location: null,
      temp: null
    });

    OpenWeatherMap.getTemp(location)
    .then((temp) => {
      this.setState({
        location,
        temp,
        isLoading: false
      });
    }).catch((e) => {
      this.setState({
        isLoading: false,
        errorMessage: e.toString()
      });
    });
  },
  componentDidMount: function(){
    let location = this.props.location.query.location;

    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function(newProps){
    let location = newProps.location.query.location;

    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash= '#/';
    }
  },
  render: function() {
    let location = this.state.location;
    let temp = this.state.temp;
    let isLoading = this.state.isLoading;
    let errorMessage = this.state.errorMessage;

    function renderMessage() {
      if(isLoading)
        return <h3 className="text-center">Fetching weather...</h3>;
      else
        if(temp && location)
          return <WeatherMessage location={location} temp={temp}/>;
    };

    let renderError = () => {
      if(errorMessage){
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
