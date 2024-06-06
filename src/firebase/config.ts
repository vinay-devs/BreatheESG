// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB2tM51rH5aH5rBES1hFISrWXb4DYYDOJY",
    authDomain: "breatheesg-35ef3.firebaseapp.com",
    projectId: "breatheesg-35ef3",
    storageBucket: "breatheesg-35ef3.appspot.com",
    messagingSenderId: "857089875804",
    appId: "1:857089875804:web:f6a1189f29853cdeac2b99",
    measurementId: "G-DDM55KWK4C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();



export const githubprovider = new GithubAuthProvider();