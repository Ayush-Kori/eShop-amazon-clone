import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDT1ONAd7QdNxhX4xDwH3kGTHxbl8oA_9k",
    authDomain: "eshop-e3237.firebaseapp.com",
    projectId: "eshop-e3237",
    storageBucket: "eshop-e3237.appspot.com",
    messagingSenderId: "63677298307",
    appId: "1:63677298307:web:ed11316d6419f9a3854db6",
    measurementId: "G-G69X5GS2VZ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };


