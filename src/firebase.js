// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDDaOGIHdNDo5wO-umduzk1qLmiy-Xeebk",
  authDomain: "facebook-clone-bd8a5.firebaseapp.com",
  projectId: "facebook-clone-bd8a5",
  storageBucket: "facebook-clone-bd8a5.appspot.com",
  messagingSenderId: "250921641450",
  appId: "1:250921641450:web:0166025ae45ed69ac9be93",
  measurementId: "G-24VL604QCV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth , provider};
export default db;