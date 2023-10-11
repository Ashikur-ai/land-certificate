// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDoR_bCcqUL_w9KFf7Ned4YTkb1XeSmr_8",
    authDomain: "land-document-6e00a.firebaseapp.com",
    projectId: "land-document-6e00a",
    storageBucket: "land-document-6e00a.appspot.com",
    messagingSenderId: "264398566051",
    appId: "1:264398566051:web:97b0d0f5ae4c9148d44516"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;