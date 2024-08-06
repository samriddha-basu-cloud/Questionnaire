// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGqZ8sHlN8OSOIBU-uBiM_Rwvo2QGiTo8",
  authDomain: "questionnaire-219ff.firebaseapp.com",
  projectId: "questionnaire-219ff",
  storageBucket: "questionnaire-219ff.appspot.com",
  messagingSenderId: "336249292382",
  appId: "1:336249292382:web:78a361cdbb596a731a56cf",
  measurementId: "G-M5Q4Q4NEMQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, analytics };
