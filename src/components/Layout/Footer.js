import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div>
        <p>{new Date().getFullYear()} My Firebase App. All rights reserved.</p>
      </div>
      <div>
        <ul style={linkListStyle}>
          <li>
            <a href="/privacy" style={linkStyle}>Privacy Policy</a>
          </li>
          <li>
            <a href="/terms" style={linkStyle}>Terms of Service</a>
          </li>
          <li>
            <a href="/contact" style={linkStyle}>Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#f8f9fa',
  padding: '10px 0',
  textAlign: 'center',
  position: 'fixed',
  width: '100%',
  bottom: '0',
};

const linkListStyle = {
  listStyleType: 'none',
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#007bff',
};

export default Footer;
