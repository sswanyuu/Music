import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOyM041MhujlILv8pLyID7pKSNT4Xb2Fw",
  authDomain: "music-4ee6e.firebaseapp.com",
  projectId: "music-4ee6e",
  storageBucket: "music-4ee6e.firebasestorage.app",
  //   messagingSenderId:  "275977549177",
  appId: "1:275977549177:web:9af8f60b4ef2a4f92feba8",
  measurementId: "G-E2Y9P4JTXE",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const usersCollection = db.collection("users");
export { auth, db, usersCollection };
