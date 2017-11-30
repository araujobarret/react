const redux = require('redux');

console.log("Starting redux example");

let nextHobbyId = 1;
let nextMovieId = 1;

// Name reducer and action generators
// ---------------
let nameReducer = (state = 'Anonymous', action) => {
  switch(action.type) {
    case 'CHANGE_NAME':
      return action.name
    default:
      return state;
  }
};

let changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  };
};

// Hobbies reducer and action generators
// ---------------
let hobbiesReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id !== action.id)
    default:
      return state;
  }
};

let addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  };
};

let removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  }
};

// Hobbies reducer and action generators
// ---------------
let moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          movie: state.movie,
          genre: state.genre
        }
      ];
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== action.id);
    default:
      return state;
  }
};

let addMovie = (movie, genre) => {
  return {
    type: 'ADD_MOVIE',
    movie,
    genre
  };
};

let removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  };
};

let reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
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

store.dispatch(changeName('Andrew'));
store.dispatch(changeName('Carlos'));

store.dispatch(addHobby('Play Basketball'));
store.dispatch(addHobby('Ride Bike'));
store.dispatch(removeHobby(2));

store.dispatch(addMovie('Back to the Future', 'SciPi'));
store.dispatch(addMovie('Back to the Future 2', 'SciPi'));
store.dispatch(removeMovie(2));

// subscription();
