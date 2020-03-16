export const createTodo = todo => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    // reqact-redux firebsase provides  binding for firebase servives as a whole
    // redux firestore provides redux bidining for firestore db in particular
    // allow us to use firrebase api within action creator
    // thunk is pausing the dispatch
    // making async call to our DB
    try {
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      // ...todo is referencing all the properties within that document
      await firestore.collection('todos').add({
        ...todo,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      });
      dispatch({ type: 'CREATE_TODO', todo: todo });
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteTodo = todoId => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      // const firestore = getFirestore();
      console.log("todoId", todoId)

    } catch (error) {
      dispatch( { type: 'DELETE_ERROR', error })
    }
  }
}
