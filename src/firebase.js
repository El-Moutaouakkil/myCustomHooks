// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvTTRSvhLqXAch-mdm_CvUNj8N0qfnDvQ",
    authDomain: "firestore-custom-hooks.firebaseapp.com",
    projectId: "firestore-custom-hooks",
    storageBucket: "firestore-custom-hooks.appspot.com",
    messagingSenderId: "540825563736",
    appId: "1:540825563736:web:a1d3489de4ebc827ed102d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db ;