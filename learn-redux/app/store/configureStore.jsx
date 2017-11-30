const redux = require('redux');
const thunk = require('redux-thunk').default;

let {nameReducer, hobbiesReducer, moviesReducer, mapReducer} = require('./../reducers/index');

export let configure = () => {
  let reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer,
    map: mapReducer
  });

  let store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk), // Actions which are objects
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
