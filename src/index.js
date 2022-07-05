import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./styles/main.bundle.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChGRhD0KZQ1T3utskHoSil79nimmjgbDI",
  authDomain: "cubegraph-57874.firebaseapp.com",
  projectId: "cubegraph-57874",
  storageBucket: "cubegraph-57874.appspot.com",
  messagingSenderId: "925568965287",
  appId: "1:925568965287:web:4bbc5c8c1cc529d4319982",
  measurementId: "G-FSGVYHWWZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
