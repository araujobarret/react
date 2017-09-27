const React = require('react');
const app_id = 'd241eac0ecd3e0efab18a707816bd926';

let WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    let location = this.refs.location.value;

    if(location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="location"/>
        <button>Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
