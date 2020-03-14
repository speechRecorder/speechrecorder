export const signIn = credentials => {
  return async (dispatch, getState, { getFirebase }) => {
    try {
      const firebase = getFirebase();

      await firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password);
      dispatch({ type: 'LOGIN_SUCCESS' });
    } catch (error) {
      dispatch({ type: 'LOGIN_ERROR', error });
    }
  };
};

export const signOut = () => {
  return async (dispatch, getState, { getFirebase }) => {
    try {
      const firebase = getFirebase();

      await firebase.auth().signOut();
      dispatch({ type: 'SIGNOUT_SUCCESS' });
    } catch (error) {
      console.error(error)
    }
  };
};
