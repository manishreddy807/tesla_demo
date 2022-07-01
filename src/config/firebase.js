import firebase from 'firebase'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBi1P0iggA0RXqhm2h4LOKKauZ5m4RpKVY",
    authDomain: "slack-test-14f7c.firebaseapp.com",
    projectId: "slack-test-14f7c",
    storageBucket: "slack-test-14f7c.appspot.com",
    messagingSenderId: "58195376841",
    appId: "1:58195376841:web:2a4e350810f0c54e44eb18"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth()
 

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}

  export default db;