// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';



// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDISWxE45QETMv3oozyp8r9VmjxsqzkGeg",
    authDomain: "mygram-1ff63.firebaseapp.com",
    databaseURL: "https://mygram-1ff63-default-rtdb.firebaseio.com",
    projectId: "mygram-1ff63",
    storageBucket: "gs://mygram-1ff63.appspot.com",
    messagingSenderId: "361888206371",
    appId: "1:361888206371:web:748d4beb0a0af9ca92eb96",
    measurementId: "G-1X16RX4L41"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };