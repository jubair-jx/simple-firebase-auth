// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtTD3-Sgw74pdUSwkasM6wiKx63wav4wE",
  authDomain: "simple-react-firebase-a2a2a.firebaseapp.com",
  projectId: "simple-react-firebase-a2a2a",
  storageBucket: "simple-react-firebase-a2a2a.appspot.com",
  messagingSenderId: "564695724625",
  appId: "1:564695724625:web:071a7cc78a8764beffbe70",
  measurementId: "G-R5FJ253TDH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
