import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAJIC-NxA6OxFPlQo1yLP-T3hN4rgZAR9I",
  authDomain: "codec-academy.firebaseapp.com",
  projectId: "codec-academy",
  storageBucket: "codec-academy.firebasestorage.app",
  messagingSenderId: "880270944361",
  appId: "1:880270944361:web:ddf4bff4ae5e76cda19af8",
  measurementId: "G-90ECSJKZVV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export { db, provider };
