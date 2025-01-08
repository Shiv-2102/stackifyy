import React, { createContext, useState, useContext } from 'react';

// Create the Authentication Context
const AuthContext = createContext();

// Custom hook to use auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Authentication Context provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([
    { username: 'john', password: 'password123' },
    { username: 'alice', password: 'alicepass' },
    { username: 'bob', password: 'bobsecure' },
  ]);

  // Login function to authenticate users
  const login = (username, password) => {
    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );
    if (foundUser) {
      setUser(foundUser); // Set the logged-in user
    } else {
      alert('Invalid Credentials');
    }
  };

  // Signup function (this example doesn't handle signup beyond the dummy users)
  const signup = (username, password) => {
    const newUser = { username, password };
    setUsers([...users, newUser]);
    setUser(newUser); // Automatically log the new user in
  };

  // Logout function
  const logout = () => {
    setUser(null); // Log out the current user
  };

  return (
    <AuthContext.Provider value={{ user, users, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
