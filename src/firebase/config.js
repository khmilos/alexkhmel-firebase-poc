import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
