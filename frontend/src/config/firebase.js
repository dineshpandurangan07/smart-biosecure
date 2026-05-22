// Firebase Configuration for Smart BioSecure Farm Portal
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBajErBtfyHUc5rR-pckzt4Uf_wjaMofRo",
  authDomain: "smart-bio-c920b.firebaseapp.com",
  projectId: "smart-bio-c920b",
  storageBucket: "smart-bio-c920b.firebasestorage.app",
  messagingSenderId: "612631710948",
  appId: "1:612631710948:web:a8ec49eefed7991a4370f1",
  measurementId: "G-M9PX76LED1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Google Provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
