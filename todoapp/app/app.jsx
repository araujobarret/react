let React = require('react');
let ReactDOM = require('react-dom');
let {Provider} = require('react-redux');

let TodoApp = require('TodoApp');
let actions = require('actions');
let store = require('configureStore').configure();
let TodoAPI = require('TodoAPI');

store.subscribe(() => {
  TodoAPI.setTodos(store.getState().todos);
})

let initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
require('style!css!foundation-sites/dist/css/foundation-float.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
