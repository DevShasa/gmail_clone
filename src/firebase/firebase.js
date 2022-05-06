
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAERFpimKjoYdjkgvW6oghyLAda41phvj0",
    authDomain: "clone-8e163.firebaseapp.com",
    projectId: "clone-8e163",
    storageBucket: "clone-8e163.appspot.com",
    messagingSenderId: "945775801950",
    appId: "1:945775801950:web:fa566370e393cd952a26cf"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider();

export { db, auth, provider, signInWithPopup };