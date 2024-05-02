// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "dotenv/config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "food-order-app-c9d35.firebaseapp.com",
  projectId: "food-order-app-c9d35",
  storageBucket: "food-order-app-c9d35.appspot.com",
  messagingSenderId: "1094200294766",
  appId: "1:1094200294766:web:865b1e65fc4ce1c454557f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
