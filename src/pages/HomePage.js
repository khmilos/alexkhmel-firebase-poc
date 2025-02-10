import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={homeContainerStyle}>
      <h1>Welcome to My Firebase App</h1>
      <p>
        This is a sample application using React and Firebase to demonstrate
        authentication, Firestore, and Storage functionalities.
      </p>
      <div style={linkContainerStyle}>
        <Link to="/login" style={linkStyle}>Login</Link>
        <Link to="/register" style={linkStyle}>Register</Link>
      </div>
    </div>
  );
};

const homeContainerStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
  textAlign: 'center',
};

const linkContainerStyle = {
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
};

const linkStyle = {
  padding: '10px 15px',
  backgroundColor: '#007bff',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
};

export default HomePage;
