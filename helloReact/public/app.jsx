const React = require('react');
const ReactDOM = require('react-dom');
let Greeter = require('Greeter');

ReactDOM.render(
  <Greeter name='Test webpack' />,
  document.getElementById('app')
);
