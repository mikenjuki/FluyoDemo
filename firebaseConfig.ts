// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

//  Firebase configuration
// TODO: env
const firebaseConfig = {
  apiKey: "AIzaSyDmR_1Fv7ICT-sxczqBaQnIUSKJKcYDhzk",
  authDomain: "react-native-test-eb57b.firebaseapp.com",
  projectId: "react-native-test-eb57b",
  storageBucket: "react-native-test-eb57b.appspot.com",
  messagingSenderId: "83221603773",
  appId: "1:83221603773:web:dc2e507c994b150311ded4",
};

// Initialize
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
