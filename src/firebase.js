// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
// require('firebase/auth')
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBbGOeuPMpeap4SO-9PQC4XW9Cbg6iogPI",
    authDomain: "clone-ed0c7.firebaseapp.com",
    projectId: "clone-ed0c7",
    storageBucket: "clone-ed0c7.appspot.com",
    messagingSenderId: "646300388473",
    appId: "1:646300388473:web:b6c7cc87f5687df72558a8",
    measurementId: "G-B0CX6RP41W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth}