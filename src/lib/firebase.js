import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDSG5che4B-C99DSvT-kRYo5XnyM8DQvfE",
  authDomain: "nimod-pacs.firebaseapp.com",
  projectId: "nimod-pacs",
  storageBucket: "nimod-pacs.firebasestorage.app",
  messagingSenderId: "723328186708",
  appId: "1:723328186708:web:8e18a4b6b9b151ce2730c1",
  measurementId: "G-13BZZD5XZ9"
};

// Initialize Firebase (Singleton pattern to prevent re-initialization errors in Next.js)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export Auth for usage in components
const auth = getAuth(app);

// Analytics (Only initialize in browser environment)
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, auth, analytics };
