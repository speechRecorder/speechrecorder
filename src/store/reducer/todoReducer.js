// const initState = {
//   todos: [
//     {
//       id: '1',
//       title: 'Finish Stackathon!',
//       content: 'Project is due on Monday, along with a short PowerPoint deck.'
//     },
//     {
//       id: '2',
//       title: 'Walk Theo!',
//       content: 'He needs to be walked at least twice a day.'
//     },
//     {
//       id: '3',
//       title: 'Clean the room!',
//       content: 'Rearrange your desk and fold the clothes.'
//     }
//   ]
// };

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
