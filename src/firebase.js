import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAeNj6EXccKLbkAedyfApWKOKI1ZtJBA44",
  authDomain: "chat-now-119e1.firebaseapp.com",
  projectId: "chat-now-119e1",
  storageBucket: "chat-now-119e1.appspot.com",
  messagingSenderId: "400775855134",
  appId: "1:400775855134:web:a4019e75381c4cbb67420f",
  measurementId: "G-J84HB1SPTE"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
