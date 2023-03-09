// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfxymsSdkiNLNQbyFO8Yrw3LXEYLjNyrY",
  authDomain: "padelmaniacblog.firebaseapp.com",
  projectId: "padelmaniacblog",
  storageBucket: "padelmaniacblog.appspot.com",
  messagingSenderId: "62618660154",
  appId: "1:62618660154:web:aa9b77e9655ceb2f093403"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }



