import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3B5ormZCF_pealinkNX-yzXyO_w1WB0Q",
  authDomain: "linkedin-clone-2020.firebaseapp.com",
  projectId: "linkedin-clone-2020",
  storageBucket: "linkedin-clone-2020.appspot.com",
  messagingSenderId: "421499333231",
  appId: "1:421499333231:web:a32170fb76e5be958bfb9a",
  measurementId: "G-DFEDSX17YT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
