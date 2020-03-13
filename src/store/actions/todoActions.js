export const createTodo = todo => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    // reqact-redux firebsase provides  binding for firebase servives as a whole
    // redux firestore provides redux bidining for firestore db in particular
    // allow us to use firrebase api within action creator
    // thunk is pausing the dispatch
    // making async call to our DB

    try {
      const firestore = getFirestore();
      // ...todo is referencing all the properties within that document
      await firestore.collection('todos').add({
        ...todo,
        authorFirstName: 'thomas',
        authorLastName: 'zhang',
        authorId: 12345,
        createdAt: new Date()
      });
      dispatch({ type: 'CREATE_TODO', todo: todo });
    } catch (error) {
      console.error(error);
    }
  };
};
