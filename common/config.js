// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDckhyHJmnTb0gSVrco150X3Sf9DIhhdPw",
  authDomain: "vedflix-ott-application.firebaseapp.com",
  projectId: "vedflix-ott-application",
  storageBucket: "vedflix-ott-application.appspot.com",
  messagingSenderId: "573767724524",
  appId: "1:573767724524:web:6b37d87ca309559fe2a4c9",
  measurementId: "G-R0E340NKWB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
export { firebase, authentication };