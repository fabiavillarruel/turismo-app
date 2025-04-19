// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxKJIIwL_VpsvBBRQLJo5Vmr-cyXz-IsU",
  authDomain: "turismo-app-fb4b3.firebaseapp.com",
  projectId: "turismo-app-fb4b3",
  storageBucket: "turismo-app-fb4b3.firebasestorage.app",
  messagingSenderId: "120349108694",
  appId: "1:120349108694:web:6dd45d760f5ab6d836dc77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)