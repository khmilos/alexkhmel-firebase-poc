import React, { createContext, useContext } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "TODO_ADD_ENV",
  authDomain: "TODO_ADD_ENV",
  projectId: "TODO_ADD_ENV",
  storageBucket: "TODO_ADD_ENV",
  messagingSenderId: "TODO_ADD_ENV",
  appId: "TODO_ADD_ENV",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

// Create a context for Firebase
const FirebaseContext = createContext();

// Custom hook to use the FirebaseContext
export const useFirebase = () => {
  return useContext(FirebaseContext);
};

// FirebaseProvider component to wrap around the application
export const FirebaseProvider = ({ children }) => {
  const value = {
    auth,
    firestore,
    storage,
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};
