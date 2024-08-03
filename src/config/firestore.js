// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCtorSoGuYWVO6J9suKz-v-ycTuEijoc4",
  authDomain: "e-shop-ac377.firebaseapp.com",
  projectId: "e-shop-ac377",
  storageBucket: "e-shop-ac377.appspot.com",
  messagingSenderId: "13677685042",
  appId: "1:13677685042:web:2211be8280e2d2c8938f2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

