import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut as firebaseSignOut,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
    onAuthStateChanged as firebaseOnAuthStateChanged
} from 'firebase/auth';
import { auth } from '../config/firebase';

// Sign up with email and password
export const signUpWithEmail = async (email, password, displayName) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Update profile with display name
        if (displayName) {
            await updateProfile(userCredential.user, { displayName });
        }
        return { success: true, user: userCredential.user };
    } catch (error) {
        return { success: false, error: error.message };
    }
};

// Sign in with email and password
export const signInWithEmail = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        return { success: false, error: error.message };
    }
};

// Sign in with Google
export const signInWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth, provider);
        return { success: true, user: userCredential.user };
    } catch (error) {
        return { success: false, error: error.message };
    }
};

// Sign out
export const signOut = async () => {
    try {
        await firebaseSignOut(auth);
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
};

// Get current user
export const getCurrentUser = () => {
    return auth.currentUser;
};

// Listen to auth state changes
export const onAuthStateChanged = (callback) => {
    return firebaseOnAuthStateChanged(auth, callback);
};
