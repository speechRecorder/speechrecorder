
//Action Creators
export const todoReducer = (state = {todos: []}, action) => {
  switch (action.type) {
    case 'CREATE_TODO':
      return state;
    case 'DELETE_TODO':
      // return state.todos.filter()
      return
    default:
      return state;
  }
};
