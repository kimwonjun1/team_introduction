import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDPHN0OSDe0pEpTJ0KBpOZn_YIImEhOqYI",
  authDomain: "sparta-9b684.firebaseapp.com",
  projectId: "sparta-9b684",
  storageBucket: "sparta-9b684.appspot.com",
  messagingSenderId: "47068233556",
  appId: "1:47068233556:web:788c55086420dd633dd2c1",
  measurementId: "G-9JT8JR1SRQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };