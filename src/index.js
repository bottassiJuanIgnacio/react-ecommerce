import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Firebase
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAtEoaKpuEQ_UGncLtyebgS_bz2d8oo9us",
  authDomain: "gyro-909d5.firebaseapp.com",
  projectId: "gyro-909d5",
  storageBucket: "gyro-909d5.appspot.com",
  messagingSenderId: "947425397144",
  appId: "1:947425397144:web:de5e36a05cf37e1a8943ed"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/*<React.StrictMode>*/}
    <App />
  {/*</React.StrictMode>*/}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
