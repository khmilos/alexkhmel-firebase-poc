import React from 'react';
import Register from '../components/Auth/Register';

const RegisterPage = () => {
  return (
    <div style={registerPageContainerStyle}>
      <h1>Register</h1>
      <Register />
    </div>
  );
};

const registerPageContainerStyle = {
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
  textAlign: 'center',
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

export default RegisterPage;
