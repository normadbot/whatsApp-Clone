import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-h32qK3nhR1dF3xEd3UkLoZNM_KHasN8",
  authDomain: "whats-app-clone-7b600.firebaseapp.com",
  projectId: "whats-app-clone-7b600",
  storageBucket: "whats-app-clone-7b600.appspot.com",
  messagingSenderId: "117715904887",
  appId: "1:117715904887:web:5527753b90689506a65972",
  measurementId: "G-JRPEXEQ68J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
