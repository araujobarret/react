const redux = require('redux');

let actions = require('./actions/index');
let store = require('./store/configureStore').configure();


console.log("Starting redux example");

// Subscribe to changes
let subscription = store.subscribe(() => {
  let state = store.getState();
  console.log('New state', state);
  if(state.map.isFetching) {
    console.log("Fetching data...");
  }
  else {
    if(state.map.url) {
      console.log('Url', state.map.url);
    }
  }
});

let currentState = store.getState();
console.log('currentState', store.getState());

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Andrew'));
store.dispatch(actions.changeName('Carlos'));

store.dispatch(actions.addHobby('Play Basketball'));
store.dispatch(actions.addHobby('Ride Bike'));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.addMovie('Back to the Future', 'SciPi'));
store.dispatch(actions.addMovie('Back to the Future 2', 'SciPi'));
store.dispatch(actions.removeMovie(2));

// subscription();
