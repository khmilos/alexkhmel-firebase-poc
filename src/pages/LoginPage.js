import React from 'react';
import Login from '../components/Auth/Login';

const LoginPage = () => {
  return (
    <div style={loginPageContainerStyle}>
      <h1>Login</h1>
      <Login />
    </div>
  );
};

const loginPageContainerStyle = {
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
  textAlign: 'center',
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

export default LoginPage;
