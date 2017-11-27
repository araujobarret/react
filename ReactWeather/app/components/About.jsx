const React = require('react');

let About = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="text-center page-title">About</h1>
        <p>Here, we have some examples to test some features of React with Foundation</p>
        <p>
          Some tools that I used:
        </p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the Js Frameworkd used.
          </li>
          <li>
            <a href="https://openweathermap.org">Open Weather Map</a> - The API fom Open Weather Map used to get weather data by a city name.
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = About;
