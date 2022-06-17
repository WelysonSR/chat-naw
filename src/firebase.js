import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyAeNj6EXccKLbkAedyfApWKOKI1ZtJBA44",
  authDomain: "chat-now-119e1.firebaseapp.com",
  projectId: "chat-now-119e1",
  storageBucket: "chat-now-119e1.appspot.com",
  messagingSenderId: "400775855134",
  appId: "1:400775855134:web:a4019e75381c4cbb67420f",
  measurementId: "G-J84HB1SPTE"
})

const auth = firebase.auth();

const db = firebase.firestore();

export { db, auth };
