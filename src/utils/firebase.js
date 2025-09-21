// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo7fTsA4XnqQlHNskZ0whnnccUTpHvaVc",
  authDomain: "netflix-gpt-c6700.firebaseapp.com",
  projectId: "netflix-gpt-c6700",
  storageBucket: "netflix-gpt-c6700.firebasestorage.app",
  messagingSenderId: "352080251782",
  appId: "1:352080251782:web:64d1daef8aa345e641ba07",
  measurementId: "G-BTDEHQNPFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);