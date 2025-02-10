import React from 'react';
import { useAuth } from '../hooks/useAuth';
import ImageList from '../components/Image/ImageList';
import ImageUpload from '../components/Image/ImageUpload';

const DashboardPage = () => {
  const { currentUser } = useAuth();

  return (
    <div style={dashboardContainerStyle}>
      <h1>Welcome to Your Dashboard</h1>
      {currentUser && <p>Logged in as: {currentUser.email}</p>}
      
      <div style={sectionStyle}>
        <h2>Upload New Image</h2>
        <ImageUpload />
      </div>

      <div style={sectionStyle}>
        <h2>Your Image Gallery</h2>
        <ImageList />
      </div>
    </div>
  );
};

const dashboardContainerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
};

const sectionStyle = {
  marginBottom: '40px',
};

export default DashboardPage;
