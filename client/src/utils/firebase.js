import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyCBhUPRorNHJJcQEH81m6a6S5K-d010n00",
    authDomain: "glasses-tracker.firebaseapp.com",
    databaseURL: "https://glasses-tracker-default-rtdb.firebaseio.com",
    projectId: "glasses-tracker",
    storageBucket: "glasses-tracker.appspot.com",
    messagingSenderId: "106069403986",
    appId: "1:106069403986:web:30dcc76ba44922f7bfb28b",
    measurementId: "G-RQFH7YXT6J"
  };


module.exports = {
  auth : firebase.auth(),
  db : firebase.firestore()
}