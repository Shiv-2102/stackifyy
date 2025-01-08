import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProtectedRoute from './pages/ProtectedRoute';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <h1>Welcome to the Auth App</h1>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/onboarding" element={<Onboarding />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <h2>Home Page</h2>
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
