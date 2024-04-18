// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDMTP7QuROTlUuRYUI_uwsNJ3USUhz_cc",
  authDomain: "realtor-clone-react-dbd44.firebaseapp.com",
  projectId: "realtor-clone-react-dbd44",
  storageBucket: "realtor-clone-react-dbd44.appspot.com",
  messagingSenderId: "298951938065",
  appId: "1:298951938065:web:9eb434a3cf9df5cf2da1b0"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()