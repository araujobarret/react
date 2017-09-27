const React = require('react');

let WeatherForm = React.createClass({
  render: function() {
    return (
      <form>
        <input type="text" />
        <button>Get Weather</button>        
      </form>
    );
  }
});

module.exports = WeatherForm;
