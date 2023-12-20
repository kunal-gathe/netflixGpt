// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDddMxvhVny-NFnsj1-8N4BGKyLV0JrVVA",
  authDomain: "netflixgpt-43eed.firebaseapp.com",
  projectId: "netflixgpt-43eed",
  storageBucket: "netflixgpt-43eed.appspot.com",
  messagingSenderId: "102106391177",
  appId: "1:102106391177:web:d4e462b4552172c40f9c58",
  measurementId: "G-XXHDL33C1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);