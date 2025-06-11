import React, { createContext, useEffect, useState } from "react";

// Create context
export const ThemeContext = createContext();

// Create provider
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
    if (newMode === "dark") {
      
      document.body.classList.add("dark");
    } else {
     
      document.body.classList.remove("dark");
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setMode(storedTheme);
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
