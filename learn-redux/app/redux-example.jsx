const redux = require('redux');

console.log("Starting redux example");

let stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
}

let nextHobbyId = 1;
let nextMovieId = 1;

let oldReducer = (state = stateDefault, action) => {
  // state = state || {name: 'Anonymou'};

  switch(action.type) {
    case 'CHANGE_NAME': return Object.assign({}, state, { name:action.name });
    case 'ADD_HOBBY': return Object.assign(
      {},
      state,
      {
        hobbies:
        [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      }
    );
    case 'ADD_MOVIE': return Object.assign(
      {},
      state,
      {
        movies:
        [
          ...state.movies,
          {
            id: nextMovieId++,
            movie: action.movie,
            genre: action.genre
          }
        ]
      }
    );
    case 'REMOVE_HOBBY': return Object.assign(
      {},
      state,
      {
        hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
      }
    );
    case 'REMOVE_MOVIE': return Object.assign(
      {},
      state,
      {
        movies: state.hobbies.filter((movie) => movie.id !== action.id)
      }
    );
    default: return state;
  }

  return state;
};

let nameReducer = (state = 'Anonymous', action) => {
  switch(action.type) {
    case 'CHANGE_NAME':
      return action.name
    default:
      return state;
  }
};

let hobbiesReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_HOBBY':
      return [
        ...state.hobbies,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
    case 'REMOVE_HOBBY':
      return state.hobbies.filter((hobby) => hobby.id !== action.id)
    default:
      return state;
  }
};

let reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer
});

let store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
let subscription = store.subscribe(() => {
  console.log('New state', store.getState());
});

let currentState = store.getState();
console.log('currentState', store.getState());

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Andrew'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Play basketball'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Ride Bike'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: "ADD_MOVIE",
  movie: 'Back to the Future',
  genre: 'SciFy'
});

store.dispatch({
  type: "ADD_MOVIE",
  movie: 'Back to the Future 2',
  genre: 'SciFy'
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 2
});

// subscription();
