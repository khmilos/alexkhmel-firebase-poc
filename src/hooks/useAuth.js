import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext'; // Import the AuthContext

// Custom hook to use authentication
export const useAuth = () => {
  // Access authentication context
  const { currentUser, register, login, logout } = useContext(AuthContext);

  // Return authentication state and functions
  return {
    currentUser,
    register,
    login,
    logout,
  };
};
