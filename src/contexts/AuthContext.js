import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/config'; // Import the Firebase auth instance
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

// Create a context for authentication
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component to wrap around the application
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to register a new user
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Function to log in an existing user
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Function to log out the current user
  const logout = () => {
    return signOut(auth);
  };

  // Set up an observer for changes to the user's sign-in state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Clean up the subscription
    return unsubscribe;
  }, []);

  // Provide the authentication functions and current user state to children
  const value = {
    currentUser,
    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
