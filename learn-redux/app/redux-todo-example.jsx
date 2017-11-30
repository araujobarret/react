const redux = require('redux');

let stateTodo = {
  searchText: '',
  showCompleted: false,
  todos: []
};

let reducer = (state = stateTodo, action) => {
  switch(action.type) {
    case 'CHANGE_SEARCH': return Object.assign({}, state, { searchText: action.searchText });
    default: return state;
  }
  return state;
};

let store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

store.subscribe(() => {
  let state = store.getState();
  console.log("Now, search text is", state.searchText);
});

console.log('CurrentState', store.getState());

store.dispatch({
  type: 'CHANGE_SEARCH',
  searchText: 'New Search'
})

store.dispatch({
  type: 'CHANGE_SEARCH',
  searchText: 'Dog'
})
