import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { firebaseApp } from './config'; // Import the initialized Firebase app

// Initialize Firebase Authentication
const auth = getAuth(firebaseApp);

// Function to register a new user
export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Function to log in an existing user
export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Function to log out the current user
export const logoutUser = () => {
  return signOut(auth);
};

// Function to set up an observer on the Auth object
export const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export default auth;
