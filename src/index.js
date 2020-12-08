import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDjY2c3Ys24-4BOsAEdDmLqiHVBKNotqKA",
  authDomain: "energy-consumption-97059.firebaseapp.com",
  databaseURL:
    "https://energy-consumption-97059-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "energy-consumption-97059",
  storageBucket: "energy-consumption-97059.appspot.com",
  messagingSenderId: "446134331410",
  appId: "1:446134331410:web:1d4f45cda6b7ea578fd0cb",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
