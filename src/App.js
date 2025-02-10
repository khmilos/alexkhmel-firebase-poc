import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { FirebaseProvider } from './contexts/FirebaseContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import PrivateRoute from './components/Auth/PrivateRoute';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

const App = () => {
  return (
    <FirebaseProvider>
      <AuthProvider>
        <Router>
          <div style={appContainerStyle}>
            <Header />
            <main style={mainContentStyle}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<PrivateRoute element={DashboardPage} />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </FirebaseProvider>
  );
};

const appContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const mainContentStyle = {
  flex: '1',
  padding: '20px',
};

export default App;
