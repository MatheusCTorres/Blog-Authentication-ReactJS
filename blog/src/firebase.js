import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBoyYIxEaeB-VaPU9NeyCfy0R9sv3IgBYM",
    authDomain: "blog-authentication-1d282.firebaseapp.com",
    projectId: "blog-authentication-1d282",
    storageBucket: "blog-authentication-1d282.firebasestorage.app",
    messagingSenderId: "446703940188",
    appId: "1:446703940188:web:a03ee139a2d0a85a0dac99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()