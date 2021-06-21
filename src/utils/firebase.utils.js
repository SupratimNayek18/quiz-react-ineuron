import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDWE1O64DpC1yO4bWy_fcDp0KQv5UUSik0",
  authDomain: "quiz-project-68d02.firebaseapp.com",
  projectId: "quiz-project-68d02",
  storageBucket: "quiz-project-68d02.appspot.com",
  messagingSenderId: "275883160996",
  appId: "1:275883160996:web:35f19395f7c46306193d31",
  measurementId: "G-709KCE3MVX",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
