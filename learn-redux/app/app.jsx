let React = require('react');
let ReactDOM = require('react-dom');

let MainApp = requier('MainApp');

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
require('style!css!foundation-sites/dist/css/foundation-float.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <MainApp/>,
  document.getElementById('app')
);
