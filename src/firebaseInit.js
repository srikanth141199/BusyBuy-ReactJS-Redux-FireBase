// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgjlCH1-669jwA9VEMN10lNHCkyC2H-10",
  authDomain: "busybuy-srikanth.firebaseapp.com",
  projectId: "busybuy-srikanth",
  storageBucket: "busybuy-srikanth.appspot.com",
  messagingSenderId: "46675944616",
  appId: "1:46675944616:web:e358605c06c9bf33758e9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();