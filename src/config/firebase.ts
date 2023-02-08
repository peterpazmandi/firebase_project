// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-CzOaCrkgAUCWm_wEfYIf4qcFMx51-ag",
  authDomain: "react-course---pedrotech.firebaseapp.com",
  projectId: "react-course---pedrotech",
  storageBucket: "react-course---pedrotech.appspot.com",
  messagingSenderId: "1093527458084",
  appId: "1:1093527458084:web:3d513f6826f1364087e3b1",
  measurementId: "G-FKK4X46779"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);