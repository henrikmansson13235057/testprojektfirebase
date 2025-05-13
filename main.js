import { auth, provider, signInWithPopup, db, doc, setDoc } from './modules/firebase.js';

const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    await setDoc(doc(db, "users", user.uid), {
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid
    });

    // ✅ Redirect to dashboard.html
    window.location.href = "dashboard.html";
  } catch (error) {
    console.error("Login failed:", error.message);
  }
});
