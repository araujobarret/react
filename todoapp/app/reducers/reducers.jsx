let uuid = require('node-uuid');
let moment = require('moment');

export let searchTextReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

export let showCompleted = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  };
};

export let todosReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: null
        }
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if(todo.id === action.id) {
          let nextCompleted = !todo.completed;
        }
        return Object.assign(
          {},
          state,
          {
            completed: nextCompleted,
            completedAt: nextCompleted ? moment().unix() : null
          }
        );
      });
    default:
      return state;
  }
};
