// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMrI0YsXNZS6UVqSrt-5NNUwclKSp-WRU",
  authDomain: "netflixgpt-7cdec.firebaseapp.com",
  projectId: "netflixgpt-7cdec",
  storageBucket: "netflixgpt-7cdec.firebasestorage.app",
  messagingSenderId: "810275680120",
  appId: "1:810275680120:web:f2b75af139afe5f878228d",
  measurementId: "G-76C8Q46F4R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();