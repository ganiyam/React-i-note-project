
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg3c70DFbXoDiOY-kSvz8vhOYwnmsPPXo",
  authDomain: "teamproject-65cda.firebaseapp.com",
  projectId: "teamproject-65cda",
  storageBucket: "teamproject-65cda.appspot.com",
  messagingSenderId: "242389243811",
  appId: "1:242389243811:web:907eb65b2005611f0dec16",
  measurementId: "G-51F2X4L86N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);


export {app, analytics, auth, db};