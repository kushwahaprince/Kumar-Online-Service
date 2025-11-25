import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For now, using placeholders. User needs to replace these with actual values from Firebase Console.
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDummyKey",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "kumar-online-service.firebaseapp.com",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "kumar-online-service",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "kumar-online-service.appspot.com",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789:web:abcdef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
