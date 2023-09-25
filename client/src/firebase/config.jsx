// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
//   https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6vchwhx-W4SAdNqWIwip7vMtw6aFE-Ss",
  authDomain: "note-app-d606d.firebaseapp.com",
  projectId: "note-app-d606d",
  storageBucket: "note-app-d606d.appspot.com",
  messagingSenderId: "1042619981907",
  appId: "1:1042619981907:web:644749b679b86d3ca1a6a6",
  measurementId: "G-J0PXJY0F1M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
