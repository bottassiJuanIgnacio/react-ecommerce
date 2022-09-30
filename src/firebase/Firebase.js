// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtEoaKpuEQ_UGncLtyebgS_bz2d8oo9us",
  authDomain: "gyro-909d5.firebaseapp.com",
  projectId: "gyro-909d5",
  storageBucket: "gyro-909d5.appspot.com",
  messagingSenderId: "947425397144",
  appId: "1:947425397144:web:de5e36a05cf37e1a8943ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
