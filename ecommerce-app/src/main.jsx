import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/Context.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import AuthProvider from "./context/AuthContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AuthProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
        </AuthProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
);
