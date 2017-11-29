const redux = require('redux');

let stateTodo = {
  searchText: '',
  showCompleted: false,
  todos: []
}

let reducer = (state = stateTodo, action) => {
  return state;
};

let store = redux.createStore(reducer);

let currentState = store.getState();
console.log('CurrentState', currentState);
