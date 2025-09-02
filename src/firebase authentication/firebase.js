// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQSSyECGr0d5nyxjWbPBnFFvAFk56yD3k",
  authDomain: "foodapp-ae7b7.firebaseapp.com",
  projectId: "foodapp-ae7b7",
  storageBucket: "foodapp-ae7b7.firebasestorage.app",
  messagingSenderId: "1089908612838",
  appId: "1:1089908612838:web:aab0529f829cc6e8132527",
  measurementId: "G-5C9274T2MN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
