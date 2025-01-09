import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProtectedRoute from './pages/ProtectedRoute';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';

import ThriveStackSDK from "@thrivestack/javascript-sdk";

const sdk = ThriveStackSDK.getInstance(
  "3l4IatXc8",  // ThriveStack productId
  "1BvUPT6fn",  // ThriveStack environmentId
  "https://api.dev.app.thrivestack.ai/v1/GetTSDefaultManagementToken", // URL of the endpoint
  true // (Optional) TEST MODE: Enable this in development environments when using the 'Test' feature to verify the integration
);

function App() {
  
  useEffect(() => {
    // Fetch the ThriveStack management token when the app loads
    const fetchToken = async () => {
      try {
        const { managementToken } = await sdk.getThriveStackToken("STACK's Auth Token");
        // Store the token in cookies
        document.cookie = `managementToken=${managementToken}; path=/; secure; samesite=strict`;
        console.log("Token fetched and stored:", managementToken);
      } catch (error) {
        console.error("Error fetching ThriveStack token:", error);
      }
    };

    fetchToken();
  }, []); // Empty dependency array to ensure this runs only once

  return (
    <>
      <h1>Welcome to the Auth App</h1>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route
          path="/"
          element={
            <ProtectedRoute>
              <h2>Home Page</h2>
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </>
  );
}

export default App;