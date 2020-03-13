import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'
import 'firebase/auth'

export const config = {
    apiKey: "AIzaSyDVmd75_Y6GczxcQoc88agEsW5wta3QjgQ",
    authDomain: "speechrecorder-270920.firebaseapp.com",
    databaseURL: "https://speechrecorder-270920.firebaseio.com",
    projectId: "speechrecorder-270920",
    storageBucket: "speechrecorder-270920.appspot.com",
    messagingSenderId: "822671506578",
    appId: "1:822671506578:web:85f5e0ca3f193ce7073a4b",
    measurementId: "G-HGG5JBMTM4"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();
  firebase.firestore()


export default firebase;