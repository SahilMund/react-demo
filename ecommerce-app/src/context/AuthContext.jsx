import React from "react";
import { createContext } from "react";
import { useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const AUTH_STORAGE_KEY = "auth_token";
  const [user, setUser] = useState(() =>
    localStorage.getItem(AUTH_STORAGE_KEY),
  );
  const login = (token) => {
    localStorage.setItem(AUTH_STORAGE_KEY, token);
    setUser(token);
  };
  const logout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
