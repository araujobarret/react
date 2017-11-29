const redux = require('redux');

console.log("Starting redux example");

let reducer = (state = {name: 'Anonymous'}, action) => {
  console.log('New action', action);
  return state;
};

let store = redux.createStore(reducer);

let currentState = store.getState();
console.log('currentState', currentState);

let action = {
  type: 'CHANGE_NAME',
  name: 'Andrew'
};

store.dispatch(action);
