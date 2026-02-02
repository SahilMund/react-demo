import { createContext, useContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext("");

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");

  // if there is no saved data in LC, then get the system preferred theme and use it
  if (!savedTheme)
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  return savedTheme;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
