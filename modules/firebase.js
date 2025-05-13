// modules/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCJ9xO_PlqxeZmc71XDM8JnrAKjgCo17UM",
  authDomain: "fir-test-e97de.firebaseapp.com",
  projectId: "fir-test-e97de",
  storageBucket: "fir-test-e97de.appspot.com",
  messagingSenderId: "757872798243",
  appId: "1:757872798243:web:83b0f7123675a200279f96",
  measurementId: "G-DL3QR1V5ZH"

};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, db, doc, setDoc };
