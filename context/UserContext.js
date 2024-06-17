// context/UserContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context for the user data
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setLoggedUser = (userData) => {
    setUser(userData);
  };

  const removeLoggedUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setLoggedUser, removeLoggedUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook to use the UserContext
export const useUser = () => useContext(UserContext);
