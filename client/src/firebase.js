// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-81eda.firebaseapp.com",
  projectId: "mern-estate-81eda",
  storageBucket: "mern-estate-81eda.appspot.com",
  messagingSenderId: "433620720604",
  appId: "1:433620720604:web:5d1d790f49d886ad37cd19"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);