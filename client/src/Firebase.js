// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "myblog-6da13.firebaseapp.com",
  projectId: "myblog-6da13",
  storageBucket: "myblog-6da13.appspot.com",
  messagingSenderId: "655843725396",
  appId: "1:655843725396:web:eaacb03af6687e9c72ddc1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

