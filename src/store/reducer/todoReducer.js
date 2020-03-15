

//Action Creators
const todoReducer = (state = {todos: []}, action) => {
  switch (action.type) {
    case 'CREATE_TODO':
      return state;
    default:
      return state;
  }
};

export default todoReducer;
