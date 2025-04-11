// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhPxxtS13egPvwLdcYNQXe3iYY-Ih9sww",
  authDomain: "prepwise-fce4d.firebaseapp.com",
  projectId: "prepwise-fce4d",
  storageBucket: "prepwise-fce4d.firebasestorage.app",
  messagingSenderId: "92119468174",
  appId: "1:92119468174:web:9bf48598265805fd7361df",
  measurementId: "G-HDWWK3PEDG"
};

// Initialize Firebase
const app =  !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);